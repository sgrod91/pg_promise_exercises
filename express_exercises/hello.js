var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.set('view engine', 'hbs');

app.get('/greet/:name', function(req, response) {
  var name = req.params.name;
  var age = req.query.age;
  response.render('hello.hbs', {
    title: 'Hello!',
    name: name,
    year: 2017 - age,
  });
});

app.get('/year', function(req, res) {
  var age = req.query.age;
  var year = 2017 - age;
  res.send('You were born in ' + year);
});

var animals = [
  {name: 'cats', favorite: true},
  {name: 'dogs', favorite: true},
  {name: 'tree frogs', favorite: true},
  {name: 'earth worms', favorite: false},
  {name: 'guinea pigs', favorite: true},
];

app.get('/fav_animals', function (req, response) {
  response.render('favorite_animals.hbs', {
    title: 'Favorite animals',
    list: animals,
  });
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
