const fs = require('fs');

var fetchNotes = () => {
  try{
    var notesTxt = fs.readFileSync('my-notes.json');
    return JSON.parse(notesTxt);
  }catch(e){
    return [];
  }
};

var saveNotes = (notes) => {
  fs.writeFileSync('my-notes.json',JSON.stringify(notes));
};

var addNote = (title,description) => {
  var notes = fetchNotes();

  var newNote = {
    title,
    description
  };

  var duplicateNotes = notes.filter((note) => note.title === title);

  if(duplicateNotes.length === 0){
    notes.push(newNote);
    saveNotes(notes);
    return newNote;
  }
};

var getList = () => {
  var notes = fetchNotes();
  var i = 1;
  notes.forEach(function(note){
    console.log('----------------------');
    console.log("Note : "+i);
    console.log('----------------------');
    console.log('Title : '+note.title);
    console.log('Description : '+note.description);
    console.log('----------------------');
    i++;
  });
};

var getNote = (title) =>{
  var notes = fetchNotes();
  var filteredNotes = notes.filter((note) => note.title === title);

  return filteredNotes[0];
};

var removeNote = (title) => {
  var notes = fetchNotes();
  var filteredNotes = notes.filter((note) => note.title !== title);

  saveNotes(filteredNotes);

  return notes.length !== filteredNotes.length;
};

var editNote = (title,edit) => {
  var notes = fetchNotes();

  var noteEdit = null;

  var filteredNotes = notes.filter((note) => note.title === title);

  if(filteredNotes.length === 0){
    console.log('Note not found !!!')
  }else{
    notes.forEach((note) => {
      if(note.title === title){
        note.description = edit;
      }
    });

    saveNotes(notes);
    console.log('Note edited successfully !!!');
  }
};

module.exports = {
  addNote,
  getList,
  getNote,
  removeNote,
  editNote
};
