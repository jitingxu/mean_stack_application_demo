

var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
    development: {
        db: 'mongodb://localhost/mean_stack_app',
        rootPath:rootPath,
        port:process.env.PORT || 3010
    },
    production: {
        db: 'mongodb://jiting:xujiting1986@ds053788.mongolab.com:53788/mean_stack_app',
        rootPath:rootPath,
        port:process.env.PORT || 80
    }
}