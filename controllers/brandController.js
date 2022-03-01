const brands =require('../models/brandModel');

exports.getBrands=async(req,res)=>{
    try{
    const [data]=await brands.getBrands();
    res.json({
        data:data,
       // message:message,
        status:'Success',
        statusCode:200
    })
    }
    catch(error){
        res.json({
            error:error,
            status:'Failed',
            statusCode:400
        })
    }
    }