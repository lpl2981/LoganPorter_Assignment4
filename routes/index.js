const express = require('express');
const router = express.Router();
const ctrlList = require('../routes/list');
const ctrlNotes = require('../routes/notes');

/* List page */
router.get('/list', ctrlList.list);

/* Note page */
router.get('/notes', ctrlNotes.notes);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Assignment 3 - Static Webpage' });
});

module.exports = router;
