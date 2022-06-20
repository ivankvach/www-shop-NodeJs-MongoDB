const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('./cors');
const authenticate = require('../authenticate');

const Chat = require('../models/chat');

const chatRouter = express.Router();

chatRouter.use(bodyParser.json());

chatRouter.route('/')
.options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
.get(cors.cors, (req,res,next) => {
    //console.log(req.headers.authorization)
    Chat.find({})  
    .then((products) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(products);
        //console.log(req._doc.author)
        //console.log(req.body);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post(cors.corsWithOptions, (req, res, next) => {
  Chat.create(req.body)
  .then((product) => {
      console.log('Basket Created ', product);
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
  Chat.remove({})
  .then((resp) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(resp);
  }, (err) => next(err))
  .catch((err) => next(err));    
});
chatRouter.route('/:dishId')
.get((req,res,next) => {
    Chat.findById(req.params.dishId)
    .then((dish) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(dish);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post((req, res, next) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /dishes/'+ req.params.dishId);
})
.put((req, res, next) => {
    Chat.findByIdAndUpdate(req.params.dishId, {
        $set: req.body
    }, { new: true })
    .then((dish) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(dish);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.delete((req, res, next) => {
    Chat.findByIdAndRemove(req.params.dishId)
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
});
module.exports = chatRouter;
