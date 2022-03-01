
exports.up = function(knex) {
    return knex.schema.createTable('customers',function(table){
        table.increments().primary()
        table.string('username',25).notNullable()
        table.string('email',30).notNullable()
        table.string('password',50).notNullable()
        table.string('mobile',10).notNullable()
        table.string('token',10).notNullable()
        table.integer('role_id').references('id').inTable('roles')
        table.integer('device_id').references('id').inTable('device_info')
        table.timestamp('created_at').defaultTo(knex.fn.now())
      
        })
};

exports.down = function(knex) {
    return knex.schema.dropTable('customers')
};
