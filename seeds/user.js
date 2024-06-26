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
  ]);
}
