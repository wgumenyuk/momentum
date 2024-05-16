import { Muscle } from "$models/muscle";
import { log } from "$internal/logger";
import { blake2b } from "$services/crypto";

// Types
import type { AnyBulkWriteOperation } from "mongoose";
import type { Muscle as MuscleType } from "$models/muscle";

const seed: MuscleType[] = [];

/**
  Führt einen Seeding-Prozess für das `Muscle`-Modell durch.
*/
export const seedMuscles = async () => {
  const data = await Muscle.find({}, {}, {
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

  await Muscle.deleteMany({});

  const writes: AnyBulkWriteOperation[] = seed.map((entry) => {
    return {
      insertOne: {
        document: entry
      }
    };
  });

  await Muscle.bulkWrite(writes);

  log.info("finalized seeding for `Muscle` model");
};
