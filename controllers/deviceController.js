const devices=require('../models/deviceInfoModel.js');

exports.getDevices=async(req,res)=>{
    try{
    const [data,message]=await devices.getDevice();
    res.json({
        status: true,
        statusCode:200,
        message:"Success",
        data:data
       
    })
    }
    catch(error){
        res.json({
            status:false,
            statusCode:400,
            message:error,
        })
    }
    }
