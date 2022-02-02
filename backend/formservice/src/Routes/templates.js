const express = require("express");
const router = express.Router();
const Template = require("../Models/Template");
const fileUpload = require("express-fileupload");
const fs = require("fs");
const ApiResponse = require("../Models/ApiResponse");
const { response } = require("express");

/* Route responsible for endpoints relating to templates */

// Set middleware
router.use(
  fileUpload({
    createParentPath: true,
  })
);

// Create template
router.post("/", (req, res) => {
  const response = new ApiResponse(res);
  if (!req.files) {
    // Return error
    response.badRequest400("No files sent");
  }

  let file = req.files.file;
  let templateName = req.body.templateName;
  let filename = file.name;
  let filepath = "./uploads/" + filename;
  file.mv(filepath);

  fs.readFile(filepath, "utf8", (err, data) => {
    if (err) {
      response.serverError500(err);
    }

    const template = new Template({
      templateName: templateName,
      fileName: filename,
      status: "template",
    });

    console.log(data);
    template.fileData.data = data;

    template.save((err) => {
      if (err) {
        // return error
        response.serverError500(err);
      }
      // Return success
      response.success200("Successfully created template", (data = [template]));
    });
  });
});

// Get a template
router.get("/template/:id", async (req, res) => {
  const response = new ApiResponse(res);
  console.log(req.query.id);
  const template = await Template.findById(req.params.id);

  if (!template) {
    // Return not found
    response.notFound404("No template with Id found");
  }

  response.success200(
    (message = "Template with Id found"),
    (data = [template])
  );
});

// Get all non-completed templates
router.get("/all", async (req, res) => {
  const response = new ApiResponse(res);
  const templates = await Template.find({
    status: "template",
  });

  if (templates.length == 0) {
    response.successNoContent202("No non-completed templates found");
  }

  response.success200(
    (message = "Successfully found all non-completed templates"),
    (data = templates)
  );
});

// Delete a template
router.delete("/template/:id", async (req, res) => {
  const response = new ApiResponse(res);
  await Template.findByIdAndDelete(req.params.id);

  response.success200("Successfully deleted template");
});

module.exports = router;
