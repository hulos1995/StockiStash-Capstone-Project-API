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
      password: "rootroot",
      user_role: "Admin",
    },
    {
      id: 2,
      user_name: "polish",
      password: "polish",
      user_role: "Polisher",
    },
    {
      id: 3,
      user_name: "spotter",
      password: "spotter",
      user_role: "Spotter",
    },
  ]);
}
