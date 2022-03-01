
exports.up = function(knex) {
    return knex.schema.hasTable('users',function(table){
        knex.schema.hasColumn('users', 'password','email').then(function (exists) {
            if (exists) {
              table.dropColumn('users','password','email','username');
            }
          });
    })
};

exports.down = function(knex) {
    return knex.schema.hasTable('users',function(table){
        knex.schema.hasColumn('users', 'password','email').then(function (exists) {
            if (exists) {
              table.dropColumn('users','password','email');
            }
          });
    })
  
};
