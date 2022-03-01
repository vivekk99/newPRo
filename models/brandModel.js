const db=require('../data/db');

exports.getBrands= async()=>{
    const data= await db.select('*').from('brands');
    console.log(data);
   return [data]
}
