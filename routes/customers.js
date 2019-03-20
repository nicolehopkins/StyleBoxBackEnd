const express = require('express');
const customerRouter = express.Router();
const customerService = require('../services/customers');


customerRouter.post('/', (req, res, next) => {
    const {id, email, password, token} = req.body;

    customerService.create(id, email, password, token)
        .then(data => {
            res.json({success: `new customer with ${email} created with id: ${id}`});
        })
        .catch(err => {
            next(err);
        })
})