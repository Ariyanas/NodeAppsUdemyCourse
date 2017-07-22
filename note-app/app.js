const fs = require('fs');
const  _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var command = argv._[0];

if(command == 'add'){
  notes.addNote(argv.title,argv.description);
}else if(command == 'read'){
  notes.getNote(argv.title);
}else if(command == 'remove'){
  notes.removeNote(argv.title);
}else if(command == 'edit'){
  notes.editNote(argv.title);
}else if(command == 'list'){
  notes.getList();
}else{
  console.log(`NoteApp : No such command found -> ${command}.`)
}
