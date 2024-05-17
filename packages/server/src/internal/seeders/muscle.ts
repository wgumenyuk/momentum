import { Muscle } from "$models/muscle";
import { log } from "$internal/logger";
import { blake2b } from "$services/crypto";

// Types
import type { AnyBulkWriteOperation } from "mongoose";
import type { Muscle as MuscleType } from "$models/muscle";

const seed: MuscleType[] = [
  {
    id: "short_head",
    muscleGroup: "biceps_brachi",
    region: "arms",
    exercises: [
      "cable_curls",
      "ez_bar_curls"
    ]
  },
  {
    id: "biceps_long_head",
    muscleGroup: "biceps_brachi",
    region: "arms",
    exercises: [
      "incline_curls",
      "concentration_curls"
    ]
  },
  {
    id: "brachialis",
    muscleGroup: "biceps_brachi",
    region: "arms",
    exercises: [
      "hammer_curls",
      "cable_hammer_curls"
    ]
  },
  {
    id: "lateral_head",
    muscleGroup: "triceps_brachi",
    region: "arms",
    exercises: [
      "tricep_rope_pushdowns",
      "single_arm_side_tricep_kickbacks"
    ]
  },
  {
    id: "medial_head",
    muscleGroup: "triceps_brachi",
    region: "arms",
    exercises: [
      "cable_pushdowns",
      "skullcrushers"
    ]
  },
  {
    id: "triceps_long_head",
    muscleGroup: "triceps_brachi",
    region: "arms",
    exercises: [
      "behind_the_back_tricep_kickbacks",
      "overhead_tricep_extensions"
    ]
  },
  {
    id: "brachioradialis",
    muscleGroup: "forearms",
    region: "arms",
    exercises: [
      "hammer_curls",
      "reverse_grip_cable_pushdowns"
    ]
  },
  {
    id: "flexors",
    muscleGroup: "forearms",
    region: "arms",
    exercises: [
      "wrist_curls"
    ]
  },
  {
    id: "extensors",
    muscleGroup: "forearms",
    region: "arms",
    exercises: [
      "reverse_wrist_curls"
    ]
  },
  {
    id: "front_delts",
    muscleGroup: "deltoids",
    region: "shoulders",
    exercises: [
      "front_raises"
    ]
  },
  {
    id: "side_delts",
    muscleGroup: "deltoids",
    region: "shoulders",
    exercises: [
      "lateral_raises"
    ]
  },
  {
    id: "rear_delts",
    muscleGroup: "deltoids",
    region: "shoulders",
    exercises: [
      "rear_delt_cable_flys"
    ]
  },
  {
    id: "clavicular_head",
    muscleGroup: "pectoralis_major",
    region: "chest",
    exercises: [
      "incline_dumbbell_curls",
      "low_to_high_cable_flys"
    ]
  },
  {
    id: "sternal_head",
    muscleGroup: "pectoralis_major",
    region: "chest",
    exercises: [
      "bench_press",
      "pec_dec_machine"
    ]
  },
  {
    id: "costal_head",
    muscleGroup: "pectoralis_major",
    region: "chest",
    exercises: [
      "decline_bench_press",
      "high_to_low_cable_flys"
    ]
  },
  {
    id: "upper_traps",
    muscleGroup: "trapezius",
    region: "back",
    exercises: [
      "dumbbell_shoulder_shrugs"
    ]
  },
  {
    id: "middle_traps",
    muscleGroup: "trapezius",
    region: "back",
    exercises: [
      "face_pulls"
    ]
  },
  {
    id: "lower_traps",
    muscleGroup: "trapezius",
    region: "back",
    exercises: [
      "incline_dumbbell_y_raises"
    ]
  },
  {
    id: "upper_lats",
    muscleGroup: "latissimus_dorsi",
    region: "back",
    exercises: [
      "single_arm_rows"
    ]
  },
  {
    id: "lower_lats",
    muscleGroup: "latissimus_dorsi",
    region: "back",
    exercises: [
      "single_arm_pulldowns"
    ]
  },
  {
    id: "middle_back",
    muscleGroup: "middle_back",
    region: "back",
    exercises: [
      "wide_grip_pulldowns",
      "wide_grip_t-bar_row_machine"
    ]
  },
  {
    id: "erector_spinae",
    muscleGroup: "lower_back",
    region: "back",
    exercises: [
      "deadlifts",
      "back_extensions"
    ]
  },
  {
    id: "vastus_lateralis",
    muscleGroup: "quadriceps",
    region: "legs",
    exercises: [
      "wide_stance_squats",
      "wide_stance_leg_press"
    ]
  },
  {
    id: "vastus_medialis",
    muscleGroup: "quadriceps",
    region: "legs",
    exercises: [
      "bulgarian_split_squats"
    ]
  },
  {
    id: "rectus_femoris",
    muscleGroup: "quadriceps",
    region: "legs",
    exercises: [
      "leg_extensions"
    ]
  },
  {
    id: "biceps_femoris",
    muscleGroup: "hamstrings",
    region: "legs",
    exercises: [
      "lying_leg_curls"
    ]
  },
  {
    id: "semimembranosus",
    muscleGroup: "hamstrings",
    region: "legs",
    exercises: [
      "seated_leg_curls"
    ]
  },
  {
    id: "semitendinosus",
    muscleGroup: "hamstrings",
    region: "legs",
    exercises: [
      "seated_leg_curls"
    ]
  },
  {
    id: "gluteus_maximus",
    muscleGroup: "glutes",
    region: "legs",
    exercises: [
      "hip_thrusts"
    ]
  },
  {
    id: "gluteus_medius",
    muscleGroup: "glutes",
    region: "legs",
    exercises: [
      "side_leg_raises"
    ]
  },
  {
    id: "gastrocnemius",
    muscleGroup: "calves",
    region: "legs",
    exercises: [
      "standing_calf_raises"
    ]
  },
  {
    id: "soleus",
    muscleGroup: "calves",
    region: "legs",
    exercises: [
      "seated_calf_raises"
    ]
  },
  {
    id: "rectus_abdominis",
    muscleGroup: "abs",
    region: "core",
    exercises: [
      "incline_bench_crunches",
      "hanging_leg_raises"
    ]
  },
  {
    id: "obliques",
    muscleGroup: "obliques",
    region: "core",
    exercises: [
      "cable_woodchoppers",
      "dumbbell_side_bends"
    ]
  },
  {
    id: "transverse_abdominis",
    muscleGroup: "lower_core",
    region: "core",
    exercises: [
      "vacuum_exercise",
      "stir_the_pot"
    ]
  }
];

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
