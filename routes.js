const user=require('./controllers/usersController')
const role=require('./controllers/rolesController')
const product=require('./controllers/productController')
const brands = require('./controllers/brandController')
const devices = require('./controllers/deviceController')
const customer = require('./controllers/customerController')
const category = require('./controllers/categoryController')
const products = require('./controllers/productsController')
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })
module.exports=function(app){
app.route('/getusers').get(user.getUsers),
app.route('/addUsers').post(user.addUsers),
app.route('/addRole').post(role.addRoles),
app.route('/getRoles').get(role.getRoles),
app.route('/getQuantities').get(product.getQuantities),
app.route('/addQuantity').post(product.addQuantities),
app.route('/deleteQuantity').post(product.deletequantites),
app.route('/updateQuantity').post(product.updateQuantites),
app.route('/getBran').get(brands.getBrands),
app.route('/getDevice').get(devices.getDevices),
app.route('/getCustomers').get(customer.getCustomers),
app.route('/getCategory').get(category.getCatogerys),
app.route('/getSubCategory').get(category.getSubCatogerys),
app.route('/getWarrentyTypes').get(category.getWarrentyTypes),
app.route('/getWarrenty').get(category.getWarrenty),
app.route('/getUnitTypes').get(category.getUnitTypes),
app.route('/getPaymentsModes').get(category.getPaymentMode),
app.route('/getUserType').get(category.getUserType),
app.route('/getBrands').get(category.getBrands),
app.route('/getCustomerCare').get(category.getCustomerCare),
app.route('/getProducts').get(products.getProductDetails),
app.route('/getProductsByUser/:id').get(products.getProductDetailsByUser),
app.route('/addProducts').post(upload.array("files") ,products.addProductDetails),
app.route('/addPurchaseMode').post(category.addPurchaseMode),
app.route('/deleteProduct').post(products.deleteProductDetails)
}
