const fs = require('fs');

let dataJSON = require('./data.json');

let userCommand = process.argv[2]

if (userCommand === 'read') {
  for (var key in dataJSON.notes) {
    console.log(`${key}: ${dataJSON.notes[key]}`);
  }
} else if (userCommand === 'create') {
  const newNote = process.argv[3];
  dataJSON.notes[dataJSON.nextId] = newNote;
  dataJSON.nextId++;
  let stringified = JSON.stringify(dataJSON, null, 2)
  console.log(stringified);
  // fs.writeFile();
}

//

// node app.js read
//  iterates through .notes, console logs a template
// node app.js create 'somesortofstring'
//  increments nextID, adds a new property:value to the notes object
// node app.js delete
//
// node app.js update
//
