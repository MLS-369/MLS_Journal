const mongoose = require("mongoose");

const manuscriptSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    institution: { type: String },
    title: { type: String, required: true },
    abstract: { type: String, required: true },
    keywords: { type: String, required: true },

    manuscriptFile: { type: String, required: true },
    authorInfoFile: { type: String, required: true },
    declarationFile: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Manuscript", manuscriptSchema);