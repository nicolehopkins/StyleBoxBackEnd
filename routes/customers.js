const express = require('express');
const customerRouter = express.Router();
const customerService = require('../services/customers');

// CREATE
customerRouter.post('/', (req, res, next) => {
    const {id, email, password, token} = req.body;

    customerService.create(id, email, password, token)
        .then(data => {
            res.json({success: `New customer with ${email} created with ID ${id}`});
        })
        .catch(err => {
            next(err);
        })
})

// GET
customerRouter.get('/:id', (req, res, next) => {
    const {id} = req.params;

    customerService.read(id)
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            next(err);
        })
})

// UPDATE
customerRouter.put('/:id', (req, res, next) => {
    const {id} = req.params;

    customerService.update(id, email, password, token)
        .then(data => {
            res.json({success: `Updated customer with email ${email} with ID ${id}`});
        })
        .catch(err => {
            next(err);
        })
})

// DELETE
customerRouter.get('/:id', (req, res, next) => {
    const {id} = req.params;

    customerService.delete(id)
        .then(data => {
            res.json({success: `Deleted customer with email ${email} with ID ${id}`});
        })
        .catch(err => {
            next(err);
        })
})

module.exports = customerRouter;