import { useEffect, useState } from "react";

// Intern
import { PastWorkouts, User } from "$internal/api";
import { useJwt } from "$components/JwtContext";
import { BackgroundLayout } from "$components/Background";
import { Separator } from "$components/Separator";
import { Card } from "$components/Card";
import { Loader } from "$components/Loader";

// Types
import type { FC } from "react";
import type { PastWorkoutSchemaType } from "@momentum/shared";

export const HomePage: FC = () => {
  const [ displayName, setDisplayName ] = useState<string | undefined>();
  const [ pastWorkouts, setPastWorkouts ] = useState<PastWorkoutSchemaType[]>([]);

  const { jwt } = useJwt()!;

  const fetchPastWorkouts = async () => {
    const response = await PastWorkouts.getAll();

    if(!response || !response.ok) {
      return;
    }

    setPastWorkouts(response.data.workouts);
  };

  const fetchDisplayName = async () => {
    const response = await User.get(jwt!.id);

    if(!response || !response.ok) {
      console.error(response);
      return;
    }

    setDisplayName(response.data.user.displayName);
  };

  const { format: formatDate } = new Intl.DateTimeFormat("en-US", {
    day: "2-digit",
    month: "short",
    hour: "2-digit",
    hour12: true,
    minute: "2-digit"
  });

  useEffect(() => {
    fetchDisplayName();
    fetchPastWorkouts();
  }, []);

  return (
    <BackgroundLayout>
      <div className="min-h-screen w-full bg-gray-900 p-6">
        <div className="flex justify-between items-center h-8 mb-6">
          <h1 className="text-2xl font-bold text-grey-500">Home</h1>
        </div>
        <div className="flex flex-col gap-6 w-full">
          <Card className="flex justify-between items-center">
            <div className="flex flex-col text-lg">
              <span>Welcome back{displayName ? "," : "!"}</span>
              {displayName && <span className="text-blue-400">{displayName}</span>}
            </div>
            <span className="
              grid
              place-content-center
              bg-blue-700
              w-16
              h-16
              text-4xl
              rounded-md
              "
            >
              👋
            </span>
          </Card>

          <Separator/>
          
          <div className="flex justify-center py-8">
            <Loader/>
          </div>

          <Separator/>

          <span className="font-bold">Past Workouts</span>

          {!pastWorkouts.length && (
            <span className="text-blue-500 text-center">It's pretty empty here...</span>
          )}

          {pastWorkouts.length > 0 && pastWorkouts.map((workout, i) => (
            <Card key={i} className="flex flex-col gap-0.5">
              <span>Workout</span>
              <span className="text-blue-500">{formatDate(workout.startedAt)}</span>
            </Card>
          ))}

          {pastWorkouts.length > 0 && (
            <span className="text-blue-500 text-center">No more data...</span>
          )}
        </div>
      </div>
    </BackgroundLayout>
  );
};
