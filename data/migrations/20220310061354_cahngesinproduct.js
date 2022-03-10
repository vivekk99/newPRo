exports.up = function(knex, Promise) {
    return knex.schema.alterTable('product_details', function(t) {
        t.integer('payment_mode_id').references('id').inTable('payment_mode') 
        t.string('duration',255)  
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.alterTable('product_details', function(t) { 
        t.integer('warrenty_type_id').references('id').inTable('warrenty_types')
        t.string('duration',255)   
    });
  };