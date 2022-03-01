const db=require('../data/db')
const {Role_Exist,Roles_retrived_success,Role_Added_Success}=require('../constants')


exports.addRoles=async(body)=>{
const values={
    roleName:body.roleName
}
const exist= await db.select('*').from('roles').where('roleName',values.roleName)
if(exist.length==0){
const data= await db.insert(values).into('roles')
const alldata= await db('roles').select()

return [alldata,Role_Added_Success]
}
else{
    return [,Role_Exist]
}

}


exports.getRoles=async()=>{
    const data=await db.select('*').from('roles')
   return [data ,Roles_retrived_success]
}