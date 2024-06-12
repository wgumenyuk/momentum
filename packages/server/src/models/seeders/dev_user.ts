import { seeder } from "../../internal/seeder.js";
import { User } from "../user.js";

const userSeeds = [
  {
    id: "test_user",
    email: "testuser@example.com",
    displayName: "Test User",
    weight: 70, // Example weight
    password: "securepassword123",
    isPrivate: false,
    createdAt: Date.now()
  }
];

/**
  Seeding process for the `User` model.
*/
export const seedUsers = () => {
  return seeder(User, userSeeds);
};
