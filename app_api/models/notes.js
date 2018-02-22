var mongoose = require('mongoose');

var noteSchema = new mongoose.Schema({
    Title: {
        type: String,
        required: true
    },
    Content: String
});

mongoose.model('notes', noteSchema);