import React from "react";
import { Plus, Edit2 } from "lucide-react";

type SplitsOverviewPageProps = {
  navigate: (view: string) => void;
};

const splits = [
  { title: "2 Day Split", description: "Upper Body, Lower Body" },
  { title: "3 Day Split", description: "Push, Pull, Legs" },
  { title: "Bro Split", description: "Chest, Back, Shoulder, Arms, Legs" }
];

const SplitsOverviewPage: React.FC<SplitsOverviewPageProps> = ({ navigate }) => {
  return (
    <div className="min-h-screen w-full bg-gray-900 p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-white">Splits</h1>
        <button
          className="text-white text-4xl"
          onClick={() => navigate("editSplit")}
        >
          <Plus className="w-6 h-6"/>
        </button>
      </div>
      <div className="space-y-4">
        {splits.map((split, index) => (
          <div key={index} className="flex justify-between items-center bg-blue-800 p-4 rounded-lg shadow-lg"> {/* Changed bg-gray-800 to bg-blue-800 */}
            <div>
              <h2 className="text-xl font-semibold text-white">{split.title}</h2>
              <p className="text-gray-400">{split.description}</p>
            </div>
            <button onClick={() => navigate("editSplit")} className="p-2 bg-blue-500 rounded-lg">
              <Edit2 className="w-6 h-6 text-white"/>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SplitsOverviewPage;
