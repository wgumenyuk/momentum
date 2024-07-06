import {
  ArrowLeftIcon,
  CheckIcon,
  EditIcon,
  PlusIcon,
  TextIcon,
  XIcon
} from "lucide-react";

// Intern
import { Workouts } from "$internal/api";
import { useWorkout } from "$components/WorkoutContext";
import { Card } from "$components/Card";
import { Button } from "$components/Button";
import { Input } from "$components/Input";

// Types
import type { FC } from "react";
import type { Exercise } from "@momentum/shared";
import type { WorkoutExercise } from "$components/WorkoutContext";
import type { WorkoutStack } from "$pages/workout";

type AddWorkoutProps = {
  setStack: (stack: WorkoutStack) => void;
};

type ExerciseProps = {
  data: WorkoutExercise;
  setStack: (stack: WorkoutStack) => void;
  onDelete: () => void;
};

const Exercise: FC<ExerciseProps> = ({ setStack, onDelete, data }) => {
  const { setExercise } = useWorkout()!;

  const handleEditClick = () => {
    setExercise(data);
    setStack("edit-exercise");
  };

  return (
    <Card className="flex justify-between items-center">
      <div className="flex flex-col gap-0.5">
        <span>{data.id}</span>
        <span className="text-blue-500 text-sm">{data.equipment.join(", ")}</span>
      </div>
      <div className="flex gap-2">
        <button className="bg-blue-700 p-2 rounded-lg" onClick={handleEditClick}>
          <EditIcon/>
        </button>
        <button className="bg-blue-700 p-2 rounded-lg" onClick={onDelete}>
          <XIcon/>
        </button>
      </div>
    </Card>
  );
};

export const AddWorkout: FC<AddWorkoutProps> = ({ setStack }) => {
  const {
    isUpdating,
    workoutExercises,
    workoutId,
    workoutName,
    setWorkoutName,
    workoutDescription,
    setWorkoutDescription,
    setWorkoutExercises
  } = useWorkout()!;

  const saveWorkout = async () => {
    let response;

    // `isUpdating` bedeutet, dass der Nutzer ein bereits vorhandenes Workout
    // bearbeitet und aktualisiert.
    if(isUpdating && workoutId) {
      response = await Workouts.update(workoutId, {
        name: workoutName,
        description: workoutDescription,
        exercises: workoutExercises.map((exercise) => {
          return {
            exerciseId: exercise.id,
            sets: exercise.sets,
            reps: exercise.reps
          };
        })
      });
    }

    // Bei `!isUpdating` wird im Gegenzug ein neues Workout erstellt und
    // gespeichert.
    if(!isUpdating) {
      response = await Workouts.create({
        name: workoutName,
        description: workoutDescription,
        exercises: workoutExercises.map((exercise) => {
          return {
            exerciseId: exercise.id,
            sets: exercise.sets, 
            reps: exercise.reps
          };
        })
      });
    }

    if(!response || !response.ok) {
      console.log(response);
      // TODO
      return;
    }

    setStack("workouts");
  };

  const deleteExercise = (exerciseId: string) => {
    setWorkoutExercises((exercises) => {
      return [ ...exercises ].filter((exercise) => exercise.id !== exerciseId);
    }); 
  };

  const handleDeleteWorkout = async () => {
    const response = await Workouts.delete(workoutId);

    if(!response || !response.ok) {
      console.error(response);
      return;
    }

    setStack("workouts");
  };

  return (
    <div className="min-h-screen w-full bg-gray-900 p-6">
      <div className="flex justify-between items-center h-8 mb-6">
        <button className="text-grey-500" onClick={() => setStack("workouts")}>
          <ArrowLeftIcon size="28px"/>
        </button>
        <button className="text-green-400" onClick={saveWorkout}>
          <CheckIcon size="28px"/>
        </button>
      </div>
      <div className="flex flex-col gap-6 w-full">
        <Input
          type="text"
          placeholder="Name"
          className="bg-blue-800"
          value={workoutName}
          onChange={setWorkoutName}
          icon={TextIcon}
        />
        <Input
          type="text"
          placeholder="Description"
          className="bg-blue-800"
          value={workoutDescription}
          onChange={setWorkoutDescription}
          icon={TextIcon}
        />

        <span className="block w-full h-px bg-blue-800 rounded"/>

        <div className="flex justify-between items-center">
          <span className="text-lg">Exercises</span>
          <button
            className="bg-blue-800 p-1 rounded"
            onClick={() => setStack("add-exercise")}
          >
            <PlusIcon size="28px"/>
          </button>
        </div>

        {!workoutExercises.length && (
          <span className="text-blue-600">No exercises yet...</span>
        )}

        {workoutExercises.length > 0 && workoutExercises.map((exercise) => (
          <Exercise
            key={exercise.id}
            data={exercise}
            setStack={setStack}
            onDelete={() => deleteExercise(exercise.id)}
          />
        ))}

        {isUpdating && (
          <>
            <span className="block w-full h-px bg-blue-800 rounded"/>
            <Button variant="red" onClick={handleDeleteWorkout}>
              Delete
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

