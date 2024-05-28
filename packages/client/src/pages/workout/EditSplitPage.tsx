import React from "react";
import { InputField } from "$components/InputField";
import { Workout } from "$components/Workouts";
import { Plus } from "lucide-react";

const EditSplitPage: React.FC<{ navigate: (view: string) => void }> = ({ navigate }) => {
  const [ name, setName ] = React.useState("");
  const [ description, setDescription ] = React.useState("");

  return (
    <div className="min-h-screen bg-gray-900 p-6">
      <button onClick={() => navigate("splits")} className="text-white mb-4">Back</button>
      <div className="space-y-4">
        <InputField
          title="Name"
          placeholder="New Split"
          value={name}
          onChange={setName}
          variant="text"
        />
        <InputField
          title="Description"
          placeholder="..."
          value={description}
          onChange={setDescription}
          variant="text"
        />
        <div className="flex justify-between items-center mt-4">
          <h2 className="text-xl font-semibold text-white">Workouts</h2>
          <button className="p-2 bg-blue-500 rounded-lg">
            <Plus className="w-6 h-6 text-white"/>
          </button>
        </div>
        <div className="space-y-4">
          <Workout title="Push" muscles="Chest, Shoulders, Triceps"/>
          <Workout title="Pull" muscles="Back, Biceps"/>
          <Workout title="Legs" muscles="Quads, Hamstrings, Calves"/>
        </div>
      </div>
    </div>
  );
};

export default EditSplitPage;
