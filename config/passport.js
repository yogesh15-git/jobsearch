const passport=require('passport');
const localstrategy=require('passport-local').Strategy;
const mongoose=require('mongoose');

passport.use(new localstrategy({usernameField:'username'},
(username,done)=>
{
    username.findOne({username:username},
        (err,user)=>
        {
            if(err)
            return done(err);
            else if(!user)
            return done(null,false,{message:"username doesnot exist"});

            else if(!user.verifypassword(password))
            return done(null,false,{message:"password doesnot match"});
            else
            return done(null,user);
        })
}))