const express = require("express");
const router = express.Router();
const Template = require("../Models/Template");
const fs = require("fs");
const ApiResponse = require("../Models/ApiResponse");

/* Route responsible for endpoints relating to forms */

// Get all completed forms
router.get("/all", async (req, res) => {
  const response = new ApiResponse(res);

  const templates = await Template.find({
    status: "completed",
  });

  if (templates.length == 0) {
    response.successNoContent202("No completed templates found");
  }

  response.success200(
    (message = "Successfully retrieved completed templates"),
    (data = templates)
  );
});

module.exports = router;
