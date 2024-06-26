import React from "react";
import { Edit } from "lucide-react";

export interface WorkoutProps {
  title: string;
  muscles: string;
}

export const Workout: React.FC<WorkoutProps> = ({ title, muscles }) => {
  return (
    <div className="flex justify-between items-center bg-blue-800 p-4 rounded-lg shadow-md">
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-600">{muscles}</p>
      </div>
      <button className="p-2 bg-white rounded-lg shadow-md">
        <Edit className="w-7 h-7 text-current"/>
      </button>
    </div>
  );
};
