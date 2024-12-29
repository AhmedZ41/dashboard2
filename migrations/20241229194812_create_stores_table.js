exports.up = function(knex) {
    return knex.schema.createTable('stores', table => {
        table.increments('id').primary(); // Auto-incrementing ID
        table.string('name').notNullable(); // Store name
        table.string('location').notNullable(); // Store location
        table.integer('category_id').unsigned().references('id').inTable('categories'); // Foreign key
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('stores');
};
