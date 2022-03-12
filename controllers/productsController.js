const products=require('../models/productsModel');


exports.getProductDetails = async (req, res) => {
    try {
      const [data] = await products.getProducts();
      res.json({
        status: "Success",
        statusCode: 200,
        data: data,
        // message:message,
      });
    } catch (error) {
      res.json({
        error: error,
        status: "Failed",
        statusCode: 400,
      });
    }
  };

 exports.addProductDetails = async (req, res) => {
     console.log(req.body);
const values={
      product_name:req.body.product_name,
      product_image:req.files.product_image[0].path,
   // product_image:req.body.product_image,
      user_id:req.body.user_id,
      brand_id:req.body.brand_id,
      products_serial_no:req.body.products_serial_no,
      products_model_no:req.body.products_model_no,
      date_of_purchase:req.body.date_of_purchase,
      warrenty_id:req.body.warrenty_id,
      unit_id:req.body.unit_id,
      quantity:req.body.quantity,
      price:req.body.price,
      scanned_image:"D:/desktop/images",
      invoice_image:req.files.invoice_image[0].path,
    // invoice_image:req.body.invoice_image,
      user_type_id:req.body.user_type_id,
      purchase_mode_id:req.body.purchase_mode_id,
      category_id:req.body.category_id,
      sub_category_id:req.body.sub_category_id,
      duration:req.body.duration,
      payment_mode_id:req.body.payment_mode_id,
     // cutomer_care_id:req.body.cutomer_care_id,
      warrenty_type_id:req.body.warrenty_type_id,
  } 

  const qrscan =req.body.scanned_image;

    try{
      const [data]= await products.addProducts(values,qrscan);
      if(data ==="Product serial no already exist"){
        res.json({
        status: "Success",
        statusCode: 200,
        message:data
      })
      }
      else{
        res.json({
          status: "Success",
          statusCode: 200,
          message:"Product added successfully"
      })
      }
      
      }
      catch(error){
          res.json({
              error:error,
              status:400
          })
      }
  };

  exports.getProductDetailsByUser = async (req, res) => {
    const id= req.params.id;
    try {
      const [data] = await products.getProductsByUser(id);

      let house = data.reduce(function (n, person) {
        return n + (person.category_name == 'house');
    }, 0);
    
    let business = data.reduce(function (n, person) {
        return n + (person.category_name == 'business');
    }, 0);
    
    let personal = data.reduce(function (n, person) {
        return n + (person.category_name == 'personal');
    }, 0);
const graph = [{category:"Personal",deviceCount:personal,color:'#F5AA00'},{category:"Business",deviceCount:business,color:'#00c569'},
{category:"House",deviceCount:house,color:'#FF4081'}
]
      res.json({
        status: "Success",
        statusCode: 200,
        data: data,
        count:data.length,
        graphData:graph,
      });
    } catch (error) {
      res.json({
        error: error,
        status: "Failed",
        statusCode: 400,
      });
    }
  };

 exports.deleteProductDetails = async (req, res) => {
    try {
      const [data] = await products.deleteProduct();
      res.json({
        status: "Success",
        statusCode: 200,
        data: 'Product deleted successfully',
        // message:message,
      });
    } catch (error) {
      res.json({
        error: error,
        status: "Failed",
        statusCode: 400,
      });
    }
  };

exports.updateSubCategory= async(req,res)=>{
    try {
      const [data] = await category.updateSubCategory(req.body,req.params.id);
      res.json({
        status: "Success",
        statusCode: 200,
        data: 'Subcategory updated successfully',
        // message:message,
      });
    } catch (error) {
      res.json({
        error: error,
        status: "Failed",
        statusCode: 400,
      });
    }
  }




