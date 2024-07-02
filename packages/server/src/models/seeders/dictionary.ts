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
  { id: "19", category: "exercise-library", title: "Plank", content: "A core exercise that strengthens the abs, back, and shoulders.", references: [] },

  // Nutrition
  { id: "20", category: "nutrition", title: "Proteins", content: "Essential for muscle repair and growth. Found in meat, fish, dairy, legumes, and nuts.", references: [] },
  { id: "21", category: "nutrition", title: "Carbohydrates", content: "The body's primary energy source. Found in grains, fruits, vegetables, and legumes.", references: [] },
  { id: "22", category: "nutrition", title: "Fats", content: "Important for energy, hormone production, and cell health. Found in oils, butter, nuts, and avocados.", references: [] },
  { id: "23", category: "nutrition", title: "Vitamins", content: "Essential for various bodily functions. Examples include Vitamin C (immune function) and Vitamin D (bone health).", references: [] },
  { id: "24", category: "nutrition", title: "Minerals", content: "Important for bone health, hydration, and muscle function. Examples include calcium, magnesium, and potassium.", references: [] },
  { id: "25", category: "nutrition", title: "Ketogenic", content: "High-fat, low-carb diet that promotes fat as the primary energy source.", references: [] },
  { id: "26", category: "nutrition", title: "Vegan", content: "Plant-based diet excluding all animal products.", references: [] },
  { id: "27", category: "nutrition", title: "Paleo", content: "Diet based on foods presumed to be available to Paleolithic humans, such as meat, fish, vegetables, and fruits.", references: [] },
  { id: "28", category: "nutrition", title: "Mediterranean", content: "Diet rich in fruits, vegetables, whole grains, olive oil, and lean proteins.", references: [] },
  { id: "29", category: "nutrition", title: "Protein Powders", content: "Supplements to increase protein intake. Commonly used by athletes and bodybuilders.", references: [] },
  { id: "30", category: "nutrition", title: "Creatine", content: "Enhances muscle mass and performance.", references: [] },
  { id: "31", category: "nutrition", title: "Multivitamins", content: "Supplements providing a range of essential vitamins and minerals.", references: [] },
  { id: "32", category: "nutrition", title: "Omega-3 Fatty Acids", content: "Important for heart health, found in fish oil and flaxseed oil.", references: [] },

  // Training Programs
  { id: "33", category: "training-programs", title: "Hypertrophy", content: "Focuses on increasing muscle size through higher reps and moderate weights.", references: [] },
  { id: "34", category: "training-programs", title: "Strength", content: "Aims to increase overall strength using lower reps and heavier weights.", references: [] },
  { id: "35", category: "training-programs", title: "Endurance", content: "Focuses on improving muscular endurance with higher reps and lower weights.", references: [] },
  { id: "36", category: "training-programs", title: "Flexibility", content: "Aims to enhance flexibility through stretching exercises and yoga.", references: [] },
  { id: "37", category: "training-programs", title: "PPL (Push, Pull, Legs)", content: "A split routine that divides workouts into push (chest, shoulders, triceps), pull (back, biceps), and legs.", references: [] },
  { id: "38", category: "training-programs", title: "Upper/Lower Split", content: "Alternates between upper-body and lower-body workouts.", references: [] },
  { id: "39", category: "training-programs", title: "Full Body Workouts", content: "Engages all major muscle groups in a single workout session.", references: [] },
  { id: "40", category: "training-programs", title: "HIIT (High-Intensity Interval Training)", content: "Combines short bursts of intense exercise with periods of rest or lower-intensity exercise.", references: [] },

  // Fitness Concepts
  { id: "41", category: "fitness-concepts", title: "Progressive Overload", content: "Gradually increasing the weight, frequency, or number of repetitions in workouts to continually challenge muscles.", references: [] },
  { id: "42", category: "fitness-concepts", title: "Muscle Hypertrophy", content: "The process of increasing muscle size through exercise.", references: [] },
  { id: "43", category: "fitness-concepts", title: "Cardiorespiratory Fitness", content: "The efficiency with which the body delivers oxygen and nutrients needed for muscular activity.", references: [] },
  { id: "44", category: "fitness-concepts", title: "Periodization", content: "Systematically varying training intensity and volume to maximize performance gains.", references: [] },
  { id: "45", category: "fitness-concepts", title: "VO2 Max", content: "The maximum rate of oxygen consumption measured during incremental exercise.", references: [] },
  { id: "46", category: "fitness-concepts", title: "Lactic Threshold", content: "The exercise intensity at which lactate starts to accumulate in the blood.", references: [] },

  // Health and Wellness
  { id: "47", category: "health-wellness", title: "Stress Management", content: "Techniques such as meditation, deep breathing, and exercise to reduce stress.", references: [] },
  { id: "48", category: "health-wellness", title: "Mindfulness", content: "Practices like meditation and yoga to promote mental clarity and relaxation.", references: [] },
  { id: "49", category: "health-wellness", title: "Yoga", content: "Combines physical postures, breathing exercises, and meditation to promote overall health.", references: [] },
  { id: "50", category: "health-wellness", title: "Sleep", content: "Essential for muscle recovery, hormone balance, and overall health.", references: [] },
  { id: "51", category: "health-wellness", title: "Stretching", content: "Improves flexibility and reduces muscle tension.", references: [] },
  { id: "52", category: "health-wellness", title: "Foam Rolling", content: "Self-myofascial release technique to alleviate muscle tightness.", references: [] },
  { id: "53", category: "health-wellness", title: "Proper Form", content: "Using correct techniques during exercises to prevent injuries.", references: [] },
  { id: "54", category: "health-wellness", title: "Warm-Up and Cool-Down", content: "Preparing the body for exercise and aiding recovery afterward.", references: [] },
  { id: "55", category: "health-wellness", title: "Common Injuries and Treatments", content: "Information on preventing and treating common fitness injuries like sprains and strains.", references: [] },

  // Popular Fitness Influencers
  { id: "56", category: "fitness-influencers", title: "Strength Training Influencer", content: "Bio and key teachings of a popular strength training influencer.", references: [ "https://strength-influencer.com" ] },
  { id: "57", category: "fitness-influencers", title: "Nutrition Expert Influencer", content: "Bio and key teachings of a popular nutrition expert.", references: [ "https://nutrition-expert.com" ] },
  { id: "58", category: "fitness-influencers", title: "Cardio and Endurance Influencer", content: "Bio and key teachings of a popular cardio and endurance influencer.", references: [ "https://cardio-influencer.com" ] },
  { id: "59", category: "fitness-influencers", title: "Yoga and Flexibility Influencer", content: "Bio and key teachings of a popular yoga and flexibility influencer.", references: [ "https://yoga-influencer.com" ] },

  // Fitness Terminology
  { id: "60", category: "fitness-terminology", title: "Reps and Sets", content: "Reps (repetitions) are the number of times you perform an exercise. Sets are groups of reps.", references: [] },
  { id: "61", category: "fitness-terminology", title: "Supersets", content: "Performing two exercises back-to-back without rest.", references: [] },
  { id: "62", category: "fitness-terminology", title: "AMRAP (As Many Reps As Possible)", content: "Completing as many reps as possible in a given time.", references: [] },
  { id: "63", category: "fitness-terminology", title: "DOMS (Delayed Onset Muscle Soreness)", content: "Muscle pain that occurs hours to days after exercise.", references: [] },
  { id: "64", category: "fitness-terminology", title: "Plyometrics", content: "Explosive exercises to improve power and speed.", references: [] },
  { id: "65", category: "fitness-terminology", title: "Isometric vs. Isotonic Exercises", content: "Isometric exercises involve holding a position under tension without movement, while isotonic exercises involve movement.", references: [] },
  { id: "66", category: "fitness-terminology", title: "Eccentric and Concentric Movements", content: "Eccentric is the lengthening of a muscle under tension, and concentric is the shortening of a muscle.", references: [] },

  // Motivation and Mindset
  { id: "67", category: "motivation-mindset", title: "SMART Goals", content: "Specific, Measurable, Achievable, Relevant, Time-bound goals.", references: [] },
  { id: "68", category: "motivation-mindset", title: "Long-Term vs. Short-Term Goals", content: "Differentiating and planning for immediate and future fitness objectives.", references: [] },
  { id: "69", category: "motivation-mindset", title: "Fitness Journals", content: "Recording workouts, nutrition, and progress.", references: [] },
  { id: "70", category: "motivation-mindset", title: "Apps and Tools", content: "Digital tools to track and analyze fitness progress.", references: [] },
  { id: "71", category: "motivation-mindset", title: "Overcoming Plateaus", content: "Techniques to break through fitness plateaus.", references: [] },
  { id: "72", category: "motivation-mindset", title: "Mental Toughness", content: "Developing resilience and perseverance in training.", references: [] },

  // Scientific Studies and Research
  { id: "73", category: "scientific-research", title: "Landmark Research in Exercise Science", content: "Significant studies that shaped current fitness knowledge.", references: [] },
  { id: "74", category: "scientific-research", title: "Nutrition Studies", content: "Research on diet and its impact on health and performance.", references: [] },
  { id: "75", category: "scientific-research", title: "Latest Trends", content: "Current trends in fitness research.", references: [] },
  { id: "76", category: "scientific-research", title: "Emerging Topics", content: "New and upcoming areas of study in fitness and nutrition.", references: [] },

  // Historical Perspectives
  { id: "77", category: "historical-perspectives", title: "History of Exercise", content: "How fitness practices have changed over time.", references: [] },
  { id: "78", category: "historical-perspectives", title: "Ancient Exercise Practices", content: "Historical methods of exercise and their origins.", references: [] },
  { id: "79", category: "historical-perspectives", title: "Notable Figures in Fitness", content: "Influential individuals in the history of fitness and their contributions.", references: [] }
];

export const seedDictionary = async () => {
  await DictionaryCategory.insertMany(dictionaryCategories);
  await DictionaryTopic.insertMany(dictionaryTopics);
};
