exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('product_details').del()
    .then(function () {
      // Inserts seed entries
      return knex('product_details').insert([
        {id: 1, product_name: 'Laptop',product_image:"https://pngimg.com/uploads/tablet/tablet_PNG8567.png",user_id:1,brand_id:1,products_serial_no:08965,products_model_no:"az890",date_of_purchase:"22.3.2020",warrenty_id:1,unit_id:1,quantity:5,price:10000,sacanned_image:"",invoice_image:"",user_type_id:1,purchase_mode_id:1,category_id:1,warrenty_type_id:1,sub_category_id:1},
        {id: 2, product_name: 'Tab',product_image:"https://w7.pngwing.com/pngs/487/248/png-transparent-laptop-computer-icons-laptop-electronics-gadget-image-file-formats.png",user_id:1,brand_id:2,products_serial_no:08946,products_model_no:"kl890",date_of_purchase:"10.4.2021",warrenty_id:2,unit_id:1,quantity:2,price:15000,sacanned_image:"",invoice_image:"",user_type_id:2,purchase_mode_id:2,category_id:1,warrenty_type_id:2,sub_category_id:2},
        {id: 3, product_name: 'Mobile',product_image:"https://e7.pngegg.com/pngimages/285/180/png-clipart-iphone-x-iphone-8-telephone-apple-a-roommate-who-plays-with-a-cell-phone-miscellaneous-gadget-thumbnail.png",user_id:1,brand_id:3,products_serial_no:08946,products_model_no:"kl890",date_of_purchase:"10.4.2021",warrenty_id:2,unit_id:1,quantity:2,price:15000,sacanned_image:"",invoice_image:"",user_type_id:2,purchase_mode_id:2,category_id:3,warrenty_type_id:2,sub_category_id:2},
      ]);
    });
};