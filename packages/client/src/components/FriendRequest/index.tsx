import { useState } from "react";
import { XIcon, CheckIcon } from "lucide-react";

// Intern
import { Friendships } from "$internal/api";
import { Card } from "$components/Card";

// Types
import type { FC } from "react";

type FriendRequestProps = {
  eventData: Record<string, string | number>;
};

/**
  Freundschaftsanfrage.
*/
export const FriendRequest: FC<FriendRequestProps> = ({ eventData }) => {
  const [ isAckd, setIsAckd ] = useState<boolean>();
  const [ isAccepted, setIsAccepted ] = useState<boolean>();

  const { friendshipId, senderName } = eventData;

  const accept = async () => {
    await Friendships.accept(friendshipId as string);
    setIsAckd(true);
    setIsAccepted(true);
  };

  const decline = async () => {
    await Friendships.decline(friendshipId as string);
    setIsAckd(true);
    setIsAccepted(false);
  };

  return (
    <Card className="flex justify-between items-center">
      <span>
        👋 {senderName} wants to be your friend.
      </span>
      <div className="flex gap-4">
        {isAckd && isAccepted && (
          <CheckIcon size="24px" className="text-blue-600"/>
        )}
        {isAckd && !isAccepted && (
          <XIcon size="24px" className="text-blue-600"/>
        )}
        {!isAckd && (
          <>
            <button onClick={decline}>
              <XIcon size="24px" className="text-red-400"/>
            </button>
            <button onClick={accept}>
              <CheckIcon size="24px" className="text-green-400"/>
            </button>
          </>
        )}
      </div>
    </Card>
  );
};
