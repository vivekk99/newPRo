
exports.up = function(knex) {
    return knex.schema.createTable('purchase_mode',function(table){
        table.increments().primary()
        table.string('purchase_mode',255).notNullable()
        table.timestamp('created_at').defaultTo(knex.fn.now())
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('purchase_mode')
};
