import { request } from "$internal/api/request";

// Types
import type { Friendship as FriendshipType } from "@momentum/shared";
import type { Endpoint } from "$internal/api/request";

type GetAllResponse = {
  friendships: FriendshipType[];
};

/**
  Freundschaft-API.
*/
export const Friendships = {
  /**
    Ruft alle Freundschaften eines Nutzers ab.
  */
  getAll: (includePending?: boolean) => {
    let endpoint: Endpoint = "/friendships";

    if(includePending) {
      endpoint += "?include_pending=true";
    }

    return request<GetAllResponse>("GET", endpoint as Endpoint);
  },

  /**
    Verschickt eine Freundschaftsanfrage.
  */
  create: (recipientId: string) => request("POST", "/friendships", {
    recipientId
  }),

  /**
    Akzeptiert eine Freundschaftsanfrage.
  */
  accept: (friendshipId: string, eventId: string) => request(
    "PUT",
    `/friendships/${friendshipId}/accept`,
    {
      eventId
    }
  ),

  /**
    Lehnt eine Freundschaftsanfrage ab.
  */
  decline: (friendshipId: string, eventId: string) => request(
    "PUT",
    `/friendships/${friendshipId}/decline`,
    {
      eventId
    }
  ),

  /**
    Entfernt eine Freundschaft.
  */
  delete: (friendshipId: string) => request("PUT", `/friendships/${friendshipId}`)
};

