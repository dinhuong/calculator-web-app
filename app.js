var express = require('express');
var app = express();
var path = require('path');

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

// index page
app.get('/', function(req, res) {
    res.render('index');
});



app.listen(3000, function () {
  console.log('App listening on port 3000!');
});

