import { DictionaryCategory, DictionaryTopic } from "$models/dictionary";

const dictionaryCategories = [
  { id: "exercise-library", name: "Exercise Library" },
  { id: "nutrition", name: "Nutrition" },
  { id: "training-programs", name: "Training Programs" },
  { id: "fitness-concepts", name: "Fitness Concepts" },
  { id: "health-wellness", name: "Health and Wellness" },
  { id: "fitness-influencers", name: "Popular Fitness Influencers" },
  { id: "fitness-terminology", name: "Fitness Terminology" },
  { id: "motivation-mindset", name: "Motivation and Mindset" },
  { id: "scientific-research", name: "Scientific Studies and Research" },
  { id: "historical-perspectives", name: "Historical Perspectives" }
];

const dictionaryTopics = [
  // Exercise Library
  { id: "1", category: "exercise-library", title: "Cardio", content: "Cardio exercises increase heart rate and improve cardiovascular health.", references: [] },
  { id: "2", category: "exercise-library", title: "Strength Training", content: "Strength training exercises build muscle strength.", references: [] },
  { id: "3", category: "exercise-library", title: "Flexibility", content: "Flexibility exercises enhance the range of motion of muscles and joints.", references: [] },
  { id: "4", category: "exercise-library", title: "Balance", content: "Balance exercises improve stability and coordination.", references: [] },
  { id: "5", category: "exercise-library", title: "Chest", content: "Exercises targeting the pectoral muscles. Examples include bench press and push-ups.", references: [] },
  { id: "6", category: "exercise-library", title: "Back", content: "Exercises focusing on the latissimus dorsi, traps, and rhomboids. Examples include pull-ups and rows.", references: [] },
  { id: "7", category: "exercise-library", title: "Shoulders", content: "Exercises for the deltoids and rotator cuff. Examples include shoulder press and lateral raises.", references: [] },
  { id: "8", category: "exercise-library", title: "Arms", content: "Exercises for biceps, triceps, and forearms. Examples include curls and tricep extensions.", references: [] },
  { id: "9", category: "exercise-library", title: "Legs", content: "Exercises for quads, hamstrings, calves, and glutes. Examples include squats and lunges.", references: [] },
  { id: "10", category: "exercise-library", title: "Core", content: "Exercises targeting abdominal muscles and lower back. Examples include planks and sit-ups.", references: [] },
  { id: "11", category: "exercise-library", title: "Free Weights", content: "Dumbbells, barbells, kettlebells. Used for a variety of strength training exercises.", references: [] },
  { id: "12", category: "exercise-library", title: "Machines", content: "Gym equipment designed for specific exercises. Examples include leg press machines and cable machines.", references: [] },
  { id: "13", category: "exercise-library", title: "Resistance Bands", content: "Elastic bands used for strength training and flexibility exercises.", references: [] },
  { id: "14", category: "exercise-library", title: "Bodyweight", content: "Exercises performed using one's own body weight as resistance. Examples include push-ups and pull-ups.", references: [] },
  { id: "15", category: "exercise-library", title: "Bench Press", content: "A compound exercise targeting the chest, shoulders, and triceps.", references: [] },
  { id: "16", category: "exercise-library", title: "Squat", content: "A lower-body exercise targeting quads, hamstrings, and glutes.", references: [] },
  { id: "17", category: "exercise-library", title: "Deadlift", content: "A full-body exercise focusing on the back, legs, and core.", references: [] },
  { id: "18", category: "exercise-library", title: "Pull-Up", content: "An upper-body exercise targeting the back and biceps.", references: [] },
  { id: "19", category: "exercise-library", title: "Plank", content: "A core exercise that strengthens the abs, back, and shoulders.", references: [] }
];

export const seedDictionary = async () => {
  await DictionaryCategory.insertMany(dictionaryCategories);
  await DictionaryTopic.insertMany(dictionaryTopics);
};
