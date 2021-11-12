const mongoose = require("mongoose");

const applicationSchema = mongoose.Schema(
  {
    transactionNo: {
      type: String,
      required: true,
    },
    transactionDate: {
      type: Date,
      required: true,
    },
    transactionAmount: {
      type: Number,
      default: 1500,
      required: true,
    },
    programType: {
      type: String,
      required: true,
    },
    program: {
      type: String,
      required: true,
    },
    degreeStatus: {
      type: String,
      required: true,
    },
    netStatus: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Application = mongoose.model("Application", applicationSchema);

module.exports = Application;
