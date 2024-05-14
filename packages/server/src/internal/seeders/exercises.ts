import { Exercise } from "$models/exercise";
import { log } from "$internal/logger";
import { blake2b } from "$services/crypto";

// Types
import type { AnyBulkWriteOperation } from "mongoose";
import type { Exercise as ExerciseType } from "$models/exercise";

const seed: ExerciseType[] = [];

/**
  Führt einen Seeding-Prozess für das `Exercise`-Modell durch.
*/
export const seedExercises = async () => {
  const data = await Exercise.find({}, {}, {
    lean: true
  });

  const [ dataHash, seedHash ] = await Promise.all([
    blake2b(JSON.stringify(data)),
    blake2b(JSON.stringify(seed))
  ]);

  if(dataHash === seedHash) {
    return;
  }

  log.info("initialising seeding for `Exercise` model");

  await Exercise.deleteMany({});

  const writes: AnyBulkWriteOperation[] = seed.map((entry) => {
    return {
      insertOne: {
        document: entry
      }
    };
  });

  await Exercise.bulkWrite(writes);

  log.info("finalized seeding for `Exercise` model");
};
