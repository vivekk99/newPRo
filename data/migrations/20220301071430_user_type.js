exports.up = function(knex) {
    return knex.schema.createTable('user_type',function(table){
        table.increments().primary()
        table.string('types_of_user',255).notNullable()
        table.timestamp('created_at').defaultTo(knex.fn.now())
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('user_type')
  };
  