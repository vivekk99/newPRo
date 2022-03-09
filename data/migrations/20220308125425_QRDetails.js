exports.up = function(knex) {
    return knex.schema.createTable('QRDetails',function(table){
        table.increments('id').primary()
        table.string('title',255).notNullable()
        table.string('value',255).notNullable()
        table.integer('product_id').notNullable()
        table.timestamp('created_at').defaultTo(knex.fn.now())
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('QRDetails')
  };
  