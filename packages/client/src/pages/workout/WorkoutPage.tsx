import React from "react";
import { Workout } from "$components/Workouts";
import { Info } from "lucide-react";

type WorkoutsPageProps = {
  navigate: (view: string) => void;
};

const WorkoutsPage: React.FC<WorkoutsPageProps> = ({ navigate }) => {
  return (
    <div className="min-h-screen w-full bg-gray-900 p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-grey-500">Workouts</h1>
        <div className="flex items-center space-x-4">
          <button
            className="text-grey-500 text-4xl"
            onClick={() => navigate("info")}
          >
            <Info className="w-6 h-6"/>
          </button>
          <button
            className="text-grey-500 text-4xl"
            onClick={() => navigate("editWorkout")}
          >
            +
          </button>
        </div>
      </div>
      <div className="space-y-4">
        <Workout title="Push" muscles="Chest, Shoulders, Triceps"/>
        <Workout title="Pull" muscles="Back, Biceps"/>
        <Workout title="Legs" muscles="Quads, Hamstrings, Calves"/>
      </div>
    </div>
  );
};

export default WorkoutsPage;
