//Express is a node.js library that makes creating servers easy
const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");

const app = express();
const port = process.env.PORT || 3002;

app.disable("etag"); //Disable cache to prevent 304 no changes
app.use(morgan()); //Create more descriptive logs
app.use(helmet()); //Set http security headers

// route
app.get("/about", (req, res) => {
  res.send("This is the test microservice");
});

app.listen(port, () => {
  console.log(`Test microservice started on port: ${port}`);
});
