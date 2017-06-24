var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var mongo = require('mongodb');
var monk = require('monk');
//var db = monk('localhost:27017/where-eat-today');

var MongoClient = require('mongodb').MongoClient,
    assert = require('assert');

var db;
MongoClient.connect('mongodb://localhost:27017/where-eat-today', function(err, database){
        assert.equal(null, err);
        console.log("Successfully connected to server");
        db = database;
    });


// var index = require('./routes/index');
var user = require('./routes/user');

var app = express();

console.log("app.js--------------------1");
// var db = require('./public/javascripts/database');
// db.openConnection2();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(errorHandler);

// Make our db accessible to our router
console.log("app.js--------------------2");
var myRes;
app.use(function(req,res,next){
console.log("app.js--------------------3");
    req.db = db;
    myRes = res;
    next();
});

// process.on('uncaughtException', function(err) {
//     // handle the error safely
//     console.log("11111111111111111111");
//     // console.log(err)
//     // console.log("2222222222222222");
//     //console.log(myRes);
//     myRes.status(502).end(err.toString());
// })

// app.use('/', index);
app.use('/user', user);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
