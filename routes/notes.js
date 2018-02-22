/* GET 'list' page */
const notes = function(req, res){
    res.render('notes', {title: 'Note Editor'});
};

module.exports = {
    notes
};