
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('purchase_mode').del()
    .then(function () {
      // Inserts seed entries
      return knex('purchase_mode').insert([
        {id: 1, purchase_mode: 'cash'},
        {id: 2, purchase_mode: 'creditcard'},
        {id: 3, purchase_mode: 'debitcard'},
        {id: 4, purchase_mode: 'UPI'}
      ]);
    });
};
