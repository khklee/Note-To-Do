const router = require('express').Router();
const { notes } = require('../../db/db.json');

router.get('/api/notes', (req, res) => {
    let results = notes;
    res.json(results);
});

router.post('/api/notes', (req, res) => {
    const note
})

module.exports = router;
