var logger = require('morgan');
var express = require('express')
  , app = express();


console.log('Running at: http://localhost:5000');

app
  .get('/', function(req, res) {
    return res.sendfile(__dirname + '/sntiles.html')
  })
  .use(express.static(__dirname + '/'))
  .use(logger('dev'))
  .listen(5000);
