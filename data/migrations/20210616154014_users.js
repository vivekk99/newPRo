
exports.up = function(knex) {
 return knex.schema.createTable('users',function(table){
  table.increments().primary()
  table.string('username',25).notNullable()
  table.string('email',30).notNullable()
  table.string('password',50).notNullable()
  table.string('mobile',10).notNullable()
  table.integer('role_id').references('id').inTable('roles')
  table.timestamp('created_at').defaultTo(knex.fn.now())

  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('users')
};
