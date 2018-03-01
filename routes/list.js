/* GET 'list' page */
module.exports.noteslist = function(req, res){
    const path = '/api/locations';
    const requestOptions = {
        url : apiOptions.server + path,
        method : 'GET',
        json : {}
    };
    request(
        requestOptions,
        (function (err, response, body) {
            _renderList(req, res, body);
        })
    );
};
const list = function(req, res){
    res.render('list', { title: 'List of Notes' });
};

module.exports.list = list;