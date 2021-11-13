const mongoose = require("mongoose");

const applicationSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    addressLine1: {
      type: String,
      required: true,
    },
    addressLine2: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    pincode: {
      type: String,
      required: true,
    },
    transactionNumber: {
      type: String,
      required: true,
    },
    transactionDate: {
      type: Date,
      required: true,
    },
    transactionAmount: {
      type: String,
      default: "1500",
      required: true,
    },
    programmeType: {
      type: String,
      required: true,
    },
    programme: {
      type: String,
      required: true,
    },
    degreeStatus: {
      type: String,
      required: true,
    },
    academicRecords: {
      type: Array,
      required: true,
    },
    netStatus: {
      type: String,
      required: true,
    },
    netRecords: {
      type: Array,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Application = mongoose.model("Application", applicationSchema);

module.exports = Application;
