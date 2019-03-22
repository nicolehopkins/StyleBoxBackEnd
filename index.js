const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3001;

const customerRouter = require('./routes/customers')

//  Middleware
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//  Routes
app.use('/customer', customerRouter);




app.get('/', (req, res) => {
    res.json('Hello world'); 
})

//  Protected and unprotected routes should go here





app.listen(port, () => {
    console.log('Server listening on port: '+port);
})