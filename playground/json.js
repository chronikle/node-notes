// var obj = {
//  name: 'Alex'
// };
// let stringObj = JSON.stringify(obj);
// console.log(typeof(stringObj));

// let personString = '{"name":"Alex","age":29}';
// let person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person);

const fs = require('fs');

let originalNote = {
    title: 'Some title',
    body: 'Some body'
};

let originalNotestring = JSON.stringify(originalNote);

fs.writeFileSync('notes.json', originalNotestring);

let noteString = fs.readFileSync('notes.json');
let note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);