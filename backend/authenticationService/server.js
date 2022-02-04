const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const passport = require("passport");
const passportLocal = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const session = require("express-session");
const bodyParser = require("body-parser");
const app = express();
const User = require("./user");
const port = process.env.PORT || 3000;

// ------------------------------ End of Imports ------------------------------ //

mongoose.connect(
  `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASS}@cluster0.uxncl.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,
  () => {
    console.log("Mongoose is Connected!");
  }
);
// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(
  session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true,
  })
);

app.use(cookieParser("secretcode"));
app.use(passport.initialize());
app.use(passport.session());
require("./passportConfig")(passport);

// ------------------------------ End of Middleware ------------------------------ //

// Routes
app.post("/register", (req, res) => {
  User.findOne({ username: req.body.username }, async (err, doc) => {
    if (err) throw err;
    if (doc) res.send("User Already Exists");
    if (!doc) {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      const newUser = new User({
        username: req.body.username,
        password: hashedPassword,
        name: req.body.name,
        company: req.body.company,
        accountLevel: req.body.accountLevel,
      });
      await newUser.save();
      res.status(205).send("User Created");
    }
  });
});
app.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) throw err;
    if (!user) res.send("No User Exists");
    else {
      req.logIn(user, (err) => {
        if (err) throw err;
        res.status(200).send("Successfully Authenticated");
      });
    }
  })(req, res, next);
});

app.get("/user", (req, res) => {
  if (req.user) {
    res.status(200).send(req.user);
  } else {
    res.status(401).send("User Is Not Logged In");
  }
});

app.post("/logout", (req, res) => {
  req.logout();
  res.status(200).send("Successfully Logged Out");
});

// ------------------------------ End of Routes ------------------------------ //

// Connect to MongoDB database
const mongoDBconnectionUri = `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASS}@cluster0.uxncl.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`;
console.log("Connecting to MongoDB...");
mongoose
  .connect(mongoDBconnectionUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connected successfully!");
    // Startup server
    console.log("Starting up server...");
    app.listen(port, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log(`Authentication microservice started on port: ${port}`);
      }
    });
  })
  .catch((err) => {
    console.log(err);
  });
