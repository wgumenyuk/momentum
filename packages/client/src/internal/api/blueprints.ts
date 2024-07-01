import { request } from "$internal/api/request";

// Types
import type { BlueprintSchemaType, Blueprint as BlueprintType } from "@momentum/shared";

type CreateResponse = {
  id: string;
};

type GetAllResponse = {
  blueprints: BlueprintType[];
};

type GetResponse = {
  blueprint: BlueprintType;
};

/**
  Blueprints-Endpunkt.
*/
export const BlueprintsService = {
  /**
    Erstellt eine Blueprint.
  */
  create: (data: BlueprintSchemaType) => request<CreateResponse>(
    "POST",
    "/blueprints",
    data
  ),

  /**
    Ruft alle Blueprints eines Nutzers ab.
  */
  getAll: () => request<GetAllResponse>(
    "GET",
    "/blueprints"
  ),

  /**
    Ruft eine Blueprint ab.
  */
  get: (blueprintId: string) => request<GetResponse>(
    "GET",
    `/blueprints/${blueprintId}`
  ),

  /**
    Aktualisiert eine Blueprint.
  */
  update: (blueprintId: string, data: BlueprintSchemaType) => request(
    "PUT",
    `/blueprints/${blueprintId}`,
    data
  ),

  /**
    Löscht eine Blueprint.
  */
  delete: (blueprintId: string) => request(
    "DELETE",
    `/blueprints/${blueprintId}`
  )
};
