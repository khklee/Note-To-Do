const router = require('express').Router();
const { createNewNote, deleteByID } = require('../../lib/notes');
const { notes } = require('../../db/db.json');

router.get('/notes', (req, res) => {
    res.json(notes);
});

router.post('/notes', (req, res) => {
    // set id base on what the nex index of the array will be
    req.body.id = notes.length.toString();

    // add a note to json file and notes array in this function
    const note = createNewNote(req.body, notes);

    res.json(note);
});

router.delete('/notes/:id', (req, res) => {
    deleteByID(req.params.id, notes);
    res.json(notes);
});

module.exports = router;
