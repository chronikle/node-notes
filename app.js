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
        console.log(`\n--\nTitle: ${note.title}\nBody: ${note.body}\n`);
    } else {
        console.log('A note title already exists!');
    }
} else if(command === 'rem') {
    notes.rem(argv.title);
} else if(command === 'list') {
    notes.getAll();
} else if(command === 'getNote') {
    notes.getNote(argv.title);
} else console.log('Unrecognized command');
