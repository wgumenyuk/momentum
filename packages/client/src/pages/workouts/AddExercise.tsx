import { useEffect, useMemo, useState } from "react";
import { ArrowLeftIcon, FilterIcon, SearchIcon } from "lucide-react";

// Intern
import { Exercises } from "$internal/api";
import { Loader } from "$components/Loader";
import { Card } from "$components/Card";
import { Input } from "$components/Input";
import { useWorkout } from "$components/WorkoutContext";

// Types
import type { FC } from "react";
import type { Exercise } from "@momentum/shared";
import type { WorkoutExercise } from "$components/WorkoutContext";
import type { WorkoutStack } from "$pages/workouts";

type AddExerciseProps = {
  setStack: (stack: WorkoutStack) => void;
};

type ExerciseProps = {
  apply: (exercise: Exercise) => void;
  data: Exercise;
};

// TODO: Namen später in eine internationalisierte Datei übertragen.
// const ExerciseNames: Record<string, string> = {
// };

// TODO: Namen später in eine internationalisierte Datei übertragen.
// const MuscleGroupNames: Record<string, string> = {
// };

const Exercise: FC<ExerciseProps> = ({ apply, data }) => {
  return (
    <span onClick={() => apply(data)}>
      <Card className="flex flex-col gap-0.5">
        <span>
          {/* ExerciseNames[data.id] */}
          {data.id}
        </span>
        <span className="text-blue-500 text-sm">
          {/* data.muscleGroups.map((group) => MuscleGroupNames[group]).join(", ") */}
          {data.muscleGroups.join(", ")}
        </span>
      </Card>
    </span>
  );
};

export const AddExercise: FC<AddExerciseProps> = ({ setStack }) => {
  const [ isLoading, setIsLoading ] = useState(true);
  const [ search, setSearch ] = useState("");
  const {
    filter,
    exercises,
    setExercises,
    setWorkoutExercises
  } = useWorkout()!;

  const filteredExercises = useMemo(() => {
    return exercises
      .filter((exercise) => {
        return exercise; // TODO Filter anwenden.
      })
      .filter((exercises) => {
        return exercises.id.includes(search); // TODO: Namen filtern, nicht ID.
      });
  }, [ filter, exercises, search ]);

  const fetchExercises = async () => {
    const response = await Exercises.getAll();

    if(!response || !response.ok) {
      // TODO
      return;
    }

    setExercises(response.data.exercises);
    setIsLoading(false);
  };

  const apply = (exercise: Exercise) => {
    setWorkoutExercises((exercises: Exercise[]) => [
      ...exercises,
      exercise
    ] as WorkoutExercise[]);

    setStack("add-workout");
  };

  useEffect(() => {
    if(!exercises.length) {
      fetchExercises();
      return;
    }

    setIsLoading(false);
  }, []);
  
  return (
    <div className="min-h-screen w-full bg-gray-900 p-6">
      <div className="flex justify-between items-center h-8 mb-6">
        <button className="text-grey-500" onClick={() => setStack("add-workout")}>
          <ArrowLeftIcon size="28px"/>
        </button>
        <button className="text-grey-500" onClick={() => setStack("filter")}>
          <FilterIcon size="24px"/>
        </button>
      </div>
      <div className="flex flex-col gap-6 w-full">
        <Input
          type="text"
          className="bg-blue-800"
          placeholder="Search..."
          value={search}
          onChange={setSearch}
          icon={SearchIcon}
        />

        {isLoading && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2">
            <Loader/>
          </div>
        )}

        {!isLoading && !filteredExercises.length && (
          <span className="text-blue-600">No exercises matched the filters...</span>
        )}

        {!isLoading && filteredExercises.length > 0 && (
          <span>
            Showing {filteredExercises.length} exercise{filteredExercises.length === 1 ? "" : "s"}
          </span>
        )}

        {
          !isLoading &&
          filteredExercises.length > 0 &&
          filteredExercises.map((exercise) => (
            <Exercise key={exercise.id} apply={apply} data={exercise}/>
          ))
        }
      </div>
    </div>
  );
};
