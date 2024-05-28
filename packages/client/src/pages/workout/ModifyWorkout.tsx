import React from "react";

// Intern
import { BackgroundLayout } from "$components/Background";
import { Navigation } from "$components/Navigation";

export const ModifyWorkout: React.FC = () => {
  return (
    <>
      <BackgroundLayout>
        <div className="flex flex-col items-center space-y-4">
          <h1 className="text-2xl font-bold text-black">Modify Workout</h1>
          <p className="text-lg text-black">Here you can modify your workout details.</p>
        </div>
      </BackgroundLayout>
      <Navigation/>
    </>
  );
};
