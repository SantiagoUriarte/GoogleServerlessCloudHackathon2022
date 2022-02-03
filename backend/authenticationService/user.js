const mongoose = require("mongoose");
const user = new mongoose.Schema({
  username: String,
  password: String,
  name: String,
  company: String,
  accountLevel: String,
});

module.exports = mongoose.model("User", user);
