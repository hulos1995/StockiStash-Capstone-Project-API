/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable("grit", (table) => {
    table.increments("id").primary();
    table
      .integer("inventory_id")
      .unsigned()
      .references("id")
      .inTable("inventory")
      .onDelete("CASCADE");
    table.integer("grit").notNullable();
    table.integer("quantity").notNullable();
    table.string("description").notNullable();
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable("grit");
}
