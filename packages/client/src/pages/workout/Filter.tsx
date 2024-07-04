import { useState } from "react";
import { ArrowLeftIcon, CheckIcon } from "lucide-react";

// Intern
import { Card } from "$components/Card";
import { Checkbox } from "$components/Checkbox";
import { useWorkout } from "$components/WorkoutContext";

// Types
import type { FC } from "react";
import type { WorkoutStack } from "$pages/workout";

type FilterProps = {
  setStack: (stack: WorkoutStack) => void;
};

type MuscleGroupProps = {
  name: string;
  isChecked: boolean;
  onToggle: (value: boolean) => void;
};

const MuscleGroup: FC<MuscleGroupProps> = ({ name, isChecked, onToggle }) => {
  return (
    <Card className="flex justify-between items-center">
      <span>{name}</span>
      <Checkbox
        variant="blank"
        checked={isChecked}
        onChange={onToggle}
      />
    </Card>
  );
};

export const Filter: FC<FilterProps> = ({ setStack }) => {
  const { filter, setFilter } = useWorkout()!;
  const [ filterCopy, setFilterCopy ] = useState({ ...filter });

  const apply = () => {
    setFilter({ ...filterCopy });
    setStack("add-exercise");
  };

  const onToggle = (muscleGroup: string, value: boolean) => {
    setFilterCopy((filterCopy) => {
      return {
        ...filterCopy,
        [ muscleGroup ]: value
      };
    });
  };
  
  return (
    <div className="min-h-screen w-full bg-gray-900 p-6">
      <div className="flex justify-between items-center h-8 mb-6">
        <button className="text-grey-500" onClick={() => setStack("add-exercise")}>
          <ArrowLeftIcon size="28px"/>
        </button>
        <button className="text-green-500" onClick={apply}>
          <CheckIcon size="28px"/>
        </button>
      </div>
      <div className="flex flex-col gap-6 w-full">
        <span className="font-bold">Filter muscle groups</span>
        <MuscleGroup
          name="Chest"
          isChecked={filterCopy.chest}
          onToggle={onToggle.bind(null, "chest")}
        />
        <MuscleGroup
          name="Shoulders"
          isChecked={filterCopy.shoulders}
          onToggle={onToggle.bind(null, "shoulders")}
        />
        <MuscleGroup
          name="Arms"
          isChecked={filterCopy.arms}
          onToggle={onToggle.bind(null, "arms")}
        />
        <MuscleGroup
          name="Back"
          isChecked={filterCopy.back}
          onToggle={onToggle.bind(null, "back")}
        />
        <MuscleGroup
          name="Legs"
          isChecked={filterCopy.legs}
          onToggle={onToggle.bind(null, "legs")}
        />
      </div>
    </div>
  );
};

