var express = require('express');
var app = express();

/* GET home page. */
app.get('/', (req,res) => {
  res.json({
      "message":"App running"
  });
});

module.exports = app;
