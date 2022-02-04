const mongoose = require("mongoose");

/*
 * MongoDB model that represents a template form.
 * File data is a binary buffer containing the string contents of the html file
 */
const schema = mongoose.Schema(
  {
    templateName: String,
    fileName: String,
    status: String, // Status can be: template(base form), pending, completed
    triggerWords: Array,
    fileData: { data: Buffer, contentType: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Template", schema);
