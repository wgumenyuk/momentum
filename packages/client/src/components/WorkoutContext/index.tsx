import { createContext, useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

// Intern
import { Exercises as ExercisesApi } from "$internal/api";

// Types
import type { Dispatch, FC, ReactNode, SetStateAction } from "react";
import type { Exercise, PastWorkoutSchemaType } from "@momentum/shared";

type Filter = {
  chest: boolean;
  shoulders: boolean;
  arms: boolean;
  back: boolean;
  legs: boolean;
};

export type WorkoutExercise = Exercise & {
  reps: number;
  sets: number;
};

type WorkoutContextType = {
  isUpdating: boolean;
  setIsUpdating: (value: boolean) => void;
  exercises: Exercise[];
  setExercises: (exercises: Exercise[]) => void;
  exercise: WorkoutExercise | null;
  setExercise: Dispatch<SetStateAction<WorkoutExercise | null>>;
  filter: Filter;
  setFilter: (filter: Filter) => void;
  workoutExercises: WorkoutExercise[];
  setWorkoutExercises: (
    exercises: WorkoutExercise[] |
    ((exercises: WorkoutExercise[]) => WorkoutExercise[])
  ) => void;
  workoutId: string;
  setWorkoutId: (id: string) => void;
  workoutName: string;
  setWorkoutName: (name: string) => void;
  workoutDescription: string;
  setWorkoutDescription: (description: string) => void;
  activeWorkout: PastWorkoutSchemaType | null;
  setActiveWorkout: Dispatch<SetStateAction<PastWorkoutSchemaType | null>>;
};

type WorkoutProviderProps = {
  children?: ReactNode;
};

const WorkoutContext = createContext<WorkoutContextType | null>(null);

/**
  Provider für den dekodierten JWT-Payload.
*/
export const WorkoutProvider: FC<WorkoutProviderProps> = () => {
  const [ isUpdating, setIsUpdating ] = useState(false);
  const [ exercises, setExercises ] = useState<Exercise[]>([]);
  const [ exercise, setExercise ] = useState<WorkoutExercise | null>(null);
  
  const [ filter, setFilter ] = useState<Filter>({
    chest: true,
    shoulders: true,
    arms: true,
    back: true,
    legs: true
  });

  const [ workoutExercises, setWorkoutExercises ] = useState<WorkoutExercise[]>([]);
  const [ workoutId, setWorkoutId ] = useState("");
  const [ workoutName, setWorkoutName ] = useState("");
  const [ workoutDescription, setWorkoutDescription ] = useState("");

  const [
    activeWorkout,
    setActiveWorkout
  ] = useState<PastWorkoutSchemaType | null>(null);

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
      exercise,
      setExercise,
      filter,
      setFilter,
      workoutExercises,
      setWorkoutExercises,
      workoutId,
      setWorkoutId,
      workoutName,
      setWorkoutName,
      workoutDescription,
      setWorkoutDescription,
      activeWorkout,
      setActiveWorkout
    }}>
      <Outlet/>
    </WorkoutContext.Provider>
  );
};

export const useWorkout = () => {
  return useContext(WorkoutContext);
};
