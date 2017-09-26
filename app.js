console.log("Starting app.js");

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var command = process.argv[2];
console.log('Command: ', command);
//console.log('Yargs: ', argv);

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
    notes.getAll();
} else if(command === 'read') {
    let note = notes.getNote(argv.title);
    if(note) {
        notes.noteInfo(note);
    } else console.log('Note not found!');
} else console.log('Unrecognized command');
