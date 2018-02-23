/* GET 'list' page */
const notes = function(req, res){
    //var notes = [{"name": "groceres"}]
    //Call API to get array of data

    res.render('notes', {title: 'Note Editor', notes: []});
};

module.exports = {
    notes
};