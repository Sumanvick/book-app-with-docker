const express = require('express');
const bodyParser = require('body-parser');
const app = express();
// const mongodb = require('mongodb');
const PORT = 4000;

const config = require('./db');

var mongoose = require('mongoose');
mongoose.connect(config.DB, {useUnifiedTopology: true, useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('Database connected..');
});


// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// Require Notes routes

app.get('/', function(req, res) {
    res.json({"hello": "world"});
});

require('./routes/book.routes.js')(app);

app.listen(PORT, function(){
    console.log('Your node js server is running on PORT:',PORT);
});
