var prompt = require('prompt-promise');
var Promise = require('bluebird');
var pgp = require('pg-promise') ({
  promiseLib: Promise
});

var db = pgp({
  database: 'music_db'
});

prompt('Artist name? ')
.then (function(artist_name) {
  return db.one (
    `insert into musician values
    (default, $1) returning musician_id, name`,artist_name);
})
.then (function(artist) {
  console.log('Created artist with', artist.name);
})
.catch (function(err) {
  console.log(err.message);
})
;
