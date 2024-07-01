import React, { useState, useEffect } from "react";
import { BlueprintList } from "$components/Blueprint/list";
import { BlueprintsService } from "$internal/api/blueprints";
import { Blueprint as BlueprintType, Response } from "@momentum/shared";

const BlueprintsPage: React.FC = () => {
  const [ blueprints, setBlueprints ] = useState<BlueprintType[]>([]);
  const [ filteredBlueprints, setFilteredBlueprints ] = useState<BlueprintType[]>([]);
  const [ filter, setFilter ] = useState<string>("");
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
    if(filter) {
      setFilteredBlueprints(
        blueprints.filter((blueprint) =>
          blueprint.tags.some((tag) =>
            tag.toLowerCase().includes(filter.toLowerCase())
          )
        )
      );
    } else {
      setFilteredBlueprints(blueprints);
    }
  }, [ filter, blueprints ]);

  return (
    <div className="min-h-screen w-full bg-gray-900 p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-500">Blueprints</h1>
        <input
          type="text"
          placeholder="Filter by tag"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="p-2 rounded-lg"
        />
      </div>
      {error && <div className="text-red-500">{error}</div>}
      <BlueprintList blueprints={filteredBlueprints}/>
    </div>
  );
};

export default BlueprintsPage;
