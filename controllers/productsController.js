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