import { DictionaryCategory } from "$models/dictionary";

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

export const seedDictionary = async () => {
  await DictionaryCategory.insertMany(dictionaryCategories);
};
