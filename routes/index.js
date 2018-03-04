const express = require('express');
const router = express.Router();
const ctrlList = require('../routes/list');
const ctrlNotes = require('../routes/notes');

/* List page */
router.get('/list', ctrlList.noteslist);

/* Note editor page */
router.get('/notes', ctrlNotes.note);
router.put('/notes', ctrlNotes.note);

/* Blank Note page */
router.get('/blank_note', ctrlNotes.createNote);
router.post('/blank_note', ctrlNotes.doCreateNote);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Assignment 4 - Dynamic Webpage' });
});

/* GET noteid. */
router.get('/', ctrlList.noteslist);
router.get('/notes/:noteid', ctrlNotes.note);


module.exports = router;
