
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user_type').del()
    .then(function () {
      // Inserts seed entries
      return knex('user_type').insert([
        {id: 1, types_of_user: 'family'},
        {id: 2, types_of_user: 'friends'},
        {id: 3, types_of_user: 'relation'}
      ]);
    });
};
