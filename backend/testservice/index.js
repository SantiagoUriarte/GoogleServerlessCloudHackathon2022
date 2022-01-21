//Express is a node.js library that makes creating servers easy

const express = require("express");

const app = express();
const port = process.env.PORT || 3002;

// route 
app.get("/about", (req, res) => {
  res.send("This is the test microservice");
});

app.listen(port, () => {
  console.log(`Test microservice started on port ${port}`);
});
