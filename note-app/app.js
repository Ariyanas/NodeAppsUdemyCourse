const  _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.command('add','Add a new Note',{
  tittle:{
    describe: 'Title of the note',
    demand: true,
    alias: 't'
  },
  description:{
    describe: 'Description of the note',
    demand: true,
    alias: 'd'
  }
}).command('remove','Removes a note',{
  tittle:{
    describe: 'Title of the note',
    demand: true,
    alias: 't'
  }
}).command('read','Reads a note',{
  tittle:{
    describe: 'Title of the note',
    demand: true,
    alias: 't'
  }
}).command('edit','Edit a note\'s description',{
  tittle:{
    describe: 'Title of the note to be modified',
    demand: true,
    alias: 't'
  },
  edit:{
    describe: 'Description to be modified',
    demand: true,
    alias: 'e'
  }
}).command('list','Lists all the notes').help().argv;
var command = argv._[0];

if(command == 'add'){
  var newNote = notes.addNote(argv.title,argv.description);

  if(newNote){
    console.log('Note added successfully !');
    console.log('-------------------------');
    console.log(`Title : ${newNote.title}`);
    console.log(`Description : ${newNote.description}`);
  }else{
    console.log(`Note with title : "${argv.title}" ,already exists !!!`);
  }
}else if(command == 'read'){
  var readNote = notes.getNote(argv.title);

  if(readNote){
    console.log('Note found !');
    console.log('-------------------------');
    console.log(`Title : ${readNote.title}`);
    console.log(`Description : ${readNote.description}`);
  }else{
    console.log('Note not found');
  }
}else if(command == 'remove'){
  var removeNote = notes.removeNote(argv.title);

  var msg = removeNote ? 'Note removed successfully !!!' : 'Note not found !!!';

  console.log(msg);
}else if(command == 'edit'){
  notes.editNote(argv.title,argv.edit);
}else if(command == 'list'){
  notes.getList();
}else{
  console.log(`NoteApp : No such command found -> ${command}.`)
}
