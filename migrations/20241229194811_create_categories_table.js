exports.up = function(knex) {
    return knex.schema.createTable('categories', table => {
        table.increments('id').primary(); // Auto-incrementing ID
        table.string('name').notNullable(); // Category name
        table.text('description'); // Category description
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('categories');
};
