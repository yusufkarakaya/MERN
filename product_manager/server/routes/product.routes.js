const ProductController = require('../controllers/product.controller');
module.exports = (app) => {
  app.get('/api', ProductController.index);
  app.post('/api/product', ProductController.createProduct); /* This is new */
  app.get('/api/product', ProductController.allProducts);
  app.get('/api/product/:id', ProductController.getProduct);
};
