console.log('Starting notes.js!');

const fs = require('fs');

let fetchNotes = () => {

    try {
        let notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString); 
    } catch (e) {
        return [];
    }

};

let saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

let addNote = (title,body) => {
    let notes = fetchNotes();
    let note = {
        title,
        body
    };
    let duplicateNotes = notes.filter((note) => note.title === title);
    if(duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    } 
};

let getAll = () => {
    console.log('Listing all notes');
};
let rem = (title) => {
    console.log('Removing', title);
}
let getNote = (title) => {
    console.log('Reading', title);
}
module.exports = {
    addNote, 
    getAll,
    rem,
    getNote
};