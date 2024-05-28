import React, { useState } from "react";
import { SplitSchema } from "@momentum/shared";
import { Checkbox } from "$components/Checkbox";

// Extract muscle groups from SplitSchema
const MuscleGroupsEnum = SplitSchema.shape.workouts.element.shape.type;

type MuscleGroupsType = Zod.infer<typeof MuscleGroupsEnum>;

// Create initial state dynamically
const createInitialMuscleGroupsState = (): Record<MuscleGroupsType, boolean> => {
  return MuscleGroupsEnum.options.reduce((acc, group) => {
    acc[group] = false;
    return acc;
  }, {} as Record<MuscleGroupsType, boolean>);
};

export const FilterMuscleGroupsPage: React.FC = () => {
  const [ groupSelection, setGroupSelection ] = useState(createInitialMuscleGroupsState);

  const handleCheckboxChange = (group: MuscleGroupsType, checked: boolean) => {
    setGroupSelection((prevState) => ({
      ...prevState,
      [group]: checked
    }));
  };

  return (
    <div className="min-h-screen bg-gray-900 p-6">
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-grey-500">Filter muscle groups</h2>
        {Object.keys(groupSelection).map((group) => (
          <div key={group} className="flex justify-between items-center bg-gray-800 p-4 rounded-lg shadow-md">
            <span className="text-lg font-semibold text-grey-500">{group}</span>
            <Checkbox
              variant="blank"
              checked={groupSelection[group as MuscleGroupsType]}
              onChange={(checked) => handleCheckboxChange(group as MuscleGroupsType, checked)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
