
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('unit_type').del()
    .then(function () {
      // Inserts seed entries
      return knex('unit_type').insert([
        {id: 1, unit_type: 'pieses'},
        {id: 2, unit_type: 'dozen'},
        {id: 3, unit_type: 'box'},
        {id: 4, unit_type: 'set'},
      ]);
    });
};
