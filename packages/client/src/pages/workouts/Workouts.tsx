import { useEffect, useState } from "react";
import { PlusIcon, EditIcon } from "lucide-react";

// Intern
import { Workouts as WorkoutsApi } from "$internal/api";
import { useWorkout } from "$components/WorkoutContext";
import { Card } from "$components/Card";
import { Navigation } from "$components/Navigation";

// Types
import type { FC } from "react";
import type { Workout, Workout as WorkoutType } from "@momentum/shared";
import type { WorkoutStack } from "$pages/workouts";

type WorkoutsProps = {
  setStack: (stack: WorkoutStack) => void;
};

type WorkoutProps = {
  setStack: (stack: WorkoutStack) => void;
  data: WorkoutType;
};

const Workout: FC<WorkoutProps> = ({ setStack, data }) => {
  const {
    setIsUpdating,
    setWorkoutId,
    setWorkoutName,
    setWorkoutDescription,
    setWorkoutExercises,
    exercises
  } = useWorkout()!;

  const handleClick = () => {
    setIsUpdating(true);
    setWorkoutId(data.id);
    setWorkoutName(data.name);
    setWorkoutDescription(data.description);

    if(exercises.length > 0) {
      const workoutExercises = data.exercises.map((exercise) => {
        return {
          ...exercises.find((e) => e.id === exercise.exerciseId)!,
          ...exercise
        }; 
      });

      setWorkoutExercises(workoutExercises);
    }

    setStack("add-workout"); 
  };

  return (
    <Card className="flex justify-between items-center">
      <div className="flex flex-col gap-0.5">
        <span>{data.name}</span>
        {data.description && (
          <span className="text-blue-500">{data.description}</span>
        )}
      </div>
      <button
        className="bg-blue-700 p-3 rounded-lg"
        onClick={handleClick}
      >
        <EditIcon/>
      </button>
    </Card>
  );
};

export const Workouts: FC<WorkoutsProps> = ({ setStack }) => {
  const [ workouts, setWorkouts ] = useState<WorkoutType[]>([]);
  
  const {
    setIsUpdating,
    setWorkoutId,
    setWorkoutName,
    setWorkoutDescription,
    setWorkoutExercises,
    setExercise
  } = useWorkout()!;

  const fetchWorkouts = async () => {
    const response = await WorkoutsApi.getAll();

    if(!response || !response.ok) {
      // TODO
      return;
    }

    setWorkouts(response.data.workouts);
  };

  useEffect(() => {
    setIsUpdating(false);
    setWorkoutId("");
    setWorkoutName("");
    setWorkoutDescription("");
    setWorkoutExercises([]);
    setExercise(null);

    if(workouts.length === 0) {
      fetchWorkouts();
    }
  }, []);

  return (
    <>
      <div className="min-h-screen w-full bg-gray-900 p-6">
        <div className="flex justify-between items-center h-8 mb-6">
          <h1 className="text-2xl font-bold text-grey-500">Workouts</h1>
          <button className="text-grey-500" onClick={() => setStack("add-workout")}>
            <PlusIcon size="28px"/>
          </button>
        </div>
        <div className="flex flex-col gap-6 w-full">
          {!workouts.length && (
            <span className="text-blue-600">No workouts yet...</span>
          )}

          {workouts.length > 0 && workouts.map((workout) => (
            <Workout
              key={workout.id}
              setStack={setStack}
              data={workout}
            />
          ))}
        </div>
      </div>
      <Navigation/>
    </>
  );
};
