import { seeder } from "$internal/seeder";
import { Exercise } from "$models/exercise";

// Types
import type { Exercise as ExerciseType } from "$models/exercise";

const seeds: ExerciseType[] = [
  {
    id: "cable_curls",
    muscleGroups: [
      "biceps_brachi"
    ],
    equipment: [
      "cable_machine",
      "bar_attachement"
    ],
    difficulty: "intermediate"
  },
  {
    id: "ez_bar_curls",
    muscleGroups: [
      "biceps_brachi"
    ],
    equipment: [
      "ez_curlbar",
      "weight_plates"
    ],
    difficulty: "easy"
  },
  {
    id: "incline_curls",
    muscleGroups: [
      "biceps_brachi"
    ],
    equipment: [
      "adjustable_bench",
      "dumbbells"
    ],
    difficulty: "easy"
  },
  {
    id: "concentration_curls",
    muscleGroups: [
      "biceps_brachi"
    ],
    equipment: [
      "dumbbells"
    ],
    difficulty: "easy"
  },
  {
    id: "hammer_curls",
    muscleGroups: [
      "biceps_brachi",
      "forearms"
    ],
    equipment: [
      "dumbbells"
    ],
    difficulty: "easy"
  },
  {
    id: "cable_hammer_curls",
    muscleGroups: [
      "biceps_brachi",
      "forearms"
    ],
    equipment: [
      "cable_machine",
      "rope_attachement"
    ],
    difficulty: "easy"
  },
  {
    id: "tricep_rope_pushdowns",
    muscleGroups: [
      "triceps_brachi"
    ],
    equipment: [
      "cable_machine",
      "rope_attachement"
    ],
    difficulty: "easy"
  },
  {
    id: "single_arm_side_tricep_kickbacks",
    muscleGroups: [
      "triceps_brachi"
    ],
    equipment: [
      "cable_machine"
    ],
    difficulty: "intermediate"
  },
  {
    id: "cable_pushdowns",
    muscleGroups: [
      "triceps_brachi"
    ],
    equipment: [
      "cable_machine",
      "straight_bar_attachment"
    ],
    difficulty: "easy"
  },
  {
    id: "skullcrushers",
    muscleGroups: [
      "triceps_brachi"
    ],
    equipment: [
      "ez_curlbar",
      "weight_plates",
      "flat_bench"
    ],
    difficulty: "intermediate"
  },
  {
    id: "behind_the_back_tricep_kickbacks",
    muscleGroups: [
      "triceps_brachi"
    ],
    equipment: [
      "dumbbells"
    ],
    difficulty: "intermediate"
  },
  {
    id: "overhead_tricep_extensions",
    muscleGroups: [
      "triceps_brachi"
    ],
    equipment: [
      "dumbbells"
    ],
    difficulty: "easy"
  },
  {
    id: "reverse_grip_cable_pushdowns",
    muscleGroups: [
      "biceps_brachi",
      "forearms"
    ],
    equipment: [
      "cable_machine",
      "straight_bar_attachment"
    ],
    difficulty: "intermediate"
  },
  {
    id: "wrist_curls",
    muscleGroups: [
      "forearms"
    ],
    equipment: [
      "barbell",
      "weight_plates"
    ],
    difficulty: "easy"
  },
  {
    id: "reverse_wrist_curls",
    muscleGroups: [
      "forearms"
    ],
    equipment: [
      "barbell",
      "weight_plates"
    ],
    difficulty: "easy"
  },
  {
    id: "front_raises",
    muscleGroups: [
      "deltoids"
    ],
    equipment: [
      "dumbbells"
    ],
    difficulty: "easy"
  },
  {
    id: "lateral_raises",
    muscleGroups: [
      "deltoids"
    ],
    equipment: [
      "dumbbells"
    ],
    difficulty: "easy"
  },
  {
    id: "rear_delt_cable_flys",
    muscleGroups: [
      "deltoids"
    ],
    equipment: [
      "cable_machine"
    ],
    difficulty: "intermediate"
  },
  {
    id: "incline_dumbbell_curls",
    muscleGroups: [
      "pectoralis_major"
    ],
    equipment: [
      "dumbbells",
      "incline_bench"
    ],
    difficulty: "intermediate"
  },
  {
    id: "low_to_high_cable_flys",
    muscleGroups: [
      "pectoralis_major"
    ],
    equipment: [
      "cable_machine"
    ],
    difficulty: "intermediate"
  },
  {
    id: "bench_press",
    muscleGroups: [
      "pectoralis_major"
    ],
    equipment: [
      "barbell",
      "weight_plates",
      "bench"
    ],
    difficulty: "intermediate"
  },
  {
    id: "pec_dec_machine",
    muscleGroups: [
      "pectoralis_major"
    ],
    equipment: [
      "pec_dec_machine"
    ],
    difficulty: "easy"
  },
  {
    id: "decline_bench_press",
    muscleGroups: [
      "pectoralis_major"
    ],
    equipment: [
      "barbell",
      "weight_plates",
      "decline_bench"
    ],
    difficulty: "intermediate"
  },
  {
    id: "high_to_low_cable_flys",
    muscleGroups: [
      "pectoralis_major"
    ],
    equipment: [
      "cable_machine"
    ],
    difficulty: "intermediate"
  },
  {
    id: "dumbbell_shoulder_shrugs",
    muscleGroups: [
      "trapezius"
    ],
    equipment: [
      "dumbbells"
    ],
    difficulty: "easy"
  },
  {
    id: "face_pulls",
    muscleGroups: [
      "trapezius"
    ],
    equipment: [
      "cable_machine",
      "rope_attachment"
    ],
    difficulty: "intermediate"
  },
  {
    id: "incline_dumbbell_y_raises",
    muscleGroups: [
      "trapezius"
    ],
    equipment: [
      "dumbbells",
      "incline_bench"
    ],
    difficulty: "intermediate"
  },
  {
    id: "single_arm_rows",
    muscleGroups: [
      "latissimus_dorsi"
    ],
    equipment: [
      "dumbbells",
      "bench"
    ],
    difficulty: "intermediate"
  },
  {
    id: "single_arm_pulldowns",
    muscleGroups: [
      "latissimus_dorsi"
    ],
    equipment: [
      "cable_machine"
    ],
    difficulty: "intermediate"
  },
  {
    id: "wide_grip_pulldowns",
    muscleGroups: [
      "middle_back"
    ],
    equipment: [
      "lat_pulldown_machine"
    ],
    difficulty: "intermediate"
  },
  {
    id: "wide_grip_t-bar_row_machine",
    muscleGroups: [
      "middle_back"
    ],
    equipment: [
      "t-bar_row_machine"
    ],
    difficulty: "intermediate"
  },
  {
    id: "deadlifts",
    muscleGroups: [
      "lower_back"
    ],
    equipment: [
      "barbell",
      "weight_plates"
    ],
    difficulty: "intermediate"
  },
  {
    id: "back_extensions",
    muscleGroups: [
      "lower_back"
    ],
    equipment: [
      "back_extension_bench"
    ],
    difficulty: "easy"
  },
  {
    id: "wide_stance_squats",
    muscleGroups: [
      "quadriceps"
    ],
    equipment: [
      "barbell",
      "weight_plates"
    ],
    difficulty: "intermediate"
  },
  {
    id: "wide_stance_leg_press",
    muscleGroups: [
      "quadriceps"
    ],
    equipment: [
      "leg_press_machine"
    ],
    difficulty: "easy"
  },
  {
    id: "bulgarian_split_squats",
    muscleGroups: [
      "quadriceps"
    ],
    equipment: [
      "dumbbells",
      "bench"
    ],
    difficulty: "intermediate"
  },
  {
    id: "leg_extensions",
    muscleGroups: [
      "quadriceps"
    ],
    equipment: [
      "leg_extension_machine"
    ],
    difficulty: "easy"
  },
  {
    id: "lying_leg_curls",
    muscleGroups: [
      "hamstrings"
    ],
    equipment: [
      "leg_curl_machine"
    ],
    difficulty: "easy"
  },
  {
    id: "seated_leg_curls",
    muscleGroups: [
      "hamstrings"
    ],
    equipment: [
      "leg_curl_machine"
    ],
    difficulty: "easy"
  },
  {
    id: "hip_thrusts",
    muscleGroups: [
      "glutes"
    ],
    equipment: [
      "barbell",
      "weight_plates",
      "bench"
    ],
    difficulty: "intermediate"
  },
  {
    id: "side_leg_raises",
    muscleGroups: [
      "glutes"
    ],
    equipment: [
      "body_weight"
    ],
    difficulty: "easy"
  },
  {
    id: "standing_calf_raises",
    muscleGroups: [
      "calves"
    ],
    equipment: [
      "calf_raise_machine"
    ],
    difficulty: "easy"
  },
  {
    id: "seated_calf_raises",
    muscleGroups: [
      "calves"
    ],
    equipment: [
      "seated_calf_raise_machine"
    ],
    difficulty: "easy"
  },
  {
    id: "incline_bench_crunches",
    muscleGroups: [
      "abs"
    ],
    equipment: [
      "incline_bench"
    ],
    difficulty: "easy"
  },
  {
    id: "hanging_leg_raises",
    muscleGroups: [
      "abs"
    ],
    equipment: [
      "pull_up_bar"
    ],
    difficulty: "intermediate"
  },
  {
    id: "cable_woodchoppers",
    muscleGroups: [
      "obliques"
    ],
    equipment: [
      "cable_machine"
    ],
    difficulty: "intermediate"
  },
  {
    id: "dumbbell_side_bends",
    muscleGroups: [
      "obliques"
    ],
    equipment: [
      "dumbbells"
    ],
    difficulty: "easy"
  },
  {
    id: "vacuum_exercise",
    muscleGroups: [
      "lower_core"
    ],
    equipment: [
      "body_weight"
    ],
    difficulty: "intermediate"
  },
  {
    id: "stir_the_pot",
    muscleGroups: [
      "lower_core"
    ],
    equipment: [
      "exercise_ball"
    ],
    difficulty: "intermediate"
  }  
];

/**
  Führt einen Seeding-Prozess für das `Exercise`-Modell durch.
*/
export const seedExercises = () => {
  return seeder(Exercise, seeds);
};
