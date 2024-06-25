import { request } from "$internal/api/request";

type GetResponse = {
  user: {
    id: string;
    displayName?: string;
    email: string;
    createdAt: number;
    isPrivate: boolean;
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
    Aktualisiert den Anzeigenamen.
  */
  updateDisplayName: (displayName: string) => request(
    "PUT",
    "/users/display-name",
    {
      displayName
    }
  ),

  /**
    Aktualisiert die Privatsphäreeinstellungen.
  */
  updateProfilePrivacy: (isPrivate: boolean) => request(
    "PUT",
    "/users/privacy",
    {
      isPrivate
    }
  ),

  /**
    Löscht das eigene Nutzerkonto.
  */
  deleteAccount: () => request("DELETE", "/users")
};
