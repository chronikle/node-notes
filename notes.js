const fs = require('fs');


let noteInfo = (note) => {
    console.log(`----\nTitle: ${note.title}\nBody: ${note.body}\n`);
}


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
    return fetchNotes();
};
let rem = (title) => {
    let notes = fetchNotes();
    let filteredNotes = notes.filter((note) =>  note.title !== title);
    saveNotes(filteredNotes);
    return notes.length !== filteredNotes.length;
}
let getNote = (title) => {
    let notes = fetchNotes();
    let filteredNotes = notes.filter((note) => note.title === title);
    return filteredNotes[0];
}
module.exports = {
    addNote, 
    getAll,
    rem,
    getNote,
    noteInfo
};