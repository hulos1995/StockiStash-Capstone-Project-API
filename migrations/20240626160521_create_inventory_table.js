/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable("inventory", (table) => {
    table.increments("id").primary();
    table
      .integer("user_id")
      .unsigned()
      .references("user.id")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    table.string("item_name").notNullable();
    table.string("description").notNullable();
    table.string("image").notNullable();
    table.string("status").notNullable();
    table.integer("quantity").notNullable();
    table.string("link").notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table
      .timestamp("updated_at")
      .defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
  });
}
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable("inventory");
}
