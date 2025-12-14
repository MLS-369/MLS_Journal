const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const multer = require("multer");

const Manuscript = require("./models/Manuscript");

const app = express();

app.use(cors());
app.use(express.json());

const fs = require("fs");

const uploadDirs = [
  "uploads",
  "uploads/manuscripts",
  "uploads/authorInfo",
  "uploads/declarations",
];

uploadDirs.forEach((dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// =======================
// MongoDB Connection
// =======================
const MONGO_URI =
  "mongodb+srv://praneethkollipara7_db_user:manuscript@manuscript.ketqrjf.mongodb.net/manuscriptDB?retryWrites=true&w=majority";

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB error:", err));

// =======================
// Multer Configuration
// =======================
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (file.fieldname === "manuscript") {
      cb(null, "uploads/manuscripts");
    } else if (file.fieldname === "authorInfo") {
      cb(null, "uploads/authorInfo");
    } else if (file.fieldname === "declaration") {
      cb(null, "uploads/declarations");
    }
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

// =======================
// SUBMIT MANUSCRIPT API
// =======================
app.post(
  "/api/submit-manuscript",
  upload.fields([
    { name: "manuscript", maxCount: 1 },
    { name: "authorInfo", maxCount: 1 },
    { name: "declaration", maxCount: 1 },
  ]),
  async (req, res) => {
    try {
      const {
        fullName,
        email,
        institution,
        title,
        abstract,
        keywords,
      } = req.body;

      const manuscript = new Manuscript({
        fullName,
        email,
        institution,
        title,
        abstract,
        keywords,
        manuscriptFile: req.files.manuscript[0].path,
        authorInfoFile: req.files.authorInfo[0].path,
        declarationFile: req.files.declaration[0].path,
      });

      await manuscript.save();
      console.log(manuscript);
      console.log("Saved to DB:", manuscript._id);
      res.status(201).json({
        message: "✅ Manuscript submitted successfully",
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Submission failed" });
    }
  }
);

// =======================
// PDF DOWNLOAD API
// =======================
app.get("/api/pdf/declaration", (req, res) => {
  const filePath = path.join(__dirname, "files", "Declaration.pdf");

  res.download(filePath, "Declaration.pdf", (err) => {
    if (err) {
      console.error("❌ Error sending PDF:", err);
      res.status(500).send("Unable to download declaration");
    }
  });
});

// =======================
app.listen(5000, () => {
  console.log("🚀 Server running on http://localhost:5000");
});