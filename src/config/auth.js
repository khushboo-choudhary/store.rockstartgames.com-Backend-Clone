require("dotenv").config();
const User = require("../models/Users.model");
var GoogleStrategy = require("passport-google-oauth2").Strategy;
const passport = require("passport");
const { v4 } = require("uuid");

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "https://clear-pear-tuna.cyclic.app/google/callback",
    },
    async function (request, accessToken, refreshToken, profile, done) {
      let user = await User.findOne({ email: profile?.email }).lean().exec();
      if (!user) {
        let nickName = profile?.email.split("@")[0];
        user = await User.create({
          email: profile?.email,
          password: v4(),
          nickName: nickName,
          profileImage: profile?.photos[0].value,
        });
      }

      return done(null, user);
    }
  )
);

module.exports = passport;
