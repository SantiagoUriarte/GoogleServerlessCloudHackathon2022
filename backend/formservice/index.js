const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const helmet = require("helmet");
const templatePath = require("./src/Routes/templates");
const completePath = require("./src/Routes/completed");

// Create Express app
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(helmet());

// Set Routers
app.use("/templates", templatePath);
app.use("/templates/completed", completePath);

//Status Check Route
app.get("/status", (req, res) => {
  res.json({
    statusCode: 200,
    message: "Form microservice is online!",
  });
});

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
        console.log(`Form microservice started on port: ${port}`);
      }
    });
  })
  .catch((err) => {
    console.log(err);
  });
