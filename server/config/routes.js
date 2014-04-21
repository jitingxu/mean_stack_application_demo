

var passport = require('passport');

module.exports = function(app){

    app.get('/partials/*', function(reg, res){
        res.render('../../public/app/' + reg.params);
    });

    app.post('/login',function(reg,res,next){
        var auth = passport.authenticate('local',function(err, user){
            if(err) {return next(err);}
            if(!user){res.send({success:false});}
            reg.logIn(user,function(err){
                if(err){return next(err);}
                res.send({success:true,user:user});
            })
        })

        auth(reg, res,next);
    });

    app.get('*', function (reg, res){
        res.render('index');
        /*, {
         mongoMessage: mongoMessage
         });
         */
    });
}