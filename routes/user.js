var express = require('express');
var router = express.Router();
var userBackend = require('../public/javascripts/backends/userBackend');

// router.get('/', function(req, res, next) {
//     console.log("user.js---------------------1");
//     userBackend.getUsers()
//         .then(users => {
//     console.log("user.js---------------------2");
//             res.json(users);
//         })
//         .catch(error => {
//     console.log("user.js---------------------3");
//             res.status(500).end(error);
//         });
// });

// router.get('/', function(req, res) {
//     console.log("userBackend-------------------1");
//     var db = req.db;
//     console.log(db)
//     var collection = db.get('users');
//     console.log("collection");
//     console.log(collection);
//     db.collection('users').find({},{},function(e,docs){
//     console.log("userBackend-------------------2");
//     console.log(docs);
//         res.render('userlist', {
//             "userlist" : docs
//         });
//     });
// });

var MongoClient = require('mongodb').MongoClient,
    assert = require('assert');

router.get('/', function(req, res) {
    console.log("user.js----------------1");
    MongoClient.connect('mongodb://localhost:27017/where-eat-today', function(err, db){
    console.log("user.js----------------2");
        assert.equal(null, err);
        console.log("Successfully connected to server");
        userBackend.getUsers(db).then(users => {
    console.log("user.js----------------3");
            db.close();
    console.log("user.js----------------4");
            res.json(users);
        })
        .catch(error => {
    console.log("user.js----------------5"); 
            res.status(500).end(error);
        });
        
        console.log("Called find()");
    });
});


/*

//ESTO FUNCIONA

var MongoClient = require('mongodb').MongoClient,
    assert = require('assert');

router.get('/', function(req, res) {
    MongoClient.connect('mongodb://localhost:27017/where-eat-today', function(err, db){
        assert.equal(null, err);
        console.log("Successfully connected to server");

        db.collection('users').find({}).toArray(function(err, docs){
            console.log("docs");
            console.log(docs);
            docs.forEach(function(doc){
                console.log(doc.title);
            });
            
            db.close();
            res.send(docs);
        });
        console.log("Called find()");
    });
});
*/

module.exports = router;