const asyncHandler = require("express-async-handler");
const Application = require("../models/applicationModel");

const createApplication = asyncHandler(async (req, res) => {
  const {
    personalDetails,
    transactionNumber,
    transactionDate,
    transactionAmount,
    programType,
    program,
    degreeStatus,
    academicRecords,
    netStatus,
    netRecords,
  } = req.body;

  if (!personalDetails || !transactionNumber || !programType || !program) {
    res.status(400);
    throw new Error("Please provide all the required fields");
  } else {
    const application = new Application({
      name: personalDetails.name,
      gender: personalDetails.gender,
      addressLine1: personalDetails.addressLine1,
      addressLine2: personalDetails.addressLine2,
      city: personalDetails.city,
      state: personalDetails.state,
      country: personalDetails.country,
      pincode: personalDetails.pincode,
      transactionNumber: transactionNumber,
      transactionDate: transactionDate,
      transactionAmount: transactionAmount,
      programType: programType,
      program: program,
      degreeStatus: degreeStatus,
      academicRecords: academicRecords,
      netStatus: netStatus,
      netRecords: netRecords,
    });
    const createdApplication = await application.save();
    res.status(201).json(createdApplication);
  }
});

const getApplicationById = asyncHandler(async (req, res) => {
  const application = await Application.findById(req.params.id);
  if (application) {
    res.json(application);
  } else {
    res.status(404).json({ message: "application not found" });
  }
});

module.exports = { createApplication, getApplicationById };
