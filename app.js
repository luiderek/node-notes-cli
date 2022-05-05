const fs = require('fs');

let dataJSON = require('./data.json');

let userCommand = process.argv[2]

if (userCommand === 'read') {
  for (var key in dataJSON.notes) {
    console.log(key);
  }
  // for (var i = 0; i < dataJSON.notes.length)
}
