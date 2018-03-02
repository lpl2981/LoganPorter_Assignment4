/* GET 'list' page */
const notes = function(req, res){
    var notes = [{"name": "groceries"}]
    //Call API to get array of data

    res.render('notes', {title: 'Note Editor', notes: notes});
};

module.exports.note = notes;