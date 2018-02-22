const mongoose = require('mongoose');
const note = mongoose.model('notes');
const notesCreate = function (req, res) {
    res
        .status(200)
        .json({"status" : "success"});
};
const notesListByDate = function (req, res) {
    res
        .status(200)
        .json({"status" : "success"});
};
const notesReadOne = function(req, res) {
    note
        .findById(req.params.noteid)
        .exec(err, location) => {
            res
                .status(200)
                .json(location);
        }
};
    res
        .status(200)
        .json({"status" : "success"});
};
const notesUpdateOne = function (req, res) {
    res
        .status(200)
        .json({"status" : "success"});
};
const notesDeleteOne = function (req, res) {
    res
        .status(200)
        .json({"status" : "success"});
};

module.exports = {
    notesListByDate,
    notesCreate,
    notesReadOne,
    notesUpdateOne,
    notesDeleteOne
};