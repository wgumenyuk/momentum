import { request } from "$internal/api/request";

// Types
import type { Event } from "@momentum/shared";

type GetAllResponse = {
  events: Event[];
};

type GetResponse = {
  event: Event;
};

/**
  Events-Endpunkt.
*/
export const Events = {
  /**
    Ruft alle Event ab.
  */
  getAll: () => request<GetAllResponse>("GET", "/events"),

  /**
    Ruft ein Event ab.
  */
  get: (id: string) => request<GetResponse>("GET", `/events/${id}`),

  /**
    Löscht alle Events.
  */
  deleteAll: () => request("DELETE", "/events"),

  /**
    Löscht ein Event.
  */
  delete: (id: string) => request("DELETE", `/events/${id}`)
};
