var exports = module.exports = {};
//var db = require('./../database');
//var models = db.models;
var Promise = require('promise');
var NAME_COLLECTION = 'users';


exports.getUsers = function(db){
    return new Promise((fulfill, reject) => {
         db.collection('users').find({}).toArray(function(err, docs){
            console.log("docs");
            console.log(docs);
            docs.forEach(function(doc){
                console.log(doc.title);
            });
            fulfill(docs);
        });
    })
}

//Function to get all the clients from the database
// exports.getUsers = function() {
//     //return new Promise((fulfill, reject) => {
//         console.log("userBackend------------1");
//         try{
//          var db2 = req.db;
        
//         db.database.collection('users').find().count().then(result =>{
//             console.log("in then");
//             console.log(result);
//             db.myClose;
//             return result;
//         })
        
        
//         }catch(err){
//             console.log("userBackend------------catch");
//             console.log(err);
//         }
        
//         console.log("userBackend------------2");
//         //console.log(n);
//         console.log("userBackend------------3");
//         //return n;
//    // })
// };

// db.openConnection2().then(res => {
//             console.log("in then openConnection2()");
//             console.log("res: " + res);

//             console.log("db");
//             console.log(db);
//             console.log("userBackend------------1.2");
//             console.log("db.database");
//             console.log(db.database);
//             db.database.collection('users').find().count().then(result =>{
//                 console.log("in then");
//                 console.log(result);
//                 db.myClose;
//                 return result;
//             })
//         })