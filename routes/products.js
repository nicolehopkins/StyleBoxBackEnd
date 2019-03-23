const express = require('express');
const productRouter = express.Router();
const productService = require('../services/products');

// CREATE
productRouter.post('/', (req, res, next) => {
    const {id, name, description, price, stock} = req.body;

    productService.create(id, name, description, price, stock)
        .then(data => {
            res.json({success: `New product with ${email} created with ID ${id}`});
        })
        .catch(err => {
            next(err);
        })
})

// GET
productRouter.get('/products/:id', (req, res, next) => {
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
productRouter.put('/products/:id', (req, res, next) => {
    const {id} = req.params;

    productService.update(id, name, description, price, stock)
        .then(data => {
            res.json({success: `Updated product ${id}`});
        })
        .catch(err => {
            next(err);
        })
})

// DELETE
productRouter.get('/products/:id', (req, res, next) => {
    const {id} = req.params;

    productService.delete(id)
        .then(data => {
            res.json({success: `Deleted product ${id}`});
        })
        .catch(err => {
            next(err);
        })
})

module.exports = productRouter;