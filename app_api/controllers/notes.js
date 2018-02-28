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
const notesReadOne = function (req, res) {
    note
        .findById(req.params.noteid)
        .exec(function (err, note) {
            if (note) {
                console.log(note);
            } else if (err){
                res
                    .status(404)
                    .json({
                        "message": "locationid not found"
                    });
            }
        });
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

module.exports.notesListByDate = notesListByDate;
module.exports.notesCreate = notesCreate;
module.exports.notesReadOne = notesReadOne;
module.exports.notesUpdateOne = notesUpdateOne;
module.exports.notesDeleteOne = notesDeleteOne;

