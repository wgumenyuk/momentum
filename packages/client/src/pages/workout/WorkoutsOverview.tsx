import React from "react";

// Intern
import { PlusIcon } from "lucide-react";
import { BackgroundLayout } from "$components/Background";
import { Workout } from "$components/Workouts";

export const WorkoutsPage: React.FC = () => {
  return (
    <BackgroundLayout>
      <div className="min-h-screen w-full bg-gray-900 p-6">
        <div className="flex justify-between items-center h-8 mb-6">
          <h1 className="text-2xl font-bold text-grey-500">Workouts</h1>
          <button className="text-grey-500 text-4xl">
            <PlusIcon size="32px"/>
          </button>
        </div>
        <div className="space-y-4">
          <Workout title="Push" muscles="Chest, Shoulders, Triceps"/>
          <Workout title="Pull" muscles="Back, Biceps"/>
          <Workout title="Legs" muscles="Quads, Hamstrings, Calves"/>
        </div>
      </div>
    </BackgroundLayout>
  );
};
