const customers=require('../models/customerModel.js');

exports.getCustomers=async(req,res)=>{
    try{
    const [data,message]=await customers.getCutomers();
    res.json({
        data:data,
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

