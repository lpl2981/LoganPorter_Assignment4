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
    const path = '/api/notes/' + req.params.noteid;
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

const createNote = function(req, res) {
    res.render('blank_note');
};

const doCreateNote = function(req, res) {
        const path = '/api/notes/';
        const reqMethod = {
            url: apiOptions.server + path,
            method: 'POST',
            json: {title:req.body.title, content:req.body.content}
        };
        request(
            reqMethod,
            (function (err, res, body){
                console.log(err, body);
            })
        );
        res.render('blank_note');
};

const doDeleteNote = function(req, res) {
        const path = '/api/notes/';

        const reqDelMethod = {
            url: api.Options.server + path,
            method: 'DELETE',

        }
}

module.exports.doCreateNote = doCreateNote;
module.exports.createNote = createNote;
module.exports.note = note;