const knex =require('../data/db');
const {Quantites_retirved_successfully,Quantity_Added_successfully,Quantity_Already_Exist,
    Quantity_Deleted_successfully,Quantity_Not_Exist,Quantity_Updated_successfully,
QUantity_Cannot_Be_Updated} =require('../constants')

exports.getQuantites=async()=>{

 const data= await knex.select('*').from('quantites')

 return [data,Quantites_retirved_successfully]

}

exports.addQuantites=async(body)=>{
const exist=await knex.select('*').from('quantites').where('quantity',body.quantity)
if(exist.length==0){
const data = await knex.insert(body).into('quantites')
const alldata= await knex.select('*').from('quantites')

return [alldata,Quantity_Added_successfully]

}
else{
    return [,Quantity_Already_Exist]
}
}

exports.deleteQuantity=async(body)=>{
    const data=await knex('quantites').where('id',body.id).del()
   if(data){
    const alldata= await knex.select('*').from('quantites')

    return [alldata,Quantity_Deleted_successfully]
   }
   else{
       return [,Quantity_Not_Exist]
   }
    

}

exports.updateQuantity=async(body)=>{
 const data=await knex('quantites').where('id',body.id).update({quantity:body.quantity})
 
 if(data){
    const alldata= await knex.select('*').from('quantites')
    return [alldata,Quantity_Updated_successfully]
 }
 else{
     return[,QUantity_Cannot_Be_Updated]
 }

}