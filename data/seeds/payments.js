exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('purchase_mode').del()
    .then(function () {
      // Inserts seed entries
      return knex('purchase_mode').insert([
        {id: 5, purchase_mode: 'Cash'},
        {id: 6, purchase_mode: 'Creditcard'},
        {id: 7, purchase_mode: 'Debitcard'},
        {id: 8, purchase_mode: 'UPI'},
        {id: 9, purchase_mode: 'Online'},
        {id: 10, purchase_mode: 'Off-line'}
      ]);
    });
};
