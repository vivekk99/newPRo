const products=require('../models/productModel')

exports.getQuantities=async(req,res)=>{
try{
const [data,message]=await products.getQuantites();
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

exports.addQuantities=async(req,res)=>{
try{
const [data,message]= await products.addQuantites(req.body);

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

exports.deletequantites=async(req,res)=>{
    try{
        const [data,message]= await products.deleteQuantity(req.body);
        
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

exports.updateQuantites=async(req,res)=>{
    try{
        const [data,message]= await products.updateQuantity(req.body);
        
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