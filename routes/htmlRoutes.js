// require express
const path = require('path');
const router = require('express').Router();



// get notes from notes.html file
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

// route to fetch from index.html file
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

const newLocal = module.exports = router;