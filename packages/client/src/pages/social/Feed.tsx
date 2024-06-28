import { useEffect, useState } from "react";
import { UserPlusIcon } from "lucide-react";

// Intern
import { EventKind } from "@momentum/shared";
import { Events } from "$internal/api";
import { Card } from "$components/Card";
import { FriendRequest } from "$components/FriendRequest";

// Types
import type { FC } from "react";
import type { Event } from "@momentum/shared";
import type { NavStack } from "$pages/social";

type FeedProps = {
  setNavStack: (navStack: NavStack) => void;
};

// TODO: Später werden die Nachrichten in eine eigene Datei verschoben.
const messages = {
  [ EventKind.FriendRequestAccepted ]: (data: Record<string, string | number>) => {
    return `🤝 ${data.recipientName} has accepted your friend request.`;
  }
};

/**
  `Feed`-Page im Stack.
*/
export const Feed: FC<FeedProps> = ({ setNavStack }) => {
  const [ events, setEvents ] = useState<Event[]>([]);
  const [ hasFailed, setHasFailed ] = useState(false);

  const fetchEvents = async () => {
    const response = await Events.getAll();
    
    if(!response || !response.ok) {
      return setHasFailed(true);
    }

    setEvents(response.data.events);
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div className="min-h-screen w-full bg-gray-900 p-6">
      <div className="flex justify-between items-center h-8 mb-6">
        <h1 className="text-2xl font-bold text-grey-500">Social</h1>
        <button className="text-grey-500" onClick={() => setNavStack("add-user")}>
          <UserPlusIcon size="24px"/>
        </button>
      </div>
      <div className="flex flex-col gap-6 w-full">
        {hasFailed && (
          <Card className="bg-red-400">
            Failed to fetch your feed.
          </Card>
        )}

        {(!hasFailed && events.length === 0) && (
          <span className="text-blue-600">It's pretty empty here...</span>
        )}

        {!hasFailed && events.map((event) => {
          if(event.kind === EventKind.FriendRequestReceived) {
            return (
              <FriendRequest
                key={event.id}
                eventId={event.id}
                eventData={event.data}
              />
            );
          }

          return (
            <Card key={event.id}>
              {messages[event.kind](event.data)}
            </Card>
          );
        })}
      </div>
    </div>
  );
};
