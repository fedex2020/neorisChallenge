let util 			= require('util'),
    env             = process.env.APP_ENV || 'dev';

let config = require(__dirname + util.format('/%s.config.js', env) );

config.env = env;

module.exports = config;
