import React, { useState } from "react";
import Workout from "$components/Workouts/Workout";
import { InputField } from "$components/InputFields";

const ExerciseListPage: React.FC = () => {
  const [ search, setSearch ] = useState("");

  // Example list of exercises
  const exercises = Array(100).fill({ title: "Chest Fly", muscles: "Chest" });

  return (
    <div className="min-h-screen bg-gray-900 p-6">
      <div className="space-y-4">
        <InputField
          title=""
          placeholder="Search"
          value={search}
          onChange={setSearch}
          variant="search"
        />
        <h2 className="text-grey-500">Showing 100 exercises</h2>
        <div className="space-y-4">
          {exercises.map((exercise, index) => (
            <Workout key={index} title={exercise.title} muscles={exercise.muscles}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExerciseListPage;
