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
