/* GET 'note' page */
const request = require('request');

const apiOptions = {
    server: 'http://localhost:3000'
};
if (process.env.NODE_ENV === 'production') {
    apiOptions.server = 'https://pure-temple-67771.herokuapp.com';
}
const _renderNote = function(req, res, responseBody){
    res.render('notes', { title: 'Note Editor', notes: responseBody });
};

const note = function(req, res){
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
            _renderNote(req, res, body);
        })
    );
};

module.exports.note = note;