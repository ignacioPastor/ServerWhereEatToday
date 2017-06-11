
var exports = module.exports = {};

var connectionMDB;

function setUp(connection) {
    connectionMDB = connection;

    exports.Connection = connectionMDB;
}



exports.setUp = setUp;