
exports.seed = function(knex) {
 // Deletes ALL existing entries
  return knex('category').del()
    .then(function () {
      // Inserts seed entries
      return knex('category').insert([
        {id: 1, category_name: 'house',icon:""},
        {id: 2, category_name: 'personal',icon:""},
        {id: 3, category_name: 'business',icon:""}
      ]);
    });
};
