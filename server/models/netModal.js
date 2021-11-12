const mongoose = require("mongoose");

const newSchema = mongoose.Schema(
  {
    applicationId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Application",
    },
    examName: {
      type: String,
      required: true,
    },
    score: {
      type: String,
      required: true,
    },
    validity: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
const Net = mongoose.model("Net", newSchema);

module.exports = Net;
