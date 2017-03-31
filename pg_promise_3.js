var prompt = require('prompt-promise');
var Promise = require('bluebird');
var pgp = require('pg-promise') ({
  promiseLib: Promise
});

var db = pgp({
  database: 'music_db'
});

prompt('Track name? ')
.then (function(track_name) {
  return prompt('Album ID? ');
})
.then (function(album_id) {
  return prompt('Track duration?: ');
})
.then (function(track_duration) {
  return db.three (
    `insert into track values
    (default, $1, $2, $3) returning track_id, name`,track_name, album_id, track_duration);

})
.then (function(track) {
  console.log('Created track with', track.name);
})
.catch (function(err) {
  console.log(err.message);
})
;
