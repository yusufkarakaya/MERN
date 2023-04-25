const Product = require('../models/product.model'); /* this is new */
module.exports.index = (request, response) => {
  response.json({
    message: 'Hello World',
  });
};

/* The method below is new */
module.exports.createProduct = (request, response) => {
  // Mongoose's "create" method is run using our Person model to add a new person to our db's person collection.
  // request.body will contain something like {firstName: "Billy", lastName: "Washington"} from the client
  Product.create(request.body) //This will use whatever the body of the client's request sends over
    .then((product) => response.json(product))
    .catch((err) => response.json(err));
};

module.exports.allProducts = (request, response) => {
  Product.find()
    .then((products) => response.json(products))
    .catch((err) => response.json(err));
};

module.exports.getProduct = (request, response) => {
  Product.findOne({ _id: request.params.id })
    .then((product) => response.json(product))
    .catch((err) => response.json(err));
};
