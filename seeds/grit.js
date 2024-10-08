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
      image: "https://toolsbao.s3.us-east-2.amazonaws.com/images/emery_strip.png",
    },
    {
      inventory_id: 1,
      grit: 240,
      quantity: 150,
      description: "Medium grit, used to remove 100 grits marks",
      image: "https://toolsbao.s3.us-east-2.amazonaws.com/images/emery_strip.png",
    },
    {
      inventory_id: 1,
      grit: 320,
      quantity: 150,
      description: "Fine grit, used to remove 240 grits marks",
      image: "https://toolsbao.s3.us-east-2.amazonaws.com/images/emery_strip.png",
    },
    {
      inventory_id: 1,
      grit: 600,
      quantity: 300,
      description: "Very fine grit, used to prep for high polish",
      image: "https://toolsbao.s3.us-east-2.amazonaws.com/images/emery_strip.png",
    },
    {
      inventory_id: 2,
      grit: 100,
      quantity: 10,
      description: "Rough grit, used to remove cutter marks on mould",
      image: "https://toolsbao.s3.us-east-2.amazonaws.com/images/bench-roll.png",
    },
    {
      inventory_id: 2,
      grit: 240,
      quantity: 20,
      description: "Medium grit, used to remove 100 grits marks",
      image: "https://toolsbao.s3.us-east-2.amazonaws.com/images/bench-roll.png",
    },
    {
      inventory_id: 2,
      grit: 320,
      quantity: 10,
      description: "Fine grit, used to remove 240 grits marks",
      image: "https://toolsbao.s3.us-east-2.amazonaws.com/images/bench-roll.png",
    },
    {
      inventory_id: 2,
      grit: 600,
      quantity: 10,
      description: "Very fine grit, used to prep for high polish",
      image: "https://toolsbao.s3.us-east-2.amazonaws.com/images/bench-roll.png",
    },
    {
      inventory_id: 4,
      grit: 100,
      quantity: 20,
      description: "Rough grit, used to remove cutter marks on mould",
      image: "https://toolsbao.s3.us-east-2.amazonaws.com/images/AM8-HardStone.png",
    },
    {
      inventory_id: 4,
      grit: 240,
      quantity: 20,
      description: "Medium grit, used to remove 100 grits marks",
      image: "https://toolsbao.s3.us-east-2.amazonaws.com/images/AM8-HardStone.png",
    },
    {
      inventory_id: 4,
      grit: 320,
      quantity: 20,
      description: "Fine grit, used to remove 240 grits marks",
      image: "https://toolsbao.s3.us-east-2.amazonaws.com/images/AM8-HardStone.png",
    },
    {
      inventory_id: 4,
      grit: 600,
      quantity: 40,
      description: "Very fine grit, used to prep for high polish",
      image: "https://toolsbao.s3.us-east-2.amazonaws.com/images/AM8-HardStone.png",
    },
    {
      inventory_id: 21,
      grit: 100,
      quantity: 50,
      description: "Rough grit, used to remove cutter marks on mould",
      image: "https://toolsbao.s3.us-east-2.amazonaws.com/images/psa-emery.png",
    },
    {
      inventory_id: 21,
      grit: 240,
      quantity: 50,
      description: "Medium grit, used to remove 100 grits marks",
      image: "https://toolsbao.s3.us-east-2.amazonaws.com/images/psa-emery.png",
    },
    {
      inventory_id: 21,
      grit: 320,
      quantity: 100,
      description: "Fine grit, used to remove 240 grits marks",
      image: "https://toolsbao.s3.us-east-2.amazonaws.com/images/psa-emery.png",
    },
    {
      inventory_id: 21,
      grit: 600,
      quantity: 100,
      description: "Very fine grit, used to prep for high polish",
      image: "https://toolsbao.s3.us-east-2.amazonaws.com/images/psa-emery.png",
    },
    {
      inventory_id: 24,
      grit: 100,
      quantity: 0,
      description: "Rough grit, used to remove cutter marks on mould",
      image: "https://toolsbao.s3.us-east-2.amazonaws.com/images/super-stone.png",
    },
    {
      inventory_id: 24,
      grit: 240,
      quantity: 0,
      description: "Medium grit, used to remove 100 grits marks",
      image: "https://toolsbao.s3.us-east-2.amazonaws.com/images/super-stone.png",
    },
    {
      inventory_id: 24,
      grit: 320,
      quantity: 0,
      description: "Fine grit, used to remove 240 grits marks",
      image: "https://toolsbao.s3.us-east-2.amazonaws.com/images/super-stone.png",
    },
    {
      inventory_id: 24,
      grit: 600,
      quantity: 0,
      description: "Very fine grit, used to prep for high polish",
      image: "https://toolsbao.s3.us-east-2.amazonaws.com/images/super-stone.png",
    },
    {
      inventory_id: 25,
      grit: 100,
      quantity: 0,
      description: "Rough grit, used to remove cutter marks on mould",
      image: "https://toolsbao.s3.us-east-2.amazonaws.com/images/T2-WetStone.png",
    },
    {
      inventory_id: 25,
      grit: 240,
      quantity: 0,
      description: "Medium grit, used to remove 100 grits marks",
      image: "https://toolsbao.s3.us-east-2.amazonaws.com/images/T2-WetStone.png",
    },
    {
      inventory_id: 25,
      grit: 320,
      quantity: 0,
      description: "Fine grit, used to remove 240 grits marks",
      image: "https://toolsbao.s3.us-east-2.amazonaws.com/images/T2-WetStone.png",
    },
    {
      inventory_id: 25,
      grit: 600,
      quantity: 0,
      description: "Very fine grit, used to prep for high polish",
      image: "https://toolsbao.s3.us-east-2.amazonaws.com/images/T2-WetStone.png",
    },
    {
      inventory_id: 26,
      grit: 100,
      quantity: 25,
      description: "Rough grit, used to remove cutter marks on mould",
      image: "https://toolsbao.s3.us-east-2.amazonaws.com/images/T4-WetStone.png",
    },
    {
      inventory_id: 26,
      grit: 240,
      quantity: 25,
      description: "Medium grit, used to remove 100 grits marks",
      image: "https://toolsbao.s3.us-east-2.amazonaws.com/images/T4-WetStone.png",
    },
    {
      inventory_id: 26,
      grit: 320,
      quantity: 25,
      description: "Fine grit, used to remove 240 grits marks",
      image: "https://toolsbao.s3.us-east-2.amazonaws.com/images/T4-WetStone.png",
    },
    {
      inventory_id: 26,
      grit: 600,
      quantity: 25,
      description: "Very fine grit, used to prep for high polish",
      image: "https://toolsbao.s3.us-east-2.amazonaws.com/images/T4-WetStone.png",
    },
  ]);
}
