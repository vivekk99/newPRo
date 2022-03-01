
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('sub_category').del()
    .then(function () {
      // Inserts seed entries
      return knex('sub_category').insert([
        {id: 1, sub_category_name: 'mobile',image:"",category_id:1},
        {id: 2, sub_category_name: 'computer',image:"",category_id:1},
        {id: 3, sub_category_name: 'UPS',image:"",category_id:1},
        {id: 4, sub_category_name: 'mobile',image:"",category_id:2},
        {id: 5, sub_category_name: 'computer',image:"",category_id:2},
        {id: 6, sub_category_name: 'UPS',image:"",category_id:2},
        {id: 7, sub_category_name: 'mobile',image:"",category_id:3},
        {id: 8, sub_category_name: 'computer',image:"",category_id:3},
        {id: 9, sub_category_name: 'UPS',image:"",category_id:3}
      ]);
    });
};
