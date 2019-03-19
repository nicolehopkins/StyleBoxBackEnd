const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3001;

//  Middleware
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//  Routes




app.get('/', (req, res) => {
    res.json('Hello world'); 
})

//  Protected and unprotected routes should go here





app.listen(port, () => {
    console.log('Server listening on port: '+port);
})