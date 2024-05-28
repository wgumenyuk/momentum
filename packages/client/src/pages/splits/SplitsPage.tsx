import React from "react";

// Intern
import { BackgroundLayout } from "$components/Background";
import { NavigationBar } from "$components/Navigation";
import Workout from "$components/Workouts/Workout";


export const SplitsPage: React.FC = () => {
  return (
    <BackgroundLayout>
      <h1 className="text-2xl font-bold text-black">Splits</h1>
      <div className="space-y-4">
        <Workout title="Push" muscles="Chest, Shoulders, Triceps"/>
        <Workout title="Pull" muscles="Back, Biceps"/>
        <Workout title="Legs" muscles="Quads, Hamstrings, Calves"/>
      </div>
      <Navigation/>
    </BackgroundLayout>
  );
};
