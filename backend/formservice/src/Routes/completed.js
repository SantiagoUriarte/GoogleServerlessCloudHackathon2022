const express = require("express");
const router = express.Router();
const Template = require("../Models/Template");
const fileUpload = require("express-fileupload");
const fs = require("fs");
const ApiResponse = require("../Models/ApiResponse");

/* Route responsible for endpoints relating to completed forms */

// Create completed form
router.post("/", (req, res) => {
  if (!req.files) {
    // Return error
    res.status(400).json({
      statusCode: 400,
      message: "No files found",
    });
  }

  let file = req.files.file;
  let filename = file.name;
  let filepath = "./uploads/" + filename;
  file.mv(filepath);

  fs.readFile(filepath, "utf8", (err, data) => {
    if (err) {
      console.log(err);
      res.json({ message: err });
    }

    const template = new Template({
      fileName: filename,
      completed: true,
    });

    template.fileData.data = data;

    template.save((err) => {
      if (err) {
        // return error
        res.status(500).json({
          statusCode: 500,
          message: err,
        });
      }
      // Return success
      res.status(200).json({
        statusCode: 200,
        message: "successfully created completed form",
      });
    });
  });
});

// Get all completed forms
router.get("/all", async (req, res) => {
  const templates = await Template.find({
    completed: true,
  });

  res.status(200).json({
    statusCode: 200,
    message: "Successfully retrieved completed templates",
    data: templates,
  });
});

module.exports = router;
