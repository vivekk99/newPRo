exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('brands').del()
    .then(function () {
      // Inserts seed entries
      return knex('brands').insert([
        {id: 1, location: 'chennai', mobile: '9078654323' ,email: 'showroom@gmail.com',brandName: 'Apple',brandImage:"images"},
        {id: 2, location: 'mumbai', mobile:'0987652176' ,email:'showroom@yahoo.com',brandName: 'samsung',brandImage:"images"},
        {id: 3, location: 'delhi', mobile:'0965432198' ,email:'showroom@outlook.com',brandName: 'sony',brandImage:"images"}
      ]);
    });
};