// const express = require('express');
// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');

// const Products = require('../models/products');

// const productsRouter = express.Router();

// productsRouter.use(bodyParser.json());

// productsRouter.route('/')
// .get((req,res,next) => {
//     Products.find(req.query)
//     .then((products) => {
//         res.statusCode = 200;
//         res.setHeader('Content-Type', 'application/json');
//         res.json(products);
//         console.log(products);
//     }, (err) => next(err))
//     .catch((err) => next(err));
// })
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('./cors');

const Products = require('../models/products');

const productsRouter = express.Router();

productsRouter.use(bodyParser.json());

productsRouter.route('/')
.options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
.get(cors.cors, (req,res,next) => {
    Products.find(req.query)
    .then((products) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(products);
        console.log(req.body);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post(cors.corsWithOptions, (req, res, next) => {
  Products.create(req.body)
  .then((product) => {
      console.log('Product Created ', product);
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(product);
  }, (err) => next(err))
  .catch((err) => next(err));
})
.put(cors.corsWithOptions, (req, res, next) => {
  res.statusCode = 403;
  res.end('PUT operation not supported on /product');
})
.delete(cors.corsWithOptions, (req, res, next) => {
  Products.remove({})
  .then((resp) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(resp);
  }, (err) => next(err))
  .catch((err) => next(err));    
});
// .post((req, res, next) => {
//     Products.create(req.body)
//     .then((product) => {
//         console.log('Product Created ', product);
//         res.statusCode = 200;
//         res.setHeader('Content-Type', 'application/json');
//         res.json(product);
//     }, (err) => next(err))
//     .catch((err) => next(err));
// })
// .put((req, res, next) => {
//     res.statusCode = 403;
//     res.end('PUT operation not supported on /dishes');
// })
// .delete((req, res, next) => {
//     Products.remove({})
//     .then((resp) => {
//         res.statusCode = 200;
//         res.setHeader('Content-Type', 'application/json');
//         res.json(resp);
//     }, (err) => next(err))
//     .catch((err) => next(err));    
// });

// dishRouter.route('/:dishId')
// .get((req,res,next) => {
//     Dishes.findById(req.params.dishId)
//     .then((dish) => {
//         res.statusCode = 200;
//         res.setHeader('Content-Type', 'application/json');
//         res.json(dish);
//     }, (err) => next(err))
//     .catch((err) => next(err));
// })
// .post((req, res, next) => {
//     res.statusCode = 403;
//     res.end('POST operation not supported on /dishes/'+ req.params.dishId);
// })
// .put((req, res, next) => {
//     Dishes.findByIdAndUpdate(req.params.dishId, {
//         $set: req.body
//     }, { new: true })
//     .then((dish) => {
//         res.statusCode = 200;
//         res.setHeader('Content-Type', 'application/json');
//         res.json(dish);
//     }, (err) => next(err))
//     .catch((err) => next(err));
// })
// .delete((req, res, next) => {
//     Dishes.findByIdAndRemove(req.params.dishId)
//     .then((resp) => {
//         res.statusCode = 200;
//         res.setHeader('Content-Type', 'application/json');
//         res.json(resp);
//     }, (err) => next(err))
//     .catch((err) => next(err));
// });

module.exports = productsRouter;