exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user_info').del()
    .then(function () {
      // Inserts seed entries
      return knex('user_info').insert([
        {id: 1, first_name: 'vivek',second_name:"kumar", contact_no: '9078654323' ,email_address: 'showroom@gmail.com',device_information: 'laptop',app_version:"2.5",firebase_token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ikpva",role_id:1,user_location:"chennai",last_seen:"12.20"},
        {id: 2, first_name: 'raja', second_name:"durai" ,contact_no:'0987652176' ,email_address:'showroom@yahoo.com',device_information: 'desktop',app_version:"1.5",firebase_token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ikpva",role_id:1,user_location:"mumbai",last_seen:"1.40"},
        {id: 3, first_name: 'gowtham',second_name:"raj", contact_no:'0965432198' ,email_address:'showroom@outlook.com',device_information: 'ipad',app_version:"1.2",firebase_token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ikpva",role_id:2,user_location:"kolkatta",last_seen:'2.40'}
      ]);
    });
};
