const fs = require('fs');

let dataJSON = require('./data.json');

let userCommand = process.argv[2]

if (userCommand === 'read') {
  for (var key in dataJSON.notes) {
    console.log(`${key}: ${dataJSON.notes[key]}`);
  }
} else if (userCommand === 'create') {
  const newNote = process.argv[3];
  if (newNote) {
    dataJSON.notes[dataJSON.nextId] = newNote;
    dataJSON.nextId++;
  } else {
    console.error('New notes need content.')
  }
  writeToData(dataJSON);
} else if (userCommand === 'delete') {
  const deleteID = process.argv[3];
  delete dataJSON.notes[deleteID];
  writeToData(dataJSON);
} else if (userCommand === 'update') {
  const updateID = process.argv[3];
  const updateContent = process.argv[4];
  dataJSON.notes[updateID] = updateContent;
  writeToData(dataJSON);
}

function writeToData(dataJSON) {
  let stringified = JSON.stringify(dataJSON, null, 2)
  fs.writeFile('data.json', stringified, 'utf8', err => {
    if (err) throw err;
  });
}

// node app.js read
//  iterates through .notes, console logs a template
// node app.js create 'somesortofstring'
//  increments nextID, adds a new property:value to the notes object
// node app.js delete 1
//  deletes property from data.json and rewrites
// node app.js update
//  replaces data.json object and rewrites
