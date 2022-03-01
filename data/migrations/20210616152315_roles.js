
exports.up = function(knex) {
  return knex.schema.createTable('roles',function(table){
      table.increments().primary()
      table.string('roleName',255).notNullable()
      table.timestamp('created_at').defaultTo(knex.fn.now())
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('roles')
};
