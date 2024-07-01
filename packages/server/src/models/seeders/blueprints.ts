import { Blueprint as BlueprintType } from "@momentum/shared";
import { seeder } from "$internal/seeder";
import { Blueprint } from "$models/blueprints";

const blueprintSeeds: BlueprintType[] = [
  {
    id: "1",
    userId: "test_user_1",
    name: "PPL Split (Push, Pull, Legs)",
    description: "Push, Pull, and Legs split for overall muscle balance.",
    tags: [
      "45 Minutes", "Hypertrophy", "Muscle Balance", "Beginner", "Intermediate", "Advanced", "Full Body",
      "Chest", "Triceps", "Shoulders", "Upper Body", "Back", "Biceps", "Legs", "Quads", "Hamstrings", "Calves"
    ],
    exercises: [
      // Push
      { exerciseId: "Neutral Chest Pressing Movement", sets: 4, reps: 8-12 },
      { exerciseId: "Incline Chest Pressing Movement", sets: 3, reps: 8-12 },
      { exerciseId: "Neutral Chest Fly Movement", sets: 3, reps: 8-12 },
      { exerciseId: "Neutral Tricep Pushing Movement", sets: 3, reps: 8-12 },
      { exerciseId: "Overhead Tricep Pushing Movement", sets: 3, reps: 8-12 },
      // Pull
      { exerciseId: "Wide Grip Pull Movement", sets: 3, reps: 8-12 },
      { exerciseId: "Close Grip Rowing Movement", sets: 3, reps: 8-12 },
      { exerciseId: "Wide Grip Chest Height Rowing Movement", sets: 3, reps: 8-12 },
      { exerciseId: "Front Body Biceps Movement", sets: 3, reps: 8-12 },
      { exerciseId: "Hammer Curl Movement", sets: 3, reps: 8-12 },
      // Legs
      { exerciseId: "Compound Leg Movement", sets: 4, reps: 8-12 },
      { exerciseId: "Quads Focused Movement", sets: 3, reps: 8-12 },
      { exerciseId: "Hamstring Focused Movement", sets: 3, reps: 8-12 },
      { exerciseId: "Calve Movement", sets: 3, reps: 8-12 }
    ]
  },
  {
    id: "2",
    userId: "test_user_1",
    name: "Upper/Lower Split",
    description: "Upper and Lower body split for muscle growth.",
    tags: [
      "60 Minutes", "Muscle Growth", "Intermediate", "Advanced", "Balanced", 
      "Chest", "Back", "Triceps", "Biceps", "Shoulders", "Upper Body", 
      "Legs", "Quads", "Hamstrings", "Calves", "Lower Body"
    ],
    exercises: [
      // Upper
      { exerciseId: "Neutral Chest Pressing Movement", sets: 4, reps: 8-12 },
      { exerciseId: "Incline Chest Pressing Movement", sets: 3, reps: 8-12 },
      { exerciseId: "Wide Grip Pull Movement", sets: 3, reps: 8-12 },
      { exerciseId: "Close Grip Rowing Movement", sets: 3, reps: 8-12 },
      { exerciseId: "Neutral Tricep Pushing Movement", sets: 3, reps: 8-12 },
      { exerciseId: "Front Body Biceps Movement", sets: 3, reps: 8-12 },
      // Lower
      { exerciseId: "Compound Leg Movement", sets: 4, reps: 8-12 },
      { exerciseId: "Quads Focused Movement", sets: 3, reps: 8-12 },
      { exerciseId: "Hamstring Focused Movement", sets: 3, reps: 8-12 },
      { exerciseId: "Calve Movement", sets: 3, reps: 8-12 }
    ]
  },
  {
    id: "3",
    userId: "test_user_1",
    name: "Full Body Workout",
    description: "Quick full body workout for muscle endurance.",
    tags: [
      "30 Minutes", "Full Body", "Muscle Endurance", "Beginner", "Time Efficient", "Balanced", 
      "Chest", "Back", "Triceps", "Biceps", "Shoulders", "Legs", "Quads", "Hamstrings", "Calves"
    ],
    exercises: [
      { exerciseId: "Compound Leg Movement", sets: 3, reps: 8-12 },
      { exerciseId: "Neutral Chest Pressing Movement", sets: 3, reps: 8-12 },
      { exerciseId: "Wide Grip Pull Movement", sets: 3, reps: 8-12 },
      { exerciseId: "Neutral Tricep Pushing Movement", sets: 3, reps: 8-12 },
      { exerciseId: "Front Body Biceps Movement", sets: 3, reps: 8-12 }
    ]
  },
  {
    id: "4",
    userId: "test_user_1",
    name: "Arm Focused PPL Split",
    description: "Focus on arm muscles within a PPL split.",
    tags: [
      "45 Minutes", "Hypertrophy", "Muscle Balance", "Intermediate", "Advanced", "Arms Focused", 
      "Chest", "Triceps", "Shoulders", "Upper Body", "Back", "Biceps", "Legs", "Quads", "Hamstrings", "Calves"
    ],
    exercises: [
      // Push
      { exerciseId: "Neutral Chest Pressing Movement", sets: 4, reps: 8-12 },
      { exerciseId: "Incline Chest Pressing Movement", sets: 3, reps: 8-12 },
      { exerciseId: "Neutral Tricep Pushing Movement", sets: 3, reps: 8-12 },
      { exerciseId: "Overhead Tricep Pushing Movement", sets: 3, reps: 8-12 },
      { exerciseId: "Shoulder Press Movement", sets: 3, reps: 8-12 },
      // Pull
      { exerciseId: "Wide Grip Pull Movement", sets: 3, reps: 8-12 },
      { exerciseId: "Close Grip Rowing Movement", sets: 3, reps: 8-12 },
      { exerciseId: "Wide Grip Chest Height Rowing Movement", sets: 3, reps: 8-12 },
      { exerciseId: "Front Body Biceps Movement", sets: 3, reps: 8-12 },
      { exerciseId: "Hammer Curl Movement", sets: 3, reps: 8-12 },
      // Legs
      { exerciseId: "Compound Leg Movement", sets: 4, reps: 8-12 },
      { exerciseId: "Quads Focused Movement", sets: 3, reps: 8-12 },
      { exerciseId: "Hamstring Focused Movement", sets: 3, reps: 8-12 },
      { exerciseId: "Calve Movement", sets: 3, reps: 8-12 }
    ]
  },
  {
    id: "5",
    userId: "test_user_1",
    name: "PPL Split (Powerlifting Focused)",
    description: "Powerlifting focused PPL split for strength gains.",
    tags: [
      "60 Minutes", "Powerlifting", "Intermediate", "Advanced", "Full Body", 
      "Chest", "Triceps", "Shoulders", "Upper Body", "Back", "Biceps", "Legs", "Quads", "Hamstrings", "Calves"
    ],
    exercises: [
      // Push
      { exerciseId: "Heavy Bench Press Movement", sets: 4, reps: 4-6 },
      { exerciseId: "Incline Bench Press Movement", sets: 3, reps: 4-6 },
      { exerciseId: "Chest Fly Movement", sets: 3, reps: 4-6 },
      { exerciseId: "Tricep Dips Movement", sets: 3, reps: 4-6 },
      { exerciseId: "Overhead Tricep Extension Movement", sets: 3, reps: 4-6 },
      // Pull
      { exerciseId: "Heavy Deadlift Movement", sets: 4, reps: 4-6 },
      { exerciseId: "Bent Over Row Movement", sets: 3, reps: 4-6 },
      { exerciseId: "Wide Grip Pull-Up Movement", sets: 3, reps: 4-6 },
      { exerciseId: "Barbell Curl Movement", sets: 3, reps: 4-6 },
      { exerciseId: "Hammer Curl Movement", sets: 3, reps: 4-6 },
      // Legs
      { exerciseId: "Heavy Squat Movement", sets: 4, reps: 4-6 },
      { exerciseId: "Leg Press Movement", sets: 3, reps: 4-6 },
      { exerciseId: "Romanian Deadlift Movement", sets: 3, reps: 4-6 },
      { exerciseId: "Calve Raise Movement", sets: 3, reps: 4-6 }
    ]
  },
  {
    id: "6",
    userId: "test_user_1",
    name: "Push/Pull Split",
    description: "Balanced Push/Pull split for muscle hypertrophy.",
    tags: [
      "45 Minutes", "Hypertrophy", "Intermediate", "Advanced", "Balanced", 
      "Chest", "Triceps", "Shoulders", "Upper Body", "Back", "Biceps"
    ],
    exercises: [
      // Push
      { exerciseId: "Neutral Chest Pressing Movement", sets: 4, reps: 8-12 },
      { exerciseId: "Incline Chest Pressing Movement", sets: 3, reps: 8-12 },
      { exerciseId: "Shoulder Press Movement", sets: 3, reps: 8-12 },
      { exerciseId: "Neutral Tricep Pushing Movement", sets: 3, reps: 8-12 },
      { exerciseId: "Overhead Tricep Pushing Movement", sets: 3, reps: 8-12 },
      // Pull
      { exerciseId: "Wide Grip Pull Movement", sets: 3, reps: 8-12 },
      { exerciseId: "Close Grip Rowing Movement", sets: 3, reps: 8-12 },
      { exerciseId: "Face Pull Movement", sets: 3, reps: 8-12 },
      { exerciseId: "Front Body Biceps Movement", sets: 3, reps: 8-12 },
      { exerciseId: "Hammer Curl Movement", sets: 3, reps: 8-12 }
    ]
  },
  {
    id: "7",
    userId: "test_user_1",
    name: "PPL Split (Strength Endurance Focused)",
    description: "Strength endurance focused PPL split.",
    tags: [
      "50 Minutes", "Strength Endurance", "Intermediate", "Advanced", "Full Body", 
      "Chest", "Triceps", "Shoulders", "Upper Body", "Back", "Biceps", "Legs", "Quads", "Hamstrings", "Calves"
    ],
    exercises: [
      // Push
      { exerciseId: "Bench Press Movement", sets: 4, reps: 8-12 },
      { exerciseId: "Incline Press Movement", sets: 3, reps: 8-12 },
      { exerciseId: "Chest Fly Movement", sets: 3, reps: 8-12 },
      { exerciseId: "Tricep Pushdown Movement", sets: 3, reps: 8-12 },
      { exerciseId: "Overhead Tricep Movement", sets: 3, reps: 8-12 },
      // Pull
      { exerciseId: "Lat Pulldown Movement", sets: 4, reps: 8-12 },
      { exerciseId: "Seated Row Movement", sets: 3, reps: 8-12 },
      { exerciseId: "Face Pull Movement", sets: 3, reps: 8-12 },
      { exerciseId: "Bicep Curl Movement", sets: 3, reps: 8-12 },
      { exerciseId: "Hammer Curl Movement", sets: 3, reps: 8-12 },
      // Legs
      { exerciseId: "Squat Movement", sets: 4, reps: 8-12 },
      { exerciseId: "Leg Press Movement", sets: 3, reps: 8-12 },
      { exerciseId: "Hamstring Curl Movement", sets: 3, reps: 8-12 },
      { exerciseId: "Calve Raise Movement", sets: 3, reps: 8-12 }
    ]
  },
  {
    id: "8",
    userId: "test_user_1",
    name: "Bro Split (Chest, Back, Shoulders, Arms, Legs)",
    description: "Bro split for hypertrophy focusing on different muscle groups each day.",
    tags: [
      "60 Minutes", "Hypertrophy", "Intermediate", "Advanced", 
      "Chest", "Back", "Shoulders", "Arms", "Legs", "Quads", "Hamstrings", "Calves", "Full Body"
    ],
    exercises: [
      // Chest
      { exerciseId: "Flat Bench Press Movement", sets: 4, reps: 8-12 },
      { exerciseId: "Incline Bench Press Movement", sets: 3, reps: 8-12 },
      { exerciseId: "Chest Fly Movement", sets: 3, reps: 8-12 },
      { exerciseId: "Decline Press Movement", sets: 3, reps: 8-12 },
      { exerciseId: "Chest Dips Movement", sets: 3, reps: 8-12 },
      // Back
      { exerciseId: "Pull-Up Movement", sets: 4, reps: 8-12 },
      { exerciseId: "Bent Over Row Movement", sets: 3, reps: 8-12 },
      { exerciseId: "T-Bar Row Movement", sets: 3, reps: 8-12 },
      { exerciseId: "Single Arm Row Movement", sets: 3, reps: 8-12 },
      { exerciseId: "Face Pull Movement", sets: 3, reps: 8-12 },
      // Shoulders
      { exerciseId: "Shoulder Press Movement", sets: 4, reps: 8-12 },
      { exerciseId: "Lateral Raise Movement", sets: 3, reps: 8-12 },
      { exerciseId: "Front Raise Movement", sets: 3, reps: 8-12 },
      { exerciseId: "Rear Delt Fly Movement", sets: 3, reps: 8-12 },
      { exerciseId: "Upright Row Movement", sets: 3, reps: 8-12 },
      // Arms
      { exerciseId: "Barbell Curl Movement", sets: 4, reps: 8-12 },
      { exerciseId: "Hammer Curl Movement", sets: 3, reps: 8-12 },
      { exerciseId: "Tricep Pushdown Movement", sets: 3, reps: 8-12 },
      { exerciseId: "Overhead Tricep Movement", sets: 3, reps: 8-12 },
      { exerciseId: "Concentration Curl Movement", sets: 3, reps: 8-12 },
      // Legs
      { exerciseId: "Squat Movement", sets: 4, reps: 8-12 },
      { exerciseId: "Leg Press Movement", sets: 3, reps: 8-12 },
      { exerciseId: "Hamstring Curl Movement", sets: 3, reps: 8-12 },
      { exerciseId: "Calve Raise Movement", sets: 3, reps: 8-12 },
      { exerciseId: "Lunges Movement", sets: 3, reps: 8-12 }
    ]
  },
  {
    id: "9",
    userId: "test_user_1",
    name: "Calisthenics PPL Split",
    description: "Bodyweight exercises in a PPL split.",
    tags: [
      "45 Minutes", "Hypertrophy", "Muscle Balance", "Intermediate", "Advanced", "Full Body", 
      "Chest", "Triceps", "Shoulders", "Upper Body", "Back", "Biceps", "Legs", "Quads", "Hamstrings", "Calves", "Calisthenics"
    ],
    exercises: [
      // Push
      { exerciseId: "Push-Ups", sets: 4, reps: 8-12 },
      { exerciseId: "Dips", sets: 3, reps: 8-12 },
      { exerciseId: "Pike Push-Ups", sets: 3, reps: 8-12 },
      { exerciseId: "Tricep Dips", sets: 3, reps: 8-12 },
      { exerciseId: "Shoulder Taps", sets: 3, reps: 8-12 },
      // Pull
      { exerciseId: "Pull-Ups", sets: 4, reps: 8-12 },
      { exerciseId: "Chin-Ups", sets: 3, reps: 8-12 },
      { exerciseId: "Australian Pull-Ups", sets: 3, reps: 8-12 },
      { exerciseId: "Inverted Rows", sets: 3, reps: 8-12 },
      { exerciseId: "Bodyweight Curls", sets: 3, reps: 8-12 },
      // Legs
      { exerciseId: "Pistol Squats", sets: 4, reps: 8-12 },
      { exerciseId: "Bulgarian Split Squats", sets: 3, reps: 8-12 },
      { exerciseId: "Glute Bridges", sets: 3, reps: 8-12 },
      { exerciseId: "Calf Raises", sets: 3, reps: 8-12 },
      { exerciseId: "Box Jumps", sets: 3, reps: 8-12 }
    ]
  },
  {
    id: "10",
    userId: "test_user_1",
    name: "Full Body (Calisthenics)",
    description: "Quick full body workout with bodyweight exercises.",
    tags: [
      "30 Minutes", "Full Body", "Muscle Endurance", "Intermediate", "Time Efficient", "Balanced", 
      "Chest", "Back", "Triceps", "Biceps", "Shoulders", "Legs", "Quads", "Hamstrings", "Calves", "Calisthenics"
    ],
    exercises: [
      { exerciseId: "Pull-Ups", sets: 3, reps: 8-12 },
      { exerciseId: "Push-Ups", sets: 3, reps: 8-12 },
      { exerciseId: "Dips", sets: 3, reps: 8-12 },
      { exerciseId: "Bodyweight Squats", sets: 3, reps: 8-12 },
      { exerciseId: "Planks", sets: 3, reps: 30 }
    ]
  },
  {
    id: "11",
    userId: "test_user_1",
    name: "PPL Split (Powerbuilding Focused)",
    description: "PPL split combining powerlifting and bodybuilding.",
    tags: [
      "60 Minutes", "Hypertrophy", "Muscle Growth", "Intermediate", "Advanced", "Full Body", 
      "Chest", "Triceps", "Shoulders", "Upper Body", "Back", "Biceps", "Legs", "Quads", "Hamstrings", "Calves"
    ],
    exercises: [
      // Push
      { exerciseId: "Bench Press Movement", sets: 4, reps: 8-12 },
      { exerciseId: "Incline Dumbbell Press Movement", sets: 3, reps: 8-12 },
      { exerciseId: "Chest Fly Movement", sets: 3, reps: 8-12 },
      { exerciseId: "Shoulder Press Movement", sets: 3, reps: 8-12 },
      { exerciseId: "Tricep Pushdown Movement", sets: 3, reps: 8-12 },
      // Pull
      { exerciseId: "Deadlift Movement", sets: 4, reps: 8-12 },
      { exerciseId: "Bent Over Row Movement", sets: 3, reps: 8-12 },
      { exerciseId: "Pull-Up Movement", sets: 3, reps: 8-12 },
      { exerciseId: "Barbell Curl Movement", sets: 3, reps: 8-12 },
      { exerciseId: "Hammer Curl Movement", sets: 3, reps: 8-12 },
      // Legs
      { exerciseId: "Squat Movement", sets: 4, reps: 8-12 },
      { exerciseId: "Leg Press Movement", sets: 3, reps: 8-12 },
      { exerciseId: "Romanian Deadlift Movement", sets: 3, reps: 8-12 },
      { exerciseId: "Calf Raise Movement", sets: 3, reps: 8-12 }
    ]
  },
  {
    id: "12",
    userId: "test_user_1",
    name: "Push/Pull/Legs Split (Calisthenics & Weights)",
    description: "Combining calisthenics and weights in a PPL split.",
    tags: [
      "50 Minutes", "Hypertrophy", "Muscle Balance", "Intermediate", "Advanced", "Full Body", 
      "Chest", "Triceps", "Shoulders", "Upper Body", "Back", "Biceps", "Legs", "Quads", "Hamstrings", "Calves", "Calisthenics"
    ],
    exercises: [
      // Push
      { exerciseId: "Bench Press Movement", sets: 3, reps: 8-12 },
      { exerciseId: "Push-Ups", sets: 3, reps: 8-12 },
      { exerciseId: "Shoulder Press Movement", sets: 3, reps: 8-12 },
      { exerciseId: "Tricep Dips", sets: 3, reps: 8-12 },
      { exerciseId: "Lateral Raise Movement", sets: 3, reps: 8-12 },
      // Pull
      { exerciseId: "Deadlift Movement", sets: 3, reps: 8-12 },
      { exerciseId: "Pull-Ups", sets: 3, reps: 8-12 },
      { exerciseId: "Bent Over Row Movement", sets: 3, reps: 8-12 },
      { exerciseId: "Chin-Ups", sets: 3, reps: 8-12 },
      { exerciseId: "Face Pull Movement", sets: 3, reps: 8-12 },
      // Legs
      { exerciseId: "Squat Movement", sets: 3, reps: 8-12 },
      { exerciseId: "Pistol Squats", sets: 3, reps: 8-12 },
      { exerciseId: "Lunges", sets: 3, reps: 8-12 },
      { exerciseId: "Calf Raise Movement", sets: 3, reps: 8-12 },
      { exerciseId: "Box Jumps", sets: 3, reps: 8-12 }
    ]
  },
  {
    id: "13",
    userId: "test_user_1",
    name: "Bro Split (Hypertrophy Focused)",
    description: "Bro split for hypertrophy focusing on different muscle groups each day.",
    tags: [
      "60 Minutes", "Hypertrophy", "Intermediate", "Advanced", 
      "Chest", "Back", "Shoulders", "Arms", "Legs", "Quads", "Hamstrings", "Calves", "Full Body"
    ],
    exercises: [
      // Chest
      { exerciseId: "Flat Bench Press Movement", sets: 4, reps: 8-12 },
      { exerciseId: "Incline Bench Press Movement", sets: 3, reps: 8-12 },
      { exerciseId: "Chest Fly Movement", sets: 3, reps: 8-12 },
      { exerciseId: "Decline Press Movement", sets: 3, reps: 8-12 },
      { exerciseId: "Chest Dips Movement", sets: 3, reps: 8-12 },
      // Back
      { exerciseId: "Pull-Up Movement", sets: 4, reps: 8-12 },
      { exerciseId: "Bent Over Row Movement", sets: 3, reps: 8-12 },
      { exerciseId: "T-Bar Row Movement", sets: 3, reps: 8-12 },
      { exerciseId: "Single Arm Row Movement", sets: 3, reps: 8-12 },
      { exerciseId: "Face Pull Movement", sets: 3, reps: 8-12 },
      // Shoulders
      { exerciseId: "Shoulder Press Movement", sets: 4, reps: 8-12 },
      { exerciseId: "Lateral Raise Movement", sets: 3, reps: 8-12 },
      { exerciseId: "Front Raise Movement", sets: 3, reps: 8-12 },
      { exerciseId: "Rear Delt Fly Movement", sets: 3, reps: 8-12 },
      { exerciseId: "Upright Row Movement", sets: 3, reps: 8-12 },
      // Arms
      { exerciseId: "Barbell Curl Movement", sets: 4, reps: 8-12 },
      { exerciseId: "Hammer Curl Movement", sets: 3, reps: 8-12 },
      { exerciseId: "Tricep Pushdown Movement", sets: 3, reps: 8-12 },
      { exerciseId: "Overhead Tricep Movement", sets: 3, reps: 8-12 },
      { exerciseId: "Concentration Curl Movement", sets: 3, reps: 8-12 },
      // Legs
      { exerciseId: "Squat Movement", sets: 4, reps: 8-12 },
      { exerciseId: "Leg Press Movement", sets: 3, reps: 8-12 },
      { exerciseId: "Hamstring Curl Movement", sets: 3, reps: 8-12 },
      { exerciseId: "Calve Raise Movement", sets: 3, reps: 8-12 },
      { exerciseId: "Lunges Movement", sets: 3, reps: 8-12 }
    ]
  },
  {
    id: "14",
    userId: "test_user_1",
    name: "Upper/Lower Split (Calisthenics Focused)",
    description: "Calisthenics focused Upper and Lower body split.",
    tags: [
      "60 Minutes", "Muscle Growth", "Intermediate", "Advanced", "Balanced", 
      "Chest", "Back", "Triceps", "Biceps", "Shoulders", "Upper Body", 
      "Legs", "Quads", "Hamstrings", "Calves", "Lower Body", "Calisthenics"
    ],
    exercises: [
      // Upper
      { exerciseId: "Pull-Ups", sets: 4, reps: 8-12 },
      { exerciseId: "Push-Ups", sets: 3, reps: 8-12 },
      { exerciseId: "Dips", sets: 3, reps: 8-12 },
      { exerciseId: "Pike Push-Ups", sets: 3, reps: 8-12 },
      { exerciseId: "Bodyweight Curls", sets: 3, reps: 8-12 },
      // Lower
      { exerciseId: "Pistol Squats", sets: 4, reps: 8-12 },
      { exerciseId: "Bulgarian Split Squats", sets: 3, reps: 8-12 },
      { exerciseId: "Glute Bridges", sets: 3, reps: 8-12 },
      { exerciseId: "Calf Raises", sets: 3, reps: 8-12 },
      { exerciseId: "Box Jumps", sets: 3, reps: 8-12 }
    ]
  },
  {
    id: "15",
    userId: "test_user_1",
    name: "Upper/Lower Split (Powerbuilding Focused)",
    description: "Powerbuilding focused Upper and Lower body split.",
    tags: [
      "60 Minutes", "Muscle Growth", "Intermediate", "Advanced", "Balanced", 
      "Chest", "Back", "Triceps", "Biceps", "Shoulders", "Upper Body", 
      "Legs", "Quads", "Hamstrings", "Calves", "Lower Body"
    ],
    exercises: [
      // Upper
      { exerciseId: "Bench Press Movement", sets: 4, reps: 8-12 },
      { exerciseId: "Pull-Up Movement", sets: 3, reps: 8-12 },
      { exerciseId: "Shoulder Press Movement", sets: 3, reps: 8-12 },
      { exerciseId: "Barbell Curl Movement", sets: 3, reps: 8-12 },
      { exerciseId: "Tricep Dips Movement", sets: 3, reps: 8-12 },
      // Lower
      { exerciseId: "Squat Movement", sets: 4, reps: 8-12 },
      { exerciseId: "Deadlift Movement", sets: 3, reps: 8-12 },
      { exerciseId: "Leg Press Movement", sets: 3, reps: 8-12 },
      { exerciseId: "Calf Raise Movement", sets: 3, reps: 8-12 },
      { exerciseId: "Lunges Movement", sets: 3, reps: 8-12 }
    ]
  }
];

/**
  Seeding process for the `Blueprint` model.
*/
export const seedBlueprints = () => {
  return seeder(Blueprint, blueprintSeeds);
};
