const mongoose = require("mongoose");

/*
 * MongoDB model that represents a template form.
 * File data is a binary buffer containing the string contents of the html file
 */
const schema = mongoose.Schema(
  {
    templateName: String,
    fileName: String,
    completed: { type: Boolean, default: false },
    fileData: { data: Buffer, contentType: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Template", schema);
