const user=require('../models/usersModel')
exports.getUsers=async(req,res)=>{
  
    try{
        const [data,message]= await user.users();
        res.json({
            status:'Success',
            status:200,
            data:data
        })
    }
    catch(error){
        res.json({
            error:error,
            status:400
        })
    }
        
    
}

exports.addUsers=async(req,res)=>{
    try{
        const [data,message]=await user.addUser(req.body);
        res.json({
            data:data,
            message:message,
            status:200
        })
        
    }
    catch(error){
        res.json({
            error:error,
            status:400
        })
    }
}