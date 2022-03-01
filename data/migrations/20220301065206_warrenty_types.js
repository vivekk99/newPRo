exports.up = function(knex) {
    return knex.schema.createTable('warrenty_types',function(table){
        table.increments().primary()
        table.string('warrenty_name',255).notNullable()
        table.timestamp('created_at').defaultTo(knex.fn.now())
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('warrenty_types')
  };
  