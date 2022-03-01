
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('customer_care_details').del()
    .then(function () {
      // Inserts seed entries
      return knex('customer_care_details').insert([
        {id: 1, brand_id: 1,contact_no:0987543279,email_address:"hp@gmail.com",whatsapp:"",facebook:"",address:"chennai"},
        {id: 2, brand_id: 2,contact_no:8709654329,email_address:"apple@gmail.com",whatsapp:"",facebook:"",address:"banglore"},
        {id: 3, brand_id: 3,contact_no:8765432109,email_address:"lenovo@gmail.com",whatsapp:"",facebook:"",address:"coimbatore"},
      ]);
    });
};
