const express = require('express');
const productRouter = express.Router();
const productService = require('../services/products');

// CREATE
productRouter.post('/', (req, res, next) => {
    const {name, description, price, stock, image} = req.body;

    productService.create(name, description, price, stock, image)
        .then(data => {
            res.json({success: `New product with created with ID ${data.id}`});
        })
        .catch(err => {
            next(err);
        }) 
})

// GET ALL
productRouter.get('/', (req, res, next) => {
    productService.read()
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            next(err);
        })
})

// GET BY ID
productRouter.get('/:id', (req, res, next) => {
    const {id} = req.params;

    productService.read(id)
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            next(err);
        })
})

// UPDATE
productRouter.put('/:id', (req, res, next) => {
    const {id} = req.params;

    productService.update(id, name, description, price, stock, image)
        .then(data => {
            res.json({success: `Updated product ${data.id}`});
        })
        .catch(err => {
            next(err);
        })
})

// DELETE
productRouter.delete('/:id', (req, res, next) => {
    const {id} = req.params;

    productService.delete(id)
        .then(data => {
            res.json({success: `Deleted product ${data.id}`});
        })
        .catch(err => {
            next(err);
        })
})

module.exports = productRouter;