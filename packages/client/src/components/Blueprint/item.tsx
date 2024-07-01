import React from "react";
import { Edit } from "lucide-react";

export interface BlueprintItemProps {
  name: string;
  description: string;
}

export const BlueprintItem: React.FC<BlueprintItemProps> = ({ name, description }) => {
  return (
    <div className="flex justify-between items-center bg-blue-800 p-4 rounded-lg shadow-md">
      <div>
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
      <button className="p-2 bg-white rounded-lg shadow-md">
        <Edit className="w-7 h-7 text-current"/>
      </button>
    </div>
  );
};
