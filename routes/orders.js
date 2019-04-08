const express = require('express');
const orderRouter = express.Router();
const orderService = require('../services/orders');

// CREATE
orderRouter.post('/', (req, res, next) => {
    const {customer_id, product_id, dateOrdered, dateShipped} = req.body;

    orderService.create(customer_id, product_id, dateOrdered, dateShipped)
        .then(data => {
            res.json({success: `New order created with order number ${data.id}`});
        })
        .catch(err => {
            next(err);
        })
})

// GET
orderRouter.get('/:id', (req, res, next) => {
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
orderRouter.put('/:id', (req, res, next) => {
    const {id} = req.params;

    orderService.update(customer_id, product_id, dateOrdered, dateShipped)
        .then(data => {
            res.json({success: `Updated order number ${data.id}`});
        })
        .catch(err => {
            next(err);
        })
})

// DELETE
orderRouter.get('/:id', (req, res, next) => {
    const {id} = req.params;

    orderService.delete(id)
        .then(data => {
            res.json({success: `Deleted order number ${data.id}`});
        })
        .catch(err => {
            next(err);
        })
})

module.exports = orderRouter;