exports.up = function(knex) {
    return knex.schema.createTable('products', table => {
        table.increments('id').primary(); // Auto-incrementing ID
        table.string('name').notNullable(); // Product name
        table.integer('store_id').unsigned().references('id').inTable('stores'); // Foreign key
        table.integer('category_id').unsigned().references('id').inTable('categories'); // Foreign key
        table.decimal('price', 10, 2).notNullable(); // Product price
        table.integer('stock').notNullable(); // Product stock
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('products');
};
