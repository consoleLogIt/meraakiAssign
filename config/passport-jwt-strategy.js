const passport  = require('passport');
const Users = require("../model/users");
const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;

const opts = {
    jwtFromRequest:ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey :'thisisthekey',
    passReqToCallback: true,
}

passport.use(new JWTStrategy(opts,function(req, JWTPayLoad,done){
    console.log(done,"done")
    Users.findById(JWTPayLoad.id,function(err,user){
        if(user)
        {
            
            req.user = user;
            return done(null,user);

        }
        else if(err)
        {
            console.log(err);
            return; 

        }else{
            return done(null,false);
        }
    })

}))


module.exports = passport;