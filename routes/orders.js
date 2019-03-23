const express = require('express');
const orderRouter = express.Router();
const orderService = require('../services/orders');

// CREATE
orderRouter.post('/orders', (req, res, next) => {
    const {id, customer_id, product_id, dateOrdered, dateShipped} = req.params;

    orderService.create(id, customer_id, product_id, dateOrdered, dateShipped)
        .then(data => {
            res.json({success: `New order with ${email} created with ID ${id}`});
        })
        .catch(err => {
            next(err);
        })
})

// GET
orderRouter.get('/orders/:id', (req, res, next) => {
    const {id} = req.params;

    orderService.read(id)
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            next(err);
        })
})

// UPDATE
orderRouter.put('/orders/:id', (req, res, next) => {
    const {id} = req.params;

    orderService.update(id, customer_id, product_id, dateOrdered, dateShipped)
        .then(data => {
            res.json({success: `Updated order for ${email} with OrderID ${id}`});
        })
        .catch(err => {
            next(err);
        })
})

// DELETE
orderRouter.get('/orders/:id', (req, res, next) => {
    const {id} = req.params;

    orderService.delete(id)
        .then(data => {
            res.json({success: `Deleted order with email ${email} with OrderID ${id}`});
        })
        .catch(err => {
            next(err);
        })
})

module.exports = orderRouter;