import React from "react";

// Intern
import { BackgroundLayout } from "$components/Background";
import SplitItem from "$components/Splits/SplitItem";

const WorkoutsPage: React.FC = () => {
  return (
    <BackgroundLayout>
      <div className="min-h-screen w-full bg-gray-900 p-6">
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
    </BackgroundLayout>
  );
};

export default WorkoutsPage;
