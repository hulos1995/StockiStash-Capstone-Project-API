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
      first_name: "Bao",
      last_name: "Bao",
      user_name: "root",
      password: bcrypt.hashSync("rootroot", 10),
      user_role: "Admin",
    },
    {
      id: 2,
      first_name: "Bao",
      last_name: "Bao",
      user_name: "polish",
      password: bcrypt.hashSync("polish", 10),
      user_role: "Polisher",
    },
    {
      id: 3,
      first_name: "Bao",
      last_name: "Bao",
      user_name: "spotter",
      password: bcrypt.hashSync("spotter", 10),
      user_role: "Spotter",
    },
  ]);
}
