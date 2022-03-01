
exports.up = function(knex) {
    return knex.schema.createTable('user_info',function(table){
     table.increments().primary()
     table.string('first_name',50).notNullable()
     table.string('second_name',50).notNullable()
     table.string('email_address',50).notNullable()
     table.string('contact_no',50).notNullable()
     table.string('device_information',100).notNullable()
     table.string('app_version',100).notNullable()
     table.string('firebase_token',100).notNullable()
     table.integer('role_id').references('id').inTable('roles')
     table.string('user_location',100).notNullable()
     table.string('last_seen',100).notNullable()
     table.timestamp('created_at').defaultTo(knex.fn.now())
   
     })
   };
   
   exports.down = function(knex) {
     return knex.schema.dropTable('user_info')
   };
   