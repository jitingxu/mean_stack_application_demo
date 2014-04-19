var express = require('express'),
    stylus = require('stylus'),
    mongoose = require('mongoose');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = new express();

function compile(str, path){
    return stylus(str).set('filename', path);
}

app.configure(function() {
    app.set('views',__dirname + '/server/views');
    app.set('view engine', 'jade');
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(stylus.middleware(
        {
            src:__dirname + '/public',
            compile: compile
        }
    ));

    app.use(express.static(__dirname+'/public'));
});

//mongodb://<dbuser>:<dbpassword>@ds053788.mongolab.com:53788/mean_stack_app
//mongoose.connect('mongodb://localhost/mean_stack_app');
if(env === 'development'){
    mongoose.connect('mongodb://localhost/mean_stack_app');
}else{
    mongoose.connect('mongodb://jiting:xujiting1986@ds053788.mongolab.com:53788/mean_stack_app');
}

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function callback() {
    console.log('mean_stack db opened');
});

var messageSchema = mongoose.Schema({message: String});
var Message = mongoose.model('Message', messageSchema);
var mongoMessage;
Message.findOne().exec(function(err, messageDoc){
    mongoMessage=messageDoc.message;
});


app.get('/partials/:partialPath', function(reg, res){
    res.render('partials/' + reg.params.partialPath);
})

app.get('*', function (reg, res){
    res.render('index', {
        mongoMessage: mongoMessage
    });
});


var port = process.env.PORT || 3010;

app.listen(port);


console.log('running on port '+ port);