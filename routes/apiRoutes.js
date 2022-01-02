const router = require('express').Router();
const store = require('../db/file');


//
router.get('/notes', (req, res) => {
    file
    .getNotes()
    .then((notes) => {
        return res.json(notes);
    })
    .catch((err) => res.status(500).json(err));
});

router.post('/notes', (req, res) => {
    file
    .addNote(req.body)
    .then((note) => res.json(note))
    .catch((err) => res.status(500).json(err));
    });

    


});

module.export = router;