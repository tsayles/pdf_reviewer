// bare bones server to serve up the index.html file
// and any other static files in the public directory
// using the express module

// require the express module
var express = require('express');
// create an express application
var app = express();
// require the path module
var path = require('path');

// serve up the public directory
app.use(express.static(path.join(__dirname, 'public')));
app.use (express.static(path.join(__dirname, 'css')));

// start the server on port 3000
app.listen(3000, function() {
  console.log('Server listening on http://localhost:3000');
});


