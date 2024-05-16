import { Equipment } from "$models/equipment";
import { log } from "$internal/logger";
import { blake2b } from "$services/crypto";

// Types
import type { AnyBulkWriteOperation } from "mongoose";
import type { Equipment as EquipmentType } from "$models/equipment";

const seed: EquipmentType[] = [];

/**
  Führt einen Seeding-Prozess für das `Equipment`-Modell durch.
*/
export const seedEquipment = async () => {
  const data = await Equipment.find({}, {}, {
    lean: true
  });

  const [ dataHash, seedHash ] = await Promise.all([
    blake2b(JSON.stringify(data)),
    blake2b(JSON.stringify(seed))
  ]);

  if(dataHash === seedHash) {
    return;
  }

  log.info("initialising seeding for `Muscle` model");

  await Equipment.deleteMany({});

  const writes: AnyBulkWriteOperation[] = seed.map((entry) => {
    return {
      insertOne: {
        document: entry
      }
    };
  });

  await Equipment.bulkWrite(writes);

  log.info("finalized seeding for `Equipment` model");
};
