/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex("grit").del();
  await knex("grit").insert([
    {
      inventory_id: 1,
      grit: 100,
      quantity: 400,
      description: "Rough grit, used to remove cutter marks on mould",
    },
    {
      inventory_id: 1,
      grit: 240,
      quantity: 150,
      description: "Medium grit, used to remove 100 grits marks",
    },
    {
      inventory_id: 1,
      grit: 320,
      quantity: 150,
      description: "Fine grit, used to remove 240 grits marks",
    },
    {
      inventory_id: 1,
      grit: 600,
      quantity: 300,
      description: "Very fine grit, used to prep for high polish",
    },
    {
      inventory_id: 2,
      grit: 100,
      quantity: 400,
      description: "Rough grit, used to remove cutter marks on mould",
    },
    {
      inventory_id: 2,
      grit: 240,
      quantity: 150,
      description: "Medium grit, used to remove 100 grits marks",
    },
    {
      inventory_id: 2,
      grit: 320,
      quantity: 150,
      description: "Fine grit, used to remove 240 grits marks",
    },
    {
      inventory_id: 2,
      grit: 600,
      quantity: 300,
      description: "Very fine grit, used to prep for high polish",
    },
    {
      inventory_id: 21,
      grit: 100,
      quantity: 400,
      description: "Rough grit, used to remove cutter marks on mould",
    },
    {
      inventory_id: 21,
      grit: 240,
      quantity: 150,
      description: "Medium grit, used to remove 100 grits marks",
    },
    {
      inventory_id: 21,
      grit: 320,
      quantity: 150,
      description: "Fine grit, used to remove 240 grits marks",
    },
    {
      inventory_id: 21,
      grit: 600,
      quantity: 300,
      description: "Very fine grit, used to prep for high polish",
    },
    {
      inventory_id: 24,
      grit: 100,
      quantity: 400,
      description: "Rough grit, used to remove cutter marks on mould",
    },
    {
      inventory_id: 24,
      grit: 240,
      quantity: 150,
      description: "Medium grit, used to remove 100 grits marks",
    },
    {
      inventory_id: 24,
      grit: 320,
      quantity: 150,
      description: "Fine grit, used to remove 240 grits marks",
    },
    {
      inventory_id: 24,
      grit: 600,
      quantity: 300,
      description: "Very fine grit, used to prep for high polish",
    },
    {
      inventory_id: 25,
      grit: 100,
      quantity: 400,
      description: "Rough grit, used to remove cutter marks on mould",
    },
    {
      inventory_id: 25,
      grit: 240,
      quantity: 150,
      description: "Medium grit, used to remove 100 grits marks",
    },
    {
      inventory_id: 25,
      grit: 320,
      quantity: 150,
      description: "Fine grit, used to remove 240 grits marks",
    },
    {
      inventory_id: 25,
      grit: 600,
      quantity: 300,
      description: "Very fine grit, used to prep for high polish",
    },
    {
      inventory_id: 26,
      grit: 100,
      quantity: 400,
      description: "Rough grit, used to remove cutter marks on mould",
    },
    {
      inventory_id: 26,
      grit: 240,
      quantity: 150,
      description: "Medium grit, used to remove 100 grits marks",
    },
    {
      inventory_id: 26,
      grit: 320,
      quantity: 150,
      description: "Fine grit, used to remove 240 grits marks",
    },
    {
      inventory_id: 26,
      grit: 600,
      quantity: 300,
      description: "Very fine grit, used to prep for high polish",
    },
  ]);
}
