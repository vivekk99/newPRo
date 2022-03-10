
exports.up = function(knex) {
    return knex.schema.createTable('product_table',function(table){
        table.increments('id').primary()
        table.string('product_name',255).notNullable()
        table.string('product_image',255).notNullable()
        table.integer('user_id').references('id').inTable('user_info')
        table.integer('brand_id').references('id').inTable('brands_details')
        table.string('products_serial_no',100).notNullable()
        table.string('products_model_no',100).notNullable()
        table.string('date_of_purchase',100).notNullable()
        table.integer('warrenty_id').references('id').inTable('warrenty')
        table.integer('unit_id').references('id').inTable('unit_type')
        table.string('quantity',255).notNullable()
        table.string('price',255).notNullable()
        table.string('scanned_image',255).notNullable()
        table.string('invoice_image',255).notNullable()
        table.integer('user_type_id').references('id').inTable('user_type')
        table.integer('purchase_mode_id').references('id').inTable('purchase_mode')
        table.integer('category_id').references('id').inTable('category') 
        table.integer('sub_category_id').references('id').inTable('sub_category')   
        table.integer('customer_care_id').references('id').inTable('customer_care_details')
        table.integer('warrenty_type_id').references('id').inTable('warrenty_types') 
        table.integer('payment_mode_id').references('id').inTable('payment_mode')
        table.string('duration',255).notNullable()
        table.timestamp('created_at').defaultTo(knex.fn.now())
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('product_table')
  };
