import React from "react";
import { Edit } from "lucide-react";

export interface SplitItemProps {
  title: string;
  muscles: string;
}

const SplitItem: React.FC<SplitItemProps> = ({ title, muscles }) => {
  return (
    <div className="flex justify-between items-center bg-gray-200 p-4 rounded-lg shadow-md">
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-600">{muscles}</p>
      </div>
      <button className="p-2 bg-white rounded-full shadow-md">
        <Edit className="w-6 h-6 text-current"/>
      </button>
    </div>
  );
};

export default SplitItem;
