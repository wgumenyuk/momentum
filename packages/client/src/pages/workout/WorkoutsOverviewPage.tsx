import React, { useState, useEffect } from "react";
import { Workout } from "$components/Workouts";
import { InfoIcon, PlusIcon } from "lucide-react";
import { ErrorCode } from "@momentum/shared";
import { Workouts } from "$internal/api";

// Define a type for the workout
interface WorkoutType {
  id: string;
  name: string;
  muscles: string;
}

type WorkoutsOverviewPageProps = {
  navigate: (view: string) => void;
  userId: string;
};

// Type guard to check if an object is an array of WorkoutType
const isWorkoutArray = (data: unknown): data is WorkoutType[] => {
  return Array.isArray(data) && data.every((item) => 
    typeof item === "object" &&
    item !== null &&
    "id" in item &&
    "name" in item &&
    "muscles" in item
  );
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
        const response = await Workouts.getAll(userId);
        if(!response) {
          setError(errorMessages["server_connection_failed"]);
          return;
        }

        if(response.ok) {
          const data = response.data;
          if(isWorkoutArray(data)) {
            setWorkouts(data);
          } else {
            setError("Invalid data format received from server.");
          }
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
        <h1 className="text-2xl font-bold text-grey-500">Workouts</h1>
        <div className="flex items-center space-x-4">
          <button className="text-grey-500 text-4xl" onClick={() => navigate("editSplit")}>
            <InfoIcon size="24px"/>
          </button>
          <button className="text-grey-500 text-4xl" onClick={() => navigate("editWorkout")}>
            <PlusIcon size="32px"/>
          </button>
        </div>
      </div>
      {
        error &&
        <span className="block text-red-500 font-bold text-center pb-6">
          {error}
        </span>
      }
      <div className="space-y-4">
        {workouts.map((workout) => (
          <Workout key={workout.id} title={workout.name} muscles={workout.muscles}/>
        ))}
      </div>
    </div>
  );
};

export default WorkoutsOverviewPage;
