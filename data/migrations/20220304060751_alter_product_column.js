exports.up = function(knex, Promise) {
    return knex.schema.alterTable('product_details', function(t) {
        t.integer('category_id').references('id').inTable('category') 
        t.integer('sub_category_id').references('id').inTable('sub_category')   
        t.integer('customer_care_id').references('id').inTable('customer_care_details')
        t.integer('warrenty_type_id').references('id').inTable('warrenty_types')     
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.alterTable('product_details', function(t) { 
        t.integer('category_id').references('id').inTable('category') 
        t.integer('sub_category_id').references('id').inTable('sub_category')   
        t.integer('warrenty_type_id').references('id').inTable('warrenty_types') 
        t.integer('customer_care_id').references('id').inTable('customer_care_details')    
    });
  };
  