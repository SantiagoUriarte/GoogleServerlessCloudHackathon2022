const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    fileName: String,
    completed: { type: Boolean, default: false },
    fileData: { data: Buffer, contentType: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Template", schema);
