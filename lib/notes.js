const fs = require('fs');
const path = require('path'); 

function createNewNote(body, notesArray) {
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    );
    console.log(note);

    return note;
};

function deleteByID(id, notesArray) {
    // get deleted id
    let deleteId = id;
    // remove deleted id from notes array
    notesArray.splice(deleteId, 1);

    // re-writes new notes in db.json file
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    );
};

module.exports = {
    createNewNote, 
    deleteByID
} 
