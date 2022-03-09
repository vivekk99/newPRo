
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('QRDetails').del()
    .then(function () {
      // Inserts seed entries
      return knex('QRDetails').insert([
        {id: 1, title: 'serial no',value:"new",product_id:2},
        {id: 2, title: 'tag',value:"new",product_id:2},
        {id: 3, title: 'type',value:"new",product_id:2}
      ]);
    });
};
