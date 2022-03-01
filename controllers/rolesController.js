const role=require('../models/rolesModel');

exports.addRoles= async(req,res)=>{
try{
const [data,message]= await role.addRoles(req.body)
res.json({
    data:data,
    message:message,
    status:200
})
}
catch(error){
    res.json({
        message:'cannot add role',
        status:400
    })
}
}

exports.getRoles=async(req,res)=>{
    try{
const [data,message]= await role.getRoles()
res.json({
    data:data,
    message:message,
    status:200
})
    }
    catch(error){
        res.json({
            message:data,
            status:400
        })
    }
}