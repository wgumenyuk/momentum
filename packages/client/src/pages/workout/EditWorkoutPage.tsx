import React from "react";
import { Input } from "$components/Input";
import { Workout } from "$components/Workouts";
import { Plus } from "lucide-react";

const EditWorkoutPage: React.FC<{ navigate: (view: string) => void }> = ({ navigate }) => {
  const [ name, setName ] = React.useState("");
  const [ description, setDescription ] = React.useState("");

  return (
    <div className="space-y-4">
      <div className="text-white">
        <Input
          type="text"
          placeholder="New Workout"
          value={name}
          onChange={(value) => setName(value)}
        />
        <Input
          type="text"
          placeholder="..."
          value={description}
          onChange={(value) => setDescription(value)}
        />
      </div>
      <div className="flex justify-between items-center mt-4">
        <h2 className="text-xl font-semibold text-white">Exercises</h2>
        <button
          className="p-2 bg-blue-500 rounded-lg"
          onClick={() => navigate("exerciseList")}
        >
          <Plus className="w-6 h-6 text-white"/>
        </button>
      </div>
      <div className="space-y-4">
        <Workout title="Chest Fly" muscles="Chest"/>
        <Workout title="Chest Fly" muscles="Chest"/>
        <Workout title="Chest Fly" muscles="Chest"/>
      </div>
    </div>
  );
};

export default EditWorkoutPage;
