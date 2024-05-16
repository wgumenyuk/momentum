import { Equipment } from "$models/equipment";
import { log } from "$internal/logger";
import { blake2b } from "$services/crypto";

// Types
import type { AnyBulkWriteOperation } from "mongoose";
import type { Equipment as EquipmentType } from "$models/equipment";

const seed: EquipmentType[] = [
  {
    id: "cable_machine",
    exercises: [
      "cable_curls",
      "cable_hammer_curls",
      "tricep_rope_pushdowns",
      "single_arm_side_tricep_kickbacks",
      "cable_pushdowns",
      "reverse_grip_cable_pushdowns",
      "rear_delt_cable_flys",
      "low_to_high_cable_flys",
      "high_to_low_cable_flys",
      "face_pulls",
      "single_arm_pulldowns",
      "cable_woodchoppers"
    ]
  },
  {
    id: "bar_attachement",
    exercises: [
      "cable_curls"
    ]
  },
  {
    id: "ez_curlbar",
    exercises: [
      "ez_bar_curls",
      "skullcrushers"
    ]
  },
  {
    id: "weight_plates",
    exercises: [
      "ez_bar_curls",
      "skullcrushers",
      "bench_press",
      "decline_bench_press",
      "deadlifts",
      "wide_stance_squats",
      "hip_thrusts"
    ]
  },
  {
    id: "adjustable_bench",
    exercises: [
      "incline_curls"
    ]
  },
  {
    id: "dumbbells",
    exercises: [
      "incline_curls",
      "concentration_curls",
      "hammer_curls",
      "behind_the_back_tricep_kickbacks",
      "overhead_tricep_extensions",
      "front_raises",
      "lateral_raises",
      "incline_dumbbell_curls",
      "dumbbell_shoulder_shrugs",
      "single_arm_rows",
      "bulgarian_split_squats",
      "dumbbell_side_bends"
    ]
  },
  {
    id: "rope_attachement",
    exercises: [
      "cable_hammer_curls",
      "tricep_rope_pushdowns",
      "face_pulls"
    ]
  },
  {
    id: "straight_bar_attachment",
    exercises: [
      "cable_pushdowns",
      "reverse_grip_cable_pushdowns"
    ]
  },
  {
    id: "flat_bench",
    exercises: [
      "skullcrushers"
    ]
  },
  {
    id: "pec_dec_machine",
    exercises: [
      "pec_dec_machine"
    ]
  },
  {
    id: "decline_bench",
    exercises: [
      "decline_bench_press"
    ]
  },
  {
    id: "bench",
    exercises: [
      "bench_press",
      "single_arm_rows",
      "bulgarian_split_squats",
      "hip_thrusts"
    ]
  },
  {
    id: "lat_pulldown_machine",
    exercises: [
      "wide_grip_pulldowns"
    ]
  },
  {
    id: "t-bar_row_machine",
    exercises: [
      "wide_grip_t-bar_row_machine"
    ]
  },
  {
    id: "back_extension_bench",
    exercises: [
      "back_extensions"
    ]
  },
  {
    id: "leg_press_machine",
    exercises: [
      "wide_stance_leg_press"
    ]
  },
  {
    id: "leg_extension_machine",
    exercises: [
      "leg_extensions"
    ]
  },
  {
    id: "leg_curl_machine",
    exercises: [
      "lying_leg_curls",
      "seated_leg_curls"
    ]
  },
  {
    id: "calf_raise_machine",
    exercises: [
      "standing_calf_raises"
    ]
  },
  {
    id: "seated_calf_raise_machine",
    exercises: [
      "seated_calf_raises"
    ]
  },
  {
    id: "incline_bench",
    exercises: [
      "incline_dumbbell_curls",
      "incline_bench_crunches",
      "incline_dumbbell_y_raises"
    ]
  },
  {
    id: "pull_up_bar",
    exercises: [
      "hanging_leg_raises"
    ]
  },
  {
    id: "exercise_ball",
    exercises: [
      "stir_the_pot"
    ]
  },
  {
    id: "barbell",
    exercises: [
      "wrist_curls",
      "reverse_wrist_curls",
      "bench_press",
      "decline_bench_press",
      "deadlifts",
      "wide_stance_squats",
      "hip_thrusts"
    ]
  },
  {
    id: "body_weight",
    exercises: [
      "side_leg_raises",
      "vacuum_exercise"
    ]
  }  
];

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
