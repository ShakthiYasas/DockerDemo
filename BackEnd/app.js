const express = require('express');
const app = express();

var middleware = function(req, res, next){
    req.requestTime = Date.now();
    console.log('Request recieved at ' + Date.now());
    next();
}

app.use(middleware);

app.get('/',(req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.json('Hey! Welcome to the Docker Demo with Version Controlling!');
});

app.get('/products',(req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.json('This is the product endpoint template!');
});

app.listen(5000, () => {
    // console.log('Demo started!');
    console.log('Demo Started using the current version: ' + process.env.VERSION +'!');
});