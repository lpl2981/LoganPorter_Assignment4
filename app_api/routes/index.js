const express = require('express');
const router = express.Router();
const ctrlNotes = require('../routes/notes');

/* Note page */
router.get('/notes', ctrlNotes.notes);

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Assignment 4 - Static Webpage' });
});

module.exports = router;