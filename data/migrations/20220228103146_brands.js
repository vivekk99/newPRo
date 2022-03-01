
exports.up = function(knex) {
    return knex.schema.createTable('brands_details',function(table){
        table.increments().primary()
        table.string('brand_name',255).notNullable()
        table.string('brand_logo',255).notNullable()
        table.timestamp('created_at').defaultTo(knex.fn.now())
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('brands_details')
};
