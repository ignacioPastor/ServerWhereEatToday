var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');
  var models = require('./models');
  var exports = module.exports = {};

// Connection URL
var url = 'mongodb://localhost:27017/where_eat_today';
var dBase = null;
// Use connect method to connect to the server
var myOpen = function openConnection(){
    console.log("openConnection()");
    MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    console.log("Connected successfully to server");
    dBase = db;
        // db.collection('users').find().count().then(result =>{
        // console.log("in then");
        // console.log(result);
        // })
    console.log("lets see n");
    //console.log(n);
    console.log("database.js-------db");
    console.log(db);
    console.log("database.js-------dBase");
    console.log(dBase);
    // db.close();
    });
}
exports.openConnection2 = function(){
    console.log("openConnection()");
    MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    console.log("Connected successfully to server");
    dBase = db;
        // db.collection('users').find().count().then(result =>{
        // console.log("in then");
        // console.log(result);
        // })
    console.log("lets see n");
    //console.log(n);
    console.log("database.js-------db");
    console.log(db);
    console.log("database.js-------dBase");
    console.log(dBase);
    return true;
    // db.close();
    });
}


var myClose = function closeConnection(){
    console.log("closeConnection()-----------1");
    dBase.close();
    console.log("closeConnection()-----------2");
}


models.setUp(dBase);
exports.myOpen;
exports.myClose;
exports.database = dBase;
exports.models = models;
