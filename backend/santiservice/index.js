const express = require("express");

const app = express();
const port = process.env.PORT || 3001;

app.get("/about", (req, res) => {
  res.send("This is the santi microservice");
});

app.listen(port, () => {
  console.log(`Santi microservice started on port ${port}`);
});
