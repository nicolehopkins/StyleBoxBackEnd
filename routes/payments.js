const express = require('express');
const paymentRouter = express.Router();
const paymentService = require('../services/payments');

// CREATE
paymentRouter.post('/payment', (req, res, next) => {
    const {id, date, customer_id, order_id, isPaid} = req.params;

    paymentService.create(id, date, customer_id, order_id, isPaid)
        .then(data => {
            res.json({success: `New payment created with payment #${id} from ${customer_id}`});
        })
        .catch(err => {
            next(err);
        })
})

// GET
paymentRouter.get('/:id', (req, res, next) => {
    const {id} = req.params;

    paymentService.read(id)
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            next(err);
        })
})

// UPDATE (not needed)


// DELETE (not needed)


module.exports = paymentRouter;