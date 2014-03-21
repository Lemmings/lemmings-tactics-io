var twitter = null;
exports.initialize = function(){
    twitter = require('twitter');
};
exports.finalize = function(){
};
exports.run = function(inputTools, callback){
    var args = inputTools.args();
    var data = inputTools.kvs[args.input];
    var config = inputTools.config;
    var TWITTER_MAXLEN = 140;

    var bot = new twitter({
        consumer_key        : config['twitter_consumer_key'],
        consumer_secret     : config['twitter_consumer_secret'],
        access_token_key    : config['twitter_access_token_key'],
        access_token_secret : config['twitter_access_token_secret'],
    });
    switch(typeof data){
    case 'string':
        var msg = data;
        bot.updateStatus(msg.slice(0, TWITTER_MAXLEN), function (result) {
            console.log(result);
        });
        break;
    }
};
