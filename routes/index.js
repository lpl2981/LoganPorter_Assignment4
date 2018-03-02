const express = require('express');
const router = express.Router();
const ctrlList = require('../routes/list');
const ctrlNotes = require('../routes/notes');

/* List page */
router.get('/list', ctrlList.noteslist);

/* Note page */
router.get('/notes', ctrlNotes.note);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Assignment 4 - Dynamic Webpage' });
});

module.exports = router;
