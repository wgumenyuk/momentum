import React, { useState, useEffect } from "react";
import { Input } from "$components/Input";
import { Workout } from "$components/Workouts";
import { Filter } from "lucide-react";
import { Exercise } from "@momentum/shared";
import { Exercises } from "$internal/api/exercises";

type ExerciseListPageProps = {
  navigate: (view: string) => void;
};

const ExerciseListPage: React.FC<ExerciseListPageProps> = ({ navigate }) => {
  const [ search, setSearch ] = useState("");
  const [ exercises, setExercises ] = useState<Exercise[]>([]);
  const [ loading, setLoading ] = useState(true);
  const [ error, setError ] = useState<string | null>(null);

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const response = await Exercises.getAll();
        if(response && response.ok) {
          setExercises(response.data?.exercises ?? []);
        } else {
          setError(response?.err || "Failed to fetch exercises");
        }
      } catch(err) {
        setError("An error occurred while fetching exercises");
      } finally {
        setLoading(false);
      }
    };

    fetchExercises();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 p-6">
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <Input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(value) => setSearch(value)}
          />
          <button
            className="p-2 bg-blue-500 rounded-lg"
            onClick={() => navigate("filterMuscleGroups")}
          >
            <Filter className="w-6 h-6 text-white"/>
          </button>
        </div>
        {loading && <p className="text-gray-500">Loading exercises...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {!loading && !error && (
          <>
            <h2 className="text-grey-500">Showing {exercises.length} exercises</h2>
            <div className="space-y-4">
              {exercises.map((exercise) => (
                <Workout key={exercise.id} title={exercise.id} muscles={exercise.muscleGroups.join(", ")}/>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ExerciseListPage;
