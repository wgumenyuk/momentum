import SplitItem from "$components/Splits/SplitItem";
import React from "react";

const WorkoutsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-grey-500">Workouts</h1>
        <button className="text-grey-500 text-4xl">+</button>
      </div>
      <div className="space-y-4">
        <SplitItem title="Push" muscles="Chest, Shoulders, Triceps"/>
        <SplitItem title="Pull" muscles="Back, Biceps"/>
        <SplitItem title="Legs" muscles="Quads, Hamstrings, Calves"/>
      </div>
    </div>
  );
};

export default WorkoutsPage;
