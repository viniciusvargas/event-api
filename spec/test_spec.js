var frisby = require('frisby');


frisby.create('Test /test endpoint')
  .get('http://localhost:8080/eventapi/test')
  .expectStatus(200)
  .expectJSON({
      "message":"App running"
  })
  .toss();
