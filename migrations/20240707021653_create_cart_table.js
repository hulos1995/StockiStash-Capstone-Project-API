/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('cart', (table) => {
    table.increments('id').primary();
    table.integer('user_id').unsigned().references('id').inTable('user').onDelete('CASCADE').onUpdate('CASCADE');
    table.integer('inventory_id').unsigned().references('id').inTable('inventory').onDelete('CASCADE').onUpdate('CASCADE');
    table.integer('quantity').notNullable().defaultTo(1);
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('cart');
}
