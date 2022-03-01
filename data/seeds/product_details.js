
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('product_details').del()
    .then(function () {
      // Inserts seed entries
      return knex('product_details').insert([
        {id: 1, product_name: 'laptop',product_image:"",user_id:1,brand_id:1,products_serial_no:08965,products_model_no:"az890",date_of_purchase:"22.3.2020",warrenty_id:1,unit_id:1,quantity:5,price:10000,sacanned_image:"",invoice_image:"",user_type_id:1,purchase_mode_id:1},
        {id: 2, product_name: 'tab',product_image:"",user_id:2,brand_id:2,products_serial_no:08946,products_model_no:"kl890",date_of_purchase:"10.4.2021",warrenty_id:2,unit_id:1,quantity:2,price:15000,sacanned_image:"",invoice_image:"",user_type_id:2,purchase_mode_id:2},
      ]);
    });
};
