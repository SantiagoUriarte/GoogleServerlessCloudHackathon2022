const express = require("express");
const router = express.Router();
const Template = require("../Models/Template");
const fileUpload = require("express-fileupload");
const fs = require("fs");
const ApiResponse = require("../Models/ApiResponse");

router.use(
  fileUpload({
    createParentPath: true,
  })
);

// Create template
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
        message: "successfully created template",
      });
    });
  });
});

// Get a template
router.get("/template/:id", async (req, res) => {
  console.log(req.query.id);
  const template = await Template.findById(req.params.id);

  if (!template) {
    // Return not found
    res.status(404).json({
      statusCode: 404,
      message: "Template with Id not found",
    });
  }

  res.status(200).json({
    statusCode: 200,
    message: "Successfully retrieved template",
    data: [template],
  });
});

// Get all templates
router.get("/all", async (req, res) => {
  const templates = await Template.find({
    completed: false,
  });

  res.status(200).json({
    statusCode: 200,
    message: "Successfully retrieved templates",
    data: templates,
  });
});

// Delete a template
router.delete("/template/:id", async (req, res) => {
  await Template.findByIdAndDelete(req.params.id);

  res.status(200).json({
    statusCode: 200,
    message: "Successfully deleted template",
  });
});

module.exports = router;
