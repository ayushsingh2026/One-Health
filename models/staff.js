const mongoose = require("mongoose");

const staffSchema = new mongoose.Schema({
  patientId: String,
  doctorName: String,
  date: Date,
  prescriptions: [{ name: String, mg: String }],
  reports: [String],
});


module.exports = mongoose.model("Staff", staffSchema);
