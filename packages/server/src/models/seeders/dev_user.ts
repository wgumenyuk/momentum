import { seeder } from "$internal/seeder";
import { hashPassword } from "$services/crypto";
import { User } from "$models/user";

// Types
import type { User as UserType } from "$models/user.js";

const userSeeds: UserType[] = [
  {
    id: "test_user",
    email: "testuser@example.com",
    displayName: "Test User",
    weight: 70,
    password: await hashPassword("securepassword123"),
    isPrivate: false,
    createdAt: Date.now()
  } 
];

/**
  Seeding process for the `User` model.
*/
export const seedUsers = async () => {
  return seeder(User, userSeeds);
};
