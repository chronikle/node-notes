const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const titleOptions = {
    describe: 'Title of note',
    demand: true,
    alias: 't'
  };
  const bodyOptions = {
    describe: 'Body of note',
    demand: true,
    alias: 'b'
  };
  const argv = yargs
    .command('add', 'Add a new note', {
      title: titleOptions,
      body: bodyOptions
    })
    .command('list', 'List all notes')
    .command('read', 'Read a note', {
      title: titleOptions,
    })
    .command('rem', 'Remove a note', {
      title: titleOptions
    })
    .help()
    .argv;
  var command = argv._[0];

if(command === 'add') {
    let note = notes.addNote(argv.title, argv.body);
    if(note) {
        console.log('Note created!');
        notes.noteInfo(note);
    } else {
        console.log('A note title already exists!');
    }
} else if(command === 'rem') {
    let note = notes.rem(argv.title);
    if(note) {
        console.log('Note removed!');
    } else console.log('No note with that title!');
} else if(command === 'list') {
    let allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s).`);
    allNotes.forEach((note) => notes.noteInfo(note));
} else if(command === 'read') {
    let note = notes.getNote(argv.title);
    if(note) {
        notes.noteInfo(note);
    } else console.log('Note not found!');
} else console.log('Unrecognized command');
