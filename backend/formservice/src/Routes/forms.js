const express = require("express");
const router = express.Router();
const Template = require("../Models/Template");
const fileUpload = require("express-fileupload");
const fs = require("fs");
const ApiResponse = require("../Models/ApiResponse");
const { response } = require("express");

/* Route responsible for endpoints relating to pending/completed forms */

// Create pending form
router.post("/", (req, res) => {
  const response = new ApiResponse(res);

  console.log(req.files);

  if (!req.files) {
    // Return error
    response.badRequest400("No files found");
  }

  let file = req.files.file;
  let templateName = req.body.templateName;
  let filename = file.name;
  let filepath = "./tmp/" + filename;
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
        return response.serverError500(err);
      }
      // Return success
      return response.success200(
        "successfully created new pending form",
        (data = [template])
      );
    });
  });
});

// Get all pending forms
router.get("/pending", async (req, res) => {
  const response = new ApiResponse(res);

  const templates = await Template.find({
    status: "pending",
  });

  if (templates.length == 0) {
    return response.successNoContent202("No pending templates found");
  }

  return response.success200(
    (message = "Successfully retrieved pending templates"),
    (data = templates)
  );
});

// Get all completed forms
router.get("/completed", async (req, res) => {
  const response = new ApiResponse(res);

  const templates = await Template.find({
    status: "completed",
  });

  if (templates.length == 0) {
    return response.successNoContent202("No completed templates found");
  }

  return response.success200(
    (message = "Successfully retrieved completed templates"),
    (data = templates)
  );
});

// Update form status
router.patch("/status/:id", async (req, res) => {
  const response = new ApiResponse(res);
  const templateId = req.params.id;
  const newStatus = req.query.newStatus?.toLowerCase();

  if (newStatus != "pending" && newStatus != "completed") {
    response.badRequest400(
      `Invalid status set. Please use only 'pending' or 'completed'`
    );
  }

  Template.findByIdAndUpdate(templateId, { status: newStatus }, (err, data) => {
    if (err) {
      return response.serverError500(err);
    }
    return response.success200("Successfully updated form");
  });
});

module.exports = router;
