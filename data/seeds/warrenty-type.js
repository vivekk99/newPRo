
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('warrenty_types').del()
    .then(function () {
      // Inserts seed entries
      return knex('warrenty_types').insert([
        {id: 1, warrenty_name: 'Days'},
        {id: 2, warrenty_name: 'months'},
        {id: 3, warrenty_name: 'years'}
      ]);
    });
};
