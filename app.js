const fs = require('fs');

let dataJSON = require('./data.json');

let userCommand = process.argv[2]

if (userCommand === 'read') {
  for (var key in dataJSON.notes) {
    console.log(`${key}: ${dataJSON.notes[key]}`);
  }
} else if (userCommand === 'create') {
  const newNote = process.argv[3];
  console.log(newNote);
}
