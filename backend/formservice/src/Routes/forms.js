const express = require("express");
const router = express.Router();
const Template = require("../Models/Template");
const fileUpload = require("express-fileupload");
const fs = require("fs");
const ApiResponse = require("../Models/ApiResponse");
const { response } = require("express");

/* Route responsible for endpoints relating to pending/completed forms */

// Create pending form from templateId
router.post("/template/:id", async (req, res) => {
  try {
    const response = new ApiResponse(res);
    const newName = req.body.templateName;

    const template = await Template.findById(req.params.id);
    const pendingTemplate = new Template({
      templateName: newName,
      fileName: template.fileName,
      triggerWords: template.triggerWords,
      status: "pending",
    });

    pendingTemplate.fileData.data = template.fileData.data;
    await pendingTemplate.save();

    return response.success200(
      "Successfully created new pending form",
      (data = [pendingTemplate])
    );
  } catch (err) {
    console.log(err);
    return response.serverError500(err);
  }
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
    return response.success200("Successfully updated form status");
  });
});

module.exports = router;
