const db=require('../data/db');

exports.getProducts= async()=>{
    const data= await db.select('*').from('product_details').join('user_info','product_details.user_id','user_info.id').join('brands_details','product_details.brand_id','brands_details.id')
    .join('warrenty','product_details.warrenty_id','warrenty.id').join('unit_type','product_details.unit_id','unit_type.id')
    .join('user_type','product_details.user_type_id','user_type.id') .join('purchase_mode','product_details.purchase_mode_id','purchase_mode.id')
    
   return [data]
}

exports.getProductsByUser = async(id)=>{

  const data= await db.select('*').from('product_details').join('user_info','product_details.user_id','user_info.id').join('brands_details','product_details.brand_id','brands_details.id')
  .join('warrenty','product_details.warrenty_id','warrenty.id').join('warrenty_types','product_details.warrenty_type_id','warrenty_types.id').join('unit_type','product_details.unit_id','unit_type.id')
  .join('user_type','product_details.user_type_id','user_type.id').join('purchase_mode','product_details.purchase_mode_id','purchase_mode.id').where({user_id:id});
   return [data];
}
