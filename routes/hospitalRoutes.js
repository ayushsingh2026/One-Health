const express = require("express");
const multer = require("multer");
const path = require("path");
const router = express.Router();
const hostpitalModel = require("../models/staff")

// Multer storage settings
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/reports"); // make sure "uploads/reports" folder exists
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// Staff/Patient model
const Staff = require("../models/staff");

// ✅ POST route - Add new record
router.post("/addRecord", upload.array("reports"), async (req, res) => {
  try {
    const { date, doctorName, patientId, prescriptions } = req.body;

    // Parse prescriptions (comes as JSON string from frontend)
    let parsedPrescriptions = [];
    try {
      parsedPrescriptions = JSON.parse(prescriptions);
    } catch (err) {
      return res.status(400).json({ success: false, message: "Invalid prescriptions format" });
    }

    // Create a new record
    const staffRecord = new hostpitalModel({
      patientId,
      doctorName,
      date,
      prescriptions: parsedPrescriptions,
      reports: req.files.map((f) => f.filename),
    });



    // Save to MongoDB
    await staffRecord.save();

    res.status(201).json({
      success: true,
      message: "Record saved successfully",
      data: staffRecord,
    });
  } catch (err) {
    console.error("Error saving record:", err);
    res.status(500).json({ success: false, message: "Error saving record" });
  }
});

// ✅ GET route - Fetch all records
router.get("/records", async (req, res) => {
  try {
    const records = await Staff.find();
    res.status(200).json({ success: true, data: records });
  } catch (err) {
    console.error("Error fetching records:", err);
    res.status(500).json({ success: false, message: "Error fetching records" });
  }
});

// ✅ GET route - Fetch records for a specific patientId
router.get("/records/:patientId", async (req, res) => {
  try {
    const { patientId } = req.params;
    const records = await Staff.find({ patientId });

    if (!records.length) {
      return res.status(404).json({ success: false, message: "No records found" });
    }

    res.status(200).json({ success: true, data: records });
  } catch (err) {
    console.error("Error fetching patient records:", err);
    res.status(500).json({ success: false, message: "Error fetching patient records" });
  }
});

// ✅ DELETE route - Remove a record by ID
router.delete("/record/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Staff.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ success: false, message: "Record not found" });
    }

    res.status(200).json({ success: true, message: "Record deleted successfully" });
  } catch (err) {
    console.error("Error deleting record:", err);
    res.status(500).json({ success: false, message: "Error deleting record" });
  }
});

module.exports = router;
