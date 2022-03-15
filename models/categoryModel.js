const db=require('../data/db');

exports.getCategory= async()=>{
    const data= await db.select('*').from('category');
    console.log(data);
   return [data]
}

exports.getSubCategory= async()=>{  
    const data= await db.select('*').from('sub_category');
    //.join('category','sub_category.category_id','sub_category.id');
   return [data]
}

exports.getWarrentyTypes= async()=>{  
    const data= await db.select('*').from('warrenty_types');
   return [data]
}

exports.getWarrenty= async()=>{  
  const data= await db.select('*').from('warrenty').join('warrenty_types','warrenty.warrenty_type_id','warrenty_types.id');
   return [data]
}

exports.getUnitTypes= async()=>{  
    const data= await db.select('*').from('unit_type');
     return [data]
  }

 exports.getPaymentMode = async()=>{  
    const data= await db.select('*').from('purchase_mode');
     return [data]
  }

  exports.getUserType = async()=>{  
   const data= await db.select('*').from('user_type');
    return [data]
 }

 exports.getBrands = async()=>{  
   const data= await db.select('*').from('brands_details');
    return [data]
 }

 exports.getCustomerCare = async()=>{  
   const data= await db.select('*').from('customer_care_details').join('brands_details','customer_care_details.brand_id','customer_care_details.id');
    return [data]
 }
 
 exports.addPurchaseMode = async(data)=>{
   const exist= await db.select('*').from('purchase_mode').where({purchase_mode:data.purchase_mode});
   
   
   if(exist.length === 0){
      await db.insert(data).into('purchase_mode');
      return["Success"]
   }
   else{
      return ["PurchaseMode already exist"]
  }
 }

 exports.getPurchaseMode =async () =>{
   const data= await db.select('*').from('payment_mode')
 return [data]
  }
 
 exports.updateSubCategory =async (values,id)=>{
     console.log(values);
     const data = await db("sub_category").where("id",id).update({image:values.image
   });

   return [data]
  }
 exports.updateCategory =async (values ,id)=>{
     console.log(values.icon)
   const data = await db("category").where("id",id).update({icon:values.icon
   });

   return [data]
  }
 
