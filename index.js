const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');


const customerRouter = require('./routes/customers');
const productRouter = require('./routes/products');
const orderRouter = require('./routes/orders');
const paymentRouter = require('./routes/payments');

//  Middleware
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())

//  Routes
app.use('/customer', customerRouter);
app.use('/products', productRouter);
app.use('/orders', orderRouter);
app.use('/payments', paymentRouter);




app.get('/', (req, res) => {
    res.json('Hello world'); 
})

//  Protected and unprotected routes should go here




const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log('Server listening on port: '+port);
})