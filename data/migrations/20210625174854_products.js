exports.up = function(knex) {
    return knex.schema.createTable('products',function(table){
        table.increments().primary()
        table.string('productName',255).notNullable()
        table.string('productImage',255).notNullable()
        table.string('products_category_id',255).notNullable()
        table.string('gstNumber',255).notNullable()
        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('updated_at').defaultTo(knex.fn.now())
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('products')
  };