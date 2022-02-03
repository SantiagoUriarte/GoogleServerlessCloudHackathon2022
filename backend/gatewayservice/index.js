const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const helmet = require("helmet");

// Create Express app
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors()); // Enable CORS so frontend can call backend
app.use(bodyParser.json()); // Translates given data into json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev")); // Give us better logs
app.use(helmet()); // Set HTTP headers in responses so its secure

// Set Routers

// Login 
// Logout 
// Start Transcription
// Get templates, pending forms, completed forms
// Get template by Id 


//Status Check Route
app.get("/status", (req, res) => {
  res.json({
    statusCode: 200,
    message: "Gateway service is online!",
  });
});

// Connect to MongoDB database
const mongoDBconnectionUri = `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASS}@cluster0.uxncl.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`;

// Startup server
console.log("Starting up server...");
console.log("Connecting to MongoDB...");
mongoose
  .connect(mongoDBconnectionUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connected successfully!");
    app.listen(port, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log(`Gateway service started on port: ${port}`);
      }
    });
  })
  .catch((err) => {
    console.log(err);
  });
