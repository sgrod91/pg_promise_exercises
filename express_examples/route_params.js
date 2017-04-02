const express = require('express');
const app = express();

app.get('/hello/:name', function(req, res) {
  var name = req.params.name || 'world';
  res.send('Hello ' + name + '!');
});

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});
