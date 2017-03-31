var prompt = require('prompt-promise');
var Promise = require('bluebird');
var pgp = require('pg-promise') ({
  promiseLib: Promise
});

var db = pgp({
  database: 'music_db'
});

prompt('Album name?: ')
.then (function(album_name) {
  return prompt('Album year?: ');
})
.then (function(album_year) {
  return prompt('Artist ID?: ');
})
.then (function(artist_id) {
  return db.none (
  `insert into album values
  (default, 'Beggars Banquet', '1968', '1');`
);
})
.then (function() {
console.log('it worked');
})
.catch (function(err) {
  console.log(err.message);
})
;
