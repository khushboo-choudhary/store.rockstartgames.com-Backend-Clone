require("dotenv").config();
const express = require("express");
const connect = require("./config/db");
const { login, register, newToken } = require("./controllers/auth.controller");
const userController = require("./controllers/user.controller");
const passport = require("./config/auth");
const gearController = require("./controllers/gear.controller");
const gamesController = require("./controllers/games.controller");
const collController = require("./controllers/coll.controller");
const paymentController = require("./controllers/payment.controller");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

//starting api routers and methods from here.
//sending this call to respective controllers to find route and desired method.

//user controller
app.use("/users", userController);

//login and register controller
app.post("/login", login);
app.post("/register", register);

//api for payment gateway
app.use("/payment", paymentController);

//routes from aman code
app.use("/gear", gearController);
app.use("/games", gamesController);
app.use("/coll", collController);

//google oauth
passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

app.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/auth/google/failure",
  }),
  (req, res) => {
    const { user } = req;
    console.log(req);
    const token = newToken(user);
    return res.redirect(
      `https://store-rockstartgames-com-frontend-clone.vercel.app/google-oauth2success?token=${token}&nickName=${user.nickName}&profileImage=${user.profileImage}`
    );
  }
);

app.get("/auth/google/failure", (req, res) => {
  return res.status(400).json({ msg: "Login Failed" });
});

//connecting ans starting server
const port = process.env.PORT || 1698;

app.listen(port, () => {
  try {
    connect();
    console.log(`Server is running on port ${port}`);
  } catch (err) {}
});
