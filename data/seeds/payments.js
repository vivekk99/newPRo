exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('purchase_mode').del()
    .then(function () {
      // Inserts seed entries
      return knex('purchase_mode').insert([
        {id: 1, purchase_mode: 'Cash'},
        {id: 2, purchase_mode: 'Creditcard'},
        {id: 3, purchase_mode: 'Debitcard'},
        {id: 4, purchase_mode: 'UPI'},
        {id: 5, purchase_mode: 'Online'},
        {id: 6, purchase_mode: 'Off-line'}
      ]);
    });
};