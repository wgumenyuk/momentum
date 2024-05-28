import React from "react";

// Intern
import { BackgroundLayout } from "$components/Background";
import { SplitItem } from "$components/Splits";
import { Navigation } from "$components/Navigation";

export const SplitsPage: React.FC = () => {
  return (
    <BackgroundLayout>
      <h1 className="text-2xl font-bold text-black">Splits</h1>
      <div className="space-y-4">
        <SplitItem title="Push" muscles="Chest, Shoulders, Triceps"/>
        <SplitItem title="Pull" muscles="Back, Biceps"/>
        <SplitItem title="Legs" muscles="Quads, Hamstrings, Calves"/>
      </div>
      <Navigation/>
    </BackgroundLayout>
  );
};
