const db=require('../data/db');

exports.getProducts= async()=>{

    const data= await db.select('*').from('product_table').join('user_info','product_table.user_id','user_info.id').join('brands_details','product_table.brand_id','brands_details.id')
    .join('warrenty','product_table.warrenty_id','warrenty.id').join('unit_type','product_table.unit_id','unit_type.id').join('warrenty_types','product_table.warrenty_type_id','warrenty_types.id')
    .join('user_type','product_table.user_type_id','user_type.id').join('purchase_mode','product_table.purchase_mode_id','purchase_mode.id').join('payment_mode','product_table.payment_mode_id','payment_mode.id')
  console.log(data);
   return [data]
}

exports.addProducts = async(data,qrScan)=>{
 
    const product= await db.select('*').from('product_table').where({products_serial_no:data.products_serial_no});
   console.log(data)
    if(product.length == 0){
      
         await db.insert(data).into('product_table').returning('id').then((id)=>{
            qrScan.forEach( async (value)=>{
                
                const values={
                    title:value.title,
                    value:value.value,
                    product_id:id[0]
                }
  
                console.log(values)
               await db.insert(values).into('QRDetails')
            })
        }).catch((err)=>{
            console.log(err)
        })
       
        return ['Success']
    }
    else{
        return ["Product serial no already exist"]
    }
  
}
exports.getProductsByUser = async(id)=>{
  let datas =[];
  const data= await db.select('*').from('product_table').join('user_info','product_table.user_id','user_info.id').join('brands_details','product_table.brand_id','brands_details.id')
  .join('warrenty','product_table.warrenty_id','warrenty.id').join('warrenty_types','product_table.warrenty_type_id','warrenty_types.id').join('unit_type','product_table.unit_id','unit_type.id')
  .join('user_type','product_table.user_type_id','user_type.id').join('purchase_mode','product_table.purchase_mode_id','purchase_mode.id').join('category','product_table.category_id','category.id').join('sub_category','product_table.sub_category_id','sub_category.id').join('payment_mode','product_table.payment_mode_id','payment_mode.id')
  .where({user_id:id}).orderBy('product_table.id', 'desc')
for (let index = 0; index < data.length; index++) {
    let values = data[index];
    let codeDetails=await db.select('*').from('QRDetails').where({product_id:values.id});
    values.sacanned_image=codeDetails;
    datas.push(values);
}
  return [datas];
}



exports.deleteProduct = async ()=>{
 const data=  await db("product_details").where("user_id",1).del();
 console.log(data)
}

exports.getCustomerCareById =async (id)=>{
  const data = await db("customer_care_details").where('customer_care_details.id',id);
  let house = data.reduce(function (n, person) {
    return n + (person.brand_id );
}, 0);


const brand = await db("brands_details").where('id',house);
data[0].brandDetails=brand;
  //.join('brands_details','customer_care_details.brand_id','customer_care_details.id')
 
  return [data]
 }



