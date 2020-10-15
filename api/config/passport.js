const TwitterStrategy = require("passport-twitter").Strategy;
const User = require('../models/user.model');

module.exports = function (passport){
    passport.use(new TwitterStrategy(
    {
        consumerKey: process.env.TWITTER_CONSUMER_KEY,
        consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
        callbackURL: "http://localhost:3000/auth/twitter/callback"
    },
    function (token, tokenSecret, profile, cb){
        console.log(profile);
        User.findOrCreate({
            twitterId: profile.id,
            name: profile.name,
            screenName: profile.screen_name,
            profileImage: profile.profile_image_url
        }, function(err, user){
            return cb(err, user);
        });
    }
    ));

    passport.serializeUser((user,done)=>{
        done(null, user.id);
    });
    
    passport.deserializeUser((id,done)=>{
        User.findById(id,(err, user) =>{
            done(err,user);
        });
    });
}
    // async(token, tokenSecret, profile, cb) => {
    //     console.log(profile);
    //     const newUser = {
    //         twitterId: profile.id,
    //         name: profile.name,
    //         screenName: profile.screen_name,
    //         profileImage: profile.profile_image_url,
    //     };
    // let user = await User.findOne({twitterId: profile.id});
    // //if there's a user already in the database
    // if(user){
    //     done(null, user);
    // }
    // else{
    //     user = await User.create(newUser);
    //     done(null, user);



