const mongoose = require("mongoose");

const academicRecordSchema = mongoose.Schema(
  {
    applicationId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Application",
    },
    degreeName: {
      type: String,
      required: true,
    },
    universityName: {
      type: String,
      required: true,
    },
    passingYear: {
      type: Number,
      required: true,
    },
    cgpa: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const AcademicRecord = mongoose.model("AcademicRecord", academicRecordSchema);

module.exports = AcademicRecord;
