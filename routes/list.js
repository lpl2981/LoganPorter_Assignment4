/* GET 'list' page */
const list = function(req, res){
    res.render('list', { title: 'List of Notes' });
};

module.exports = {
    list
};