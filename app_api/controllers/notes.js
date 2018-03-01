const mongoose = require('mongoose');
const note = mongoose.model('notes');
const notesCreate = function (req, res) {
    note.create({
        title: req.body.title,
        content: req.body.content
    })
    .exec(function (err, note) {
        if (err){
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
    res
        .status(200)
        .json({"status" : "success"});
};
const notesReadOne = function (req, res) {
    note
        .findById(req.params.noteid)
        .exec(function (err, note) {
            if (note) {
                  res
                    .status(200)
                    .console.log(note)
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
                        "message": "locationid not found"
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
    }
        );
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

