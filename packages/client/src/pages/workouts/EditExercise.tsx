import { useState } from "react";
import {
  ArrowLeftIcon,
  CheckIcon,
  BetweenHorizonalStartIcon,
  RotateCwIcon
} from "lucide-react";

// Intern
import { useWorkout } from "$components/WorkoutContext";
import { Input } from "$components/Input";
import { Button } from "$components/Button";

// Types
import type { FC } from "react";
import type { WorkoutStack } from "$pages/workouts";

type EditExerciseProps = {
  setStack: (stack: WorkoutStack) => void;
};

export const EditExercise: FC<EditExerciseProps> = ({ setStack }) => {
  const { exercise, setWorkoutExercises } = useWorkout()!;

  const [ sets, setSets ] = useState(exercise?.sets?.toString() || "1");
  const [ reps, setReps ] = useState(exercise?.reps?.toString() || "1");

  const apply = () => {
    if(!exercise) {
      return;
    }

    setWorkoutExercises((exercises) => {
      const i = exercises.findIndex((e) => e.id === exercise.id);
      const exercisesCopy = [ ...exercises ];

      exercisesCopy[i] = {
        ...exercisesCopy[i],
        sets: parseInt(sets),
        reps: parseInt(reps)
      };

      return exercisesCopy;
    });

    setStack("add-workout");
  };

  const deleteExercise = () => {
    setWorkoutExercises((exercises) => {
      return [ ...exercises ].filter((e) => e.id !== exercise!.id);
    });

    setStack("add-workout");
  };

  return exercise && (
    <div className="min-h-screen w-full bg-gray-900 p-6">
      <div className="flex justify-between items-center h-8 mb-6">
        <button className="text-grey-500" onClick={() => setStack("add-workout")}>
          <ArrowLeftIcon size="28px"/>
        </button>
        <button className="text-green-500" onClick={apply}>
          <CheckIcon size="28px"/>
        </button>
      </div>
      <div className="flex flex-col gap-6 w-full">
        <div className="flex flex-col gap-3">
          <span className="font-bold">Sets</span>
          <Input
            type="text"
            className="bg-blue-800"
            placeholder="1"
            value={sets}
            icon={BetweenHorizonalStartIcon}
            onChange={setSets}
          />
        </div>

        <div className="flex flex-col gap-3">
          <span className="font-bold">Reps</span>
          <Input
            type="text"
            className="bg-blue-800"
            placeholder="1"
            value={reps}
            icon={RotateCwIcon}
            onChange={setReps}
          />
        </div>

        <span className="block w-full h-px bg-blue-800 rounded"/>
        <Button variant="red" onClick={deleteExercise}>
          Delete
        </Button>
      </div>
    </div>
  );
};
