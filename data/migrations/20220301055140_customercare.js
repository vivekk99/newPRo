
exports.up = function(knex) {
    return knex.schema.createTable('customer_care_details',function(table){
        table.increments().primary()
        table.integer('brand_id').references('id').inTable('brands_details')
        table.string('contact_no',255).notNullable()
        table.string('email_address',255).notNullable()
        table.string('whatsapp',255).notNullable()
        table.string('facebook',255).notNullable()
        table.string('address',255).notNullable()
        table.timestamp('created_at').defaultTo(knex.fn.now())
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('customer_care_details')
};