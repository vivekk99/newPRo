
exports.up = function(knex) {
    return knex.schema.createTable('device_info',function(table){
        table.increments().primary()
        table.string('device_type',255).notNullable()
        table.string('device_version',255).notNullable()
        table.string('app_version',255).notNullable()
        table.string('device_model',255).notNullable()
        table.timestamp('created_at').defaultTo(knex.fn.now())
    })

};

exports.down = function(knex) {
    return knex.schema.dropTable('device_info')
};
