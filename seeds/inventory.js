/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex("inventory").del();
  await knex("inventory").insert([
    {
      id: 1,
      item_name: "Emery Strip",
      description: "rootroot",
      image: "http://localhost:8080/images/emery_strip.png",
      quantity: "500",
      status: "In Stock",
    },
  ]);
}
