var mysql = null;
exports.initialize = function(){
    mysql = require('mysql');
};
exports.finalize = function(){};
exports.run = function(inputTools, callback){
    var args = inputTools.args();
    var data = inputTools.kvs[args.input];
    var config = inputTools.config;
    var cl = mysql.createClient({
        user: config.mysql_user,
        password: config.mysql_password,
        host: config.mysql_host,
        database: config.mysql_database,
    });
    cl.query(args.sql, [], function(err, res){
        callback(err, res);
    });
    cl.end();
};
