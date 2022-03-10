
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('payment_mode').del()
    .then(function () {
      // Inserts seed entries
      return knex('payment_mode').insert([
        {id: 1, payment_mode_name: 'ONLINE'},
        {id: 2, payment_mode_name: 'OFFLINE'}
      ]);
    });
};