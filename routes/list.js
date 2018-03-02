/* GET 'list' page */
const request = require('request');

const apiOptions = {
    server: 'http://localhost:3000'
};
if (process.env.NODE_ENV === 'production') {
    apiOptions.server = 'https://pure-temple-67771.herokuapp.com';
}
const _renderList = function(req, res, responseBody){
    res.render('list', { title: 'List of Notes', notes: responseBody });
};

const noteslist = function(req, res){
    const path = '/api/notes';
    const requestOptions = {
        url : apiOptions.server + path,
        method : 'GET',
        json : {}
    };
    request(
        requestOptions,
        (function (err, response, body) {
            console.log(err, body);
            _renderList(req, res, body);
        })
    );
};

module.exports.noteslist = noteslist;