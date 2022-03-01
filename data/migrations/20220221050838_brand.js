exports.up = function(knex) {
    return knex.schema.createTable('brands',function(table){
        table.increments().primary()
        table.string('location',255).notNullable()
        table.string('mobile',10).notNullable()
        table.string('email',30).notNullable()
        table.timestamp('created_at').defaultTo(knex.fn.now())
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('brands')
};
