var express = require('express')
var app = express()
var swig = require('swig')
var path = require('path')

app.get('/badge/:left/:right/:color', function (req, res) {
  var badge = swig.renderFile(path.join(__dirname, 'badge.svg'), req.params);
  
  res.writeHead(200, {"Content-Type": "image/svg+xml"})
  res.write(badge);
  res.end();
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Badge generator listening at http://%s:%s', host, port);
}); 