const express = require("express");

const app = express();
const port = process.env.PORT || 3002;

app.get("/about", (req, res) => {
  res.send("This is the test microservice");
});

app.listen(port, () => {
  console.log(`Test microservice started on port ${port}`);
});
