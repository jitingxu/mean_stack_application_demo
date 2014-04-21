
var mongoose = require('mongoose');
/*
 var messageSchema = mongoose.Schema({message: String});
 var Message = mongoose.model('Message', messageSchema);
 var mongoMessage;
 Message.findOne().exec(function(err, messageDoc){
 mongoMessage=messageDoc.message;
 });

 */




module.exports = function(config){
    mongoose.connect(config.db);
    /*
     //mongodb://<dbuser>:<dbpassword>@ds053788.mongolab.com:53788/mean_stack_app
     //mongoose.connect('mongodb://localhost/mean_stack_app');
     if(env === 'development'){
     mongoose.connect('mongodb://localhost/mean_stack_app');
     }else{
     mongoose.connect('mongodb://jiting:xujiting1986@ds053788.mongolab.com:53788/mean_stack_app');
     }
     */

    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error'));
    db.once('open', function callback() {
        console.log('mean_stack db opened');
    });

    var userSchema = mongoose.Schema({
        firstName: String,
        lastName: String,
        username: String
    });

    var User = mongoose.model('User',userSchema);

    User.find({}).exec(function(err, collection){
        if(collection.length == 0){
            User.create({firstName: 'Jiting', lastName:'Xu', username:'jiting'});
            User.create({firstName: 'Can', lastName:'Chen', username:'can'});
            User.create({firstName: 'Ben', lastName:'Xu', username:'ben'});
        }
    });

}

