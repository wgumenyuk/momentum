import { request } from "$internal/api/request";

type GetResponse = {
  user: {
    id: string;
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
  deleteAccount: () => request("DELETE", "/users/delete")
};
