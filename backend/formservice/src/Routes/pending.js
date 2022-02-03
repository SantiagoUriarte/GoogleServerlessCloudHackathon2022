const express = require("express");
const router = express.Router();
const Template = require("../Models/Template");
const fs = require("fs");
const ApiResponse = require("../Models/ApiResponse");

/* Route responsible for endpoints relating to completed forms */

// Create pending form
router.post("/", (req, res) => {
  const response = new ApiResponse(res);

  if (!req.files) {
    // Return error
    response.badRequest400("No files found");
  }

  let file = req.files.file;
  let templateName = req.body.templateName;
  let filename = file.name;
  let filepath = "./uploads/" + filename;
  file.mv(filepath);

  fs.readFile(filepath, "utf8", (err, data) => {
    if (err) {
      console.log(err);
      res.json({ message: err });
    }

    const template = new Template({
      templateName: templateName,
      fileName: filename,
      status: "pending",
    });

    template.fileData.data = data;

    template.save((err) => {
      if (err) {
        // return error
        response.serverError500(err);
      }
      // Return success
      response.success200(
        "successfully created pending form",
        (data = [template])
      );
    });
  });
});

// Get all pending forms
router.get("/all", async (req, res) => {
  const response = new ApiResponse(res);

  const templates = await Template.find({
    status: "pending",
  });

  if (templates.length == 0) {
    response.successNoContent202("No pending templates found");
  }

  response.success200(
    (message = "Successfully retrieved pending templates"),
    (data = templates)
  );
});

module.exports = router;
