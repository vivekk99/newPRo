
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('warrenty').del()
    .then(function () {
      // Inserts seed entries
      return knex('warrenty').insert([
        {id: 1, warrenty_type_id: '1',duration:6},
        {id: 2, warrenty_type_id: '2',duration:1},
        {id: 3, warrenty_type_id: '3',duration:5}
      ]);
    });
};
