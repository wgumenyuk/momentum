# Example of an Split
``` ts
const exampleSplit: Split = {
  id: "split123",
  name: "Push Pull Legs Split with Arms",
  workouts: [
    {
      type: "Push",
      workout: {
        id: "workout123",
        date: "2024-05-14",
        exercises: [
          {
            id: "exercise1",
            name: "Bench Press",
            repetitions: 12,
            sets: 3,
            weight: 60,
            muscleGroups: [ "Chest", "Triceps", "Shoulders" ],
            deviceSetting: "Medium",
            note: "Focus on full range of motion"
          },
          {
            id: "exercise2",
            name: "Overhead Press",
            repetitions: 10,
            sets: 3,
            weight: 40,
            muscleGroups: [ "Shoulders", "Triceps" ],
            deviceSetting: "High",
            note: "Keep core tight"
          }
        ]
      }
    },
    {
      type: "Pull",
      workout: {
        id: "workout124",
        date: "2024-05-16",
        exercises: [
          {
            id: "exercise3",
            name: "Pull Up",
            repetitions: 10,
            sets: 3,
            weight: 0,
            muscleGroups: [ "Back", "Biceps" ],
            note: "Use assistance if needed"
          },
          {
            id: "exercise4",
            name: "Barbell Row",
            repetitions: 12,
            sets: 3,
            weight: 50,
            muscleGroups: [ "Back", "Biceps" ],
            note: "Maintain good posture"
          }
        ]
      }
    },
    {
      type: "Legs",
      workout: {
        id: "workout125",
        date: "2024-05-18",
        exercises: [
          {
            id: "exercise5",
            name: "Squat",
            repetitions: 10,
            sets: 3,
            weight: 80,
            muscleGroups: [ "Quadriceps", "Glutes", "Hamstrings" ],
            deviceSetting: "Low",
            note: "Go below parallel"
          },
          {
            id: "exercise6",
            name: "Leg Press",
            repetitions: 15,
            sets: 3,
            weight: 100,
            muscleGroups: [ "Quadriceps", "Glutes" ],
            note: "Full extension"
          }
        ]
      }
    },
    {
      type: "Arms",
      workout: {
        id: "workout126",
        date: "2024-05-20",
        exercises: [
          {
            id: "exercise7",
            name: "Bicep Curl",
            repetitions: 12,
            sets: 3,
            weight: 15,
            muscleGroups: [ "Biceps" ],
            note: "Full range of motion"
          },
          {
            id: "exercise8",
            name: "Tricep Extension",
            repetitions: 12,
            sets: 3,
            weight: 20,
            muscleGroups: [ "Triceps" ],
            note: "Don't lock out elbows"
          }
        ]
      }
    }
  ]
};

```
