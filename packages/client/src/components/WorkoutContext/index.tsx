import { createContext, useContext, useEffect, useState } from "react";

// Intern
import { Exercises as ExercisesApi } from "$internal/api";

// Types
import type { FC, ReactNode } from "react";
import type { Exercise } from "@momentum/shared";

type Filter = {
  chest: boolean;
  shoulders: boolean;
  arms: boolean;
  back: boolean;
  legs: boolean;
};

type WorkoutContextType = {
  isUpdating: boolean;
  setIsUpdating: (value: boolean) => void;
  exercises: Exercise[];
  setExercises: (exercises: Exercise[]) => void;
  filter: Filter;
  setFilter: (filter: Filter) => void;
  workoutExercises: Exercise[];
  setWorkoutExercises: (
    exercises: Exercise[] |
    ((exercises: Exercise[]) => Exercise[])
  ) => void;
  workoutId: string;
  setWorkoutId: (id: string) => void;
  workoutName: string;
  setWorkoutName: (name: string) => void;
  workoutDescription: string;
  setWorkoutDescription: (description: string) => void;
};

type WorkoutProviderProps = {
  children: ReactNode;
};

const WorkoutContext = createContext<WorkoutContextType | null>(null);

/**
  Provider für den dekodierten JWT-Payload.
*/
export const WorkoutProvider: FC<WorkoutProviderProps> = ({ children }) => {
  const [ isUpdating, setIsUpdating ] = useState(false);
  const [ exercises, setExercises ] = useState<Exercise[]>([]);
  
  const [ filter, setFilter ] = useState<Filter>({
    chest: true,
    shoulders: true,
    arms: true,
    back: true,
    legs: true
  });

  const [ workoutExercises, setWorkoutExercises ] = useState<Exercise[]>([]);
  const [ workoutId, setWorkoutId ] = useState("");
  const [ workoutName, setWorkoutName ] = useState("");
  const [ workoutDescription, setWorkoutDescription ] = useState("");

  const fetchExercises = async () => {
    const response = await ExercisesApi.getAll();

    if(!response || !response.ok) {
      console.error(response);
      return;
    }

    setExercises(response.data.exercises);
  };

  useEffect(() => {
    fetchExercises();
  }, []);

  return (
    <WorkoutContext.Provider value={{
      isUpdating,
      setIsUpdating,
      exercises,
      setExercises,
      filter,
      setFilter,
      workoutExercises,
      setWorkoutExercises,
      workoutId,
      setWorkoutId,
      workoutName,
      setWorkoutName,
      workoutDescription,
      setWorkoutDescription
    }}>
      {children}
    </WorkoutContext.Provider>
  );
};

export const useWorkout = () => {
  return useContext(WorkoutContext);
};
