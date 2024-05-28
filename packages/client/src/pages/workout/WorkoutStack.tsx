import React from "react";
import { BackgroundLayout } from "$components/Background";
import { WorkoutsPage } from "./WorkoutsOverview";

const WorkoutStack: React.FC = () => {
  return (
    <BackgroundLayout>
      <div className="min-h-screen w-full bg-gray-900 p-6">
        <WorkoutsPage/>
      </div>
    </BackgroundLayout>
  );
};

export default WorkoutStack;
