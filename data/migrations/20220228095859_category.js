
exports.up = function(knex) {
    return knex.schema.createTable('category',function(table){
        table.increments().primary()
        table.string('category_name',255).notNullable()
        table.string('icon',255).notNullable()
        table.timestamp('created_at').defaultTo(knex.fn.now())
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('category')
};
