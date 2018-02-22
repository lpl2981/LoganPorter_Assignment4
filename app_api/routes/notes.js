const express = require('express');
const router = express.Router();
const ctrlNotes = require('../controllers/notes');

// locations
router
    .route('/notes')
    .get(ctrlNotes.notesListByDate)
    .post(ctrlNotes.notesCreate);

router
    .route('/notes/:noteid')
    .get(ctrlNotes.notesReadOne)
    .put(ctrlNotes.notesUpdateOne)
    .delete(ctrlNotes.notesDeleteOne);

module.exports = router;