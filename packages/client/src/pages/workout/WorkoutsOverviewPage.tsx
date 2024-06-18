import React, { useState, useEffect } from "react";
import { Workout } from "$components/Workouts";
import { InfoIcon, PlusIcon } from "lucide-react";
import { ErrorCode } from "@momentum/shared";
import { Workouts } from "$internal/api";
import { Workout as WorkoutType } from "@momentum/shared";

type WorkoutsOverviewPageProps = {
  navigate: (view: string) => void;
  userId: string;
};

const WorkoutsOverviewPage: React.FC<WorkoutsOverviewPageProps> = ({ navigate, userId }) => {
  const [ workouts, setWorkouts ] = useState<WorkoutType[]>([]);
  const [ loading, setLoading ] = useState(true);
  const [ error, setError ] = useState<string | null>(null);

  const errorMessages: Record<string, string> = {
    [ErrorCode.NotFound]: "Workouts not found.",
    [ErrorCode.InternalError]: "Internal server error.",
    [ErrorCode.Unauthenticated]: "User not authenticated.",
    [ErrorCode.Forbidden]: "Access forbidden.",
    "server_connection_failed": "Server connection failed."
  };

  useEffect(() => {
    const fetchWorkouts = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await Workouts.getAll();
        if(!response) {
          setError(errorMessages["server_connection_failed"]);
          return;
        }

        if(response.ok) {
          const data = response.data;
          setWorkouts(data.workouts);
        } else {
          setError(errorMessages[response.err] || "An unknown error occurred.");
        }
      } catch(err) {
        setError(errorMessages["server_connection_failed"]);
      } finally {
        setLoading(false);
      }
    };

    fetchWorkouts();
  }, [ userId ]);

  if(loading) {
    return <div>Loading...</div>;
  }

  if(error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="min-h-screen w-full bg-gray-900 p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-500">Workouts</h1>
        <div className="flex items-center space-x-4">
          <button className="text-gray-500 text-4xl" onClick={() => navigate("editSplit")}>
            <InfoIcon size="24px"/>
          </button>
          <button className="text-gray-500 text-4xl" onClick={() => navigate("editWorkout")}>
            <PlusIcon size="32px"/>
          </button>
        </div>
      </div>
      {error && (
        <span className="block text-red-500 font-bold text-center pb-6">
          {error}
        </span>
      )}
      <div className="space-y-4">
        {workouts.map((workout) => (
          <Workout key={workout.id} title={workout.name} muscles={""}/>
        ))}
      </div>
    </div>
  );
};

export default WorkoutsOverviewPage;
