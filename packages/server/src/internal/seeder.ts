import { log } from "$internal/logger";
import { blake2b } from "$services/crypto";

// Types
import type { Model, AnyBulkWriteOperation } from "mongoose";

/**
  Führt einen Seeding-Prozess für das angegebene Modell durch.
*/
export const seeder = async <T extends Record<string, unknown>>(
  model: Model<T>,
  seed: T[]
) => {
  const data = await model.find({}, "-_id -__v", {
    lean: true
  });

  const dataHash = blake2b(JSON.stringify(data));
  const seedHash = blake2b(JSON.stringify(seed));

  if(dataHash === seedHash) {
    return;
  }

  log.info(
    {
      dataHash,
      seedHash
    },
    `initializing seeding for "${model.modelName}" model`
  );

  await model.deleteMany({});

  const writes: AnyBulkWriteOperation[] = seed.map((entry) => {
    return {
      insertOne: {
        document: entry 
      }
    };
  });

  await model.bulkWrite(writes);

  log.info(`finalized seeding for "${model.modelName} model"`);
};
