var mongoose = require('mongoose');

var noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: String
});

mongoose.model('notes', noteSchema);