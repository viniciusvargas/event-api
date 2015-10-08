/**
* Created by Vinicius on 13/09/2015.
*/
var express = require('express');
var app = express();
var interactionController = require('../controller/interaction');

/* GET Slide Presentation. */
app.get('/slidepresentation/:code', (req, res) => {
  console.log("GET /slidepresentation/ request received at: " + new Date());

  var interactionCode = req.params.code;

  //call controller

  res.json(jsonResponse);
  console.log("GET /_interaction/ request successfully handled at: " + new Date());
});
});

module.exports = app;
