var express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cons = require('consolidate'),
    dust = require('dustjs-helpers'),
    pg = require('pg'),
    app = express();

var conString = "postgres://simpleuser:pizel71@localhost/RecipleBook";
app.engine('dust', cons.dust);

// Set default ext .dust
app.set('view engine', 'dust');
app.set('views', __dirname + '/views');

// Public Folder
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.get('/', function(req, res) {
  res.render('index');
});


// Server
app.listen(3000, function () {
  console.log('Server working!');
});