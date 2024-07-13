/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    return knex.schema.createTable("notifications", (table) => {
      table.increments("id").primary();
      table.integer("item_id").unsigned().references("id").inTable("inventory").onDelete("CASCADE");
      table.integer("user_id").unsigned().references("id").inTable("user").onDelete("CASCADE");
      table.timestamp("created_at").defaultTo(knex.fn.now());
    });
  }
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  export function down(knex) {
    return knex.schema.dropTable("notifications");
  }
  