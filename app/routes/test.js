var express = require('express');
var app = express();

/* GET home page. */
app.get('/', (req,res) => {
  res.send('Well Done Turner!');
});

module.exports = app;
