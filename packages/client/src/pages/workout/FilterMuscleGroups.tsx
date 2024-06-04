import React, { useState } from "react";
import { Checkbox } from "$components/Checkbox";

const MuscleGroupsEnum = [
  "Push", 
  "Pull", 
  "Legs", 
  "Upper Body", 
  "Lower Body", 
  "Full Body", 
  "Cardio", 
  "Rest",
  "Arms",
  "Chest and Back",
  "Shoulders and Arms",
  "Chest",
  "Back",
  "Shoulders"
] as const;

type MuscleGroupsType = typeof MuscleGroupsEnum[number];

// Create initial state dynamically
const createInitialMuscleGroupsState = (): Record<MuscleGroupsType, boolean> => {
  return MuscleGroupsEnum.reduce((acc, group) => {
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
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-700">Filter muscle groups</h2>
        {Object.keys(groupSelection).map((group) => (
          <div key={group} className="flex justify-between items-center bg-blue-800 p-4 rounded-lg shadow-md">
            <span className="text-lg font-semibold text-gray-700">{group}</span>
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
