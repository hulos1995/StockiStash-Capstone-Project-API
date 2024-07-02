import bcrypt from "bcryptjs";
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex("user").del();
  await knex("user").insert([
    {
      id: 1,
      user_name: "root",
      password: bcrypt.hashSync("rootroot", 10),
      user_role: "Admin",
    },
    {
      id: 2,
      user_name: "polish",
      password: bcrypt.hashSync("polish", 10),
      user_role: "Polisher",
    },
    {
      id: 3,
      user_name: "spotter",
      password: bcrypt.hashSync("spotter", 10),
      user_role: "Spotter",
    },
  ]);
}
