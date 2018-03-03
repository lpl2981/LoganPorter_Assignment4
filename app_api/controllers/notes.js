const mongoose = require('mongoose');
const note = mongoose.model('notes');

const notesCreate = function (req, res) {
    console.log(req.body);
    note.create({
        title: req.body.title,
        content: req.body.content
        })
        .exec(function (err, note) {
            if (err) {
                res
                    .status(400)
                    .json(err);
            }
            else {
                res
                    .status(200)
                    .json(note);
            }
        });
};
const notesListByDate = function (req, res) {
    note
        .find()
        .exec(function (err, note) {
            if (note) {
                res
                    .status(200)
                    .json(note);
            }
            else if (!note){
                res
                    .status(404)
                    .json({
                        "message": "noteid not found"
                    });
            }
            else if (err){
                res
                    .status(404)
                    .json({
                        "message": "noteid not found"
                    });
            }
        });
};
const notesReadOne = function (req, res) {
    note
        .findById(req.params.noteid)
        .exec(function (err, note) {
            if (note) {
                  res
                    .status(200)
                    .json(note);
            }
            else if (!note){
                  res
                    .status(404)
                    .json({
                      "message": "noteid not found"
                      });
            }
            else if (err){
                   res
                    .status(404)
                    .json({
                        "message": "noteid not found"
                    });
            }
        });
};
const notesUpdateOne = function (req, res) {
    note
        .findById(req.params.noteid)
        .select('title content')
        .exec(function (err, note) {
            if (err) {
                res
                    .status(404)
                    .json(err);
            }
            else {
                res
                    .status(200)
                    .json(note);
            }
            note.title = req.body.title;
            note.content = req.body.content;
            note.save(function (err, note) {
                if (err) {
                    res
                        .status(404)
                        .json(err);
                }
                else {
                    res
                        .status(200)
                        .json(note);
                }
            });
        });
};
const notesDeleteOne = function (req, res) {
    var noteid = req.params.noteid;
    note
        .findByIdAndRemove(noteid)
        .exec(function (err, note) {
            if (err) {
                res
                    .status(404)
                    .json(err);
            }
            else if (!note) {
                res
                    .status(204)
                    .json(null);
            }
            else {
                res
                    .status(404)
                    .json({
                        "message": "No locationid"
                    });
            }
        });
}

module.exports.notesListByDate = notesListByDate;
module.exports.notesCreate = notesCreate;
module.exports.notesReadOne = notesReadOne;
module.exports.notesUpdateOne = notesUpdateOne;
module.exports.notesDeleteOne = notesDeleteOne;