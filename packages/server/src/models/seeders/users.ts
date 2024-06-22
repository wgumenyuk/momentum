import { seeder } from "$internal/seeder";
import { hashPassword } from "$services/crypto";
import { User } from "$models/user";

// Types
import type { User as UserType } from "$models/user.js";

const userSeeds: UserType[] = [
  {
    id: "test_user_1",
    email: "u1@test.com",
    displayName: "Test User 1",
    weight: 70,
    password: await hashPassword("123"),
    isPrivate: false,
    createdAt: Date.now()
  } ,
  {
    id: "test_user_2",
    email: "u2@test.com",
    displayName: "Test User 2",
    weight: 80,
    password: await hashPassword("123"),
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
