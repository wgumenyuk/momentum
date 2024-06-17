import { seeder } from "../../internal/seeder.js";
import { User } from "../user.js";
import { hashPassword } from "$services/crypto";

const userSeeds = async () => [
  {
    id: "test_user",
    email: "testuser@example.com",
    displayName: "Test User",
    weight: 70, // Example weight
    password: await hashPassword("securepassword123"),  // Using existing hashPassword function
    isPrivate: false,
    createdAt: Date.now()
  }
];

/**
  Seeding process for the `User` model.
*/
export const seedUsers = async () => {
  const seeds = await userSeeds();
  return seeder(User, seeds);
};
