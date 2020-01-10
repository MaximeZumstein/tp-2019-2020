
exports.up = function(knex, Promise) {
    return knex.schema.createTable('sentences', function(t) {
        t.increments('id').unsigned().primary();
        t.dateTime('createdAt').notNull();
        t.dateTime('updatedAt').nullable();
        t.string('sentence').notNull();
        t.string('email').notNull();
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('sentences');
};
