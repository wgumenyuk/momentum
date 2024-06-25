import { request } from "$internal/api/request";

type GetResponse = {
  user: {
    id: string;
    displayName?: string;
    email: string;
    createdAt: number;
  };
};

/**
  Nutzer-Endpunkt.
*/
export const User = {
  /**
    Ruft ein Nutzerprofil ab.
  */
  get: (userId: string) => request<GetResponse>("GET", `/users/${userId}`),

  /**
    Löscht das eigene Nutzerkonto.
  */
  deleteAccount: () => request("DELETE", "/users/delete"),

  updateWeight: () => request("PUT", "/users/update-weight")
};
