exports.up = function(knex, Promise) {
    return knex.schema.table('brands', function(t) {
        t.string('brandName',50);
        t.string('brandImage',50);
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.table('brands', function(t) {
        t.dropColumn('brandName');
        t.dropColumn('brandImage');
    });
};