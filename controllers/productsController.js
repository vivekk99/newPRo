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

  exports.getProductDetailsByUser = async (req, res) => {
    const id= req.params.id;
    try {
      const [data] = await products.getProductsByUser(id);

      res.json({
        status: "Success",
        statusCode: 200,
        data: data,
        count:data.length
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
