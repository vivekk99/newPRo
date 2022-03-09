const category = require("../models/categoryModel");

exports.getCatogerys = async (req, res) => {
  try {
    const [data] = await category.getCategory();
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

exports.getSubCatogerys = async (req, res) => {
  try {
    const [data] = await category.getSubCategory();
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

exports.getWarrentyTypes = async (req, res) => {
  try {
    const [data] = await category.getWarrentyTypes();
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

exports.getWarrenty = async (req, res) => {
  try {
    const [data] = await category.getWarrenty();
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

exports.getUnitTypes = async (req, res) => {
  try {
    const [data] = await category.getUnitTypes();
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

exports.getPaymentMode = async (req, res) => {
  try {
    const [data] = await category.getPaymentMode();
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

exports.getUserType = async (req, res) => {

    try {
      const [data] = await category.getUserType();
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

  exports.getBrands = async (req, res) => {

    try {
      const [data] = await category.getBrands();
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

  exports.getCustomerCare = async (req, res) => {
    try {
      const [data] = await category.getCustomerCare();
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

exports.addPurchaseMode = async(req,res)=>{
    try{
      const [data]= await category.addPurchaseMode(req.body);
      if(data ==="PurchaseMode already exist"){
        res.json({
        status: "Success",
        statusCode: 200,
        message:data
      })
      }
      else{
        res.json({
          status:"Success",
        statusCode: 200,
        message:"purchase mode added successfully"
      })
      }
      
      }
      catch(error){
          res.json({
              error:error,
              status:400
          })
      }
  }

