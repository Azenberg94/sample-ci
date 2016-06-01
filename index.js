var express = require('express');
var DEFAULT_PORT = 3000;
var api = express();

api.get('/', function(req, res, next){
    send('Hello world');
});

api.get('/contacts', function(re, res, next){
    res.send([]);
});

api.get('/contacts/:name', function(req, res, next){
   res.send(); 
});

api.post('/contacts/:name', function(req, res, next){
   if(req.params.name === 'exist')
       return res.status(403).send();
   
   res.send();
});

var port = process.env.PORT || DEFAULT_PORT;

api.put('/contacts/:name/:new', function(req, res, next){
    res.send();
});

api.delete('/contacts/:name', function(req, res, next){
    res.send();
});

var port = process.env.PORT || DEFAULT_PORT;

console.log('Server started on port ' + port + '...');
api.listen(port);

console.log('Server started on port ' + port + '...');
api.listen(port);

module.exports = api;