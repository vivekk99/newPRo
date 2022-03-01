
exports.up = function(knex) {
    return knex.schema.createTable('unit_type',function(table){
        table.increments().primary()
        table.string('unit_type',255).notNullable()
        table.timestamp('created_at').defaultTo(knex.fn.now())
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('unit_type')
};
