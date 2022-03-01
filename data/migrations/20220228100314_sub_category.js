
exports.up = function(knex) {
    return knex.schema.createTable('sub_category',function(table){
        table.increments().primary()
        table.string('sub_category_name',255).notNullable()
        table.string('image',255).notNullable()
        table.integer('category_id').references('id').inTable('category')
        table.timestamp('created_at').defaultTo(knex.fn.now())
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('sub_category')
};
