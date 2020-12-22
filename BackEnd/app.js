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
    res.json('Hey! Welcome to the Docker Demo!');
});

app.listen(5000, () => {
    // console.log('Demo started!');
    console.log('Demo Started using ' + process.env.VERSION +'!');
});