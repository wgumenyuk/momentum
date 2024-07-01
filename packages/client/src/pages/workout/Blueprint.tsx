import React, { useState, useEffect } from "react";
import { BlueprintList } from "$components/Blueprint/list";
import { TagFilterModal } from "$components/Blueprint/tagFilterModal";
import { BlueprintsService } from "$internal/api/blueprints";
import { Blueprint as BlueprintType, Response } from "@momentum/shared";
import { Filter } from "lucide-react";

const allTags = [
  "45 Minutes", "Hypertrophy", "Muscle Balance", "Beginner", "Intermediate", "Advanced", "Full Body", 
  "Chest", "Triceps", "Shoulders", "Upper Body", "Back", "Biceps", "Legs", "Quads", "Hamstrings", "Calves",
  "60 Minutes", "Muscle Growth", "Balanced", "Arms Focused", "Powerlifting", "Strength", "Strength Endurance",
  "Time Efficient", "Calisthenics"
  // Add all possible tags here
];

const BlueprintsPage: React.FC = () => {
  const [ blueprints, setBlueprints ] = useState<BlueprintType[]>([]);
  const [ filteredBlueprints, setFilteredBlueprints ] = useState<BlueprintType[]>([]);
  const [ selectedTags, setSelectedTags ] = useState<string[]>([]);
  const [ filterModalOpen, setFilterModalOpen ] = useState<boolean>(false);
  const [ error, setError ] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlueprints = async () => {
      try {
        const response: Response<{ blueprints: BlueprintType[] }> | null | undefined = await BlueprintsService.getAll();
        if(response && response.ok) {
          setBlueprints(response.data.blueprints);
          setFilteredBlueprints(response.data.blueprints);
        } else if(response) {
          setError(response.err);
        } else {
          setError("Unexpected error occurred");
        }
      } catch(error) {
        console.error("Error fetching blueprints:", error);
        setError("Failed to fetch blueprints");
      }
    };

    fetchBlueprints();
  }, []);

  useEffect(() => {
    if(selectedTags.length > 0) {
      setFilteredBlueprints(
        blueprints.filter((blueprint) =>
          selectedTags.every((tag) => blueprint.tags.includes(tag))
        )
      );
    } else {
      setFilteredBlueprints(blueprints);
    }
  }, [ selectedTags, blueprints ]);

  const handleSelectTag = (tag: string) => {
    setSelectedTags((prev) => [ ...prev, tag ]);
  };

  const handleDeselectTag = (tag: string) => {
    setSelectedTags((prev) => prev.filter((t) => t !== tag));
  };

  return (
    <div className="min-h-screen w-full bg-gray-900 p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-500">Blueprints</h1>
        <button onClick={() => setFilterModalOpen(true)} className="p-2 bg-blue-500 rounded-lg text-white">
          <Filter className="w-6 h-6"/>
        </button>
      </div>
      {error && <div className="text-red-500">{error}</div>}
      <BlueprintList blueprints={filteredBlueprints}/>
      {filterModalOpen && (
        <TagFilterModal
          tags={allTags}
          selectedTags={selectedTags}
          onSelectTag={handleSelectTag}
          onDeselectTag={handleDeselectTag}
          onClose={() => setFilterModalOpen(false)}
        />
      )}
    </div>
  );
};

export default BlueprintsPage;
