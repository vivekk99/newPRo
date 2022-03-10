
exports.up = function(knex) {
    return knex.schema.createTable('payment_mode',function(table){
        table.increments('id').primary()
        table.string('payment_mode_name',255).notNullable()
        table.timestamp('created_at').defaultTo(knex.fn.now())
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('payment_mode')
  };
  