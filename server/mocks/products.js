module.exports = function(app) {
  var express = require('express');
  var productsRouter = express.Router();
  var products = [{
    id: 1,
    title: 'Batik',
    description: 'Good Quality Batik',
    price: '$7.99',
    image: 'http://www.batikguild.org.uk/images/style/NDimage260.jpg'
  },

  {
    id: 2,
    title: 'Sculpture',
    description: 'Good Quality Sculpture',
    price: '$4.99',
    image: 'http://www.contemporary-african-art.com/images/pendant-mask.jpg'
  },

  {
    id: 3,
    title: 'Pendant',
    description: 'Good Quality Pendant',
    price: '$97.99',
    image: 'https://swaggwood.com/media/catalog/product/cache/1/thumbnail/400x/17f82f742ffe127f42dca9de82fb58b1/w/n/wn049.jpg'
  }];
  productsRouter.get('/', function(req, res) {
    res.send({
      'products': products
    });
  });

  productsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  productsRouter.get('/:id', function(req, res) {
    res.send({
      'products': {
        id: req.params.id
      }
    });
  });

  productsRouter.put('/:id', function(req, res) {
    res.send({
      'products': {
        id: req.params.id
      }
    });
  });

  productsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/products', productsRouter);
};
