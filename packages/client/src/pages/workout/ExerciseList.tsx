import React, { useState } from "react";
import { InputField } from "$components/InputField";
import { Workout } from "$components/Workouts";
import { Filter } from "lucide-react";

type ExerciseListPageProps = {
  navigate: (view: string) => void;
};

const ExerciseListPage: React.FC<ExerciseListPageProps> = ({ navigate }) => {
  const [ search, setSearch ] = useState("");

  const exercises = Array(100).fill({ title: "Chest Fly", muscles: "Chest" });

  return (
    <div className="min-h-screen bg-gray-900 p-6">
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <InputField
            title=""
            placeholder="Search"
            value={search}
            onChange={setSearch}
            variant="search"
          />
          <button
            className="p-2 bg-blue-500 rounded-lg"
            onClick={() => navigate("filterMuscleGroups")}
          >
            <Filter className="w-6 h-6 text-white"/>
          </button>
        </div>
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
