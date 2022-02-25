const fs = require('fs');
const path = require('path');

const express = require('express');
const notes = require('./db/db.json');

const PORT = process.env.PORT || 3001;
const app = express();
// const apiRoutes = require('./routes/apiRoutes/noteRoutes');
// const htmlRoutes = require('./routes/htmlRoutes/index');

function createNewNote(body, notesArray) {
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, './db/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    );
    return note;
}


// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());

app.get('/api/notes', (req, res) => {
    res.json(notes);
    console.log(notes)
});

app.post('/api/notes', (req, res) => {
    // set id base on what the nex index of the array will be
    req.body.id = notes.length.toString();

    // add a note to json file and notes array in this function
    const note = createNewNote(req.body, notes);

    res.json(note);
});
// app.use(express.static('public'));


// app.use('api', apiRoutes);
// app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`API serve now on port ${PORT}!`)
});