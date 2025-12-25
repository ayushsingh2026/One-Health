const patientModel = require("../models/patient"); // make sure patient.js exists in models/
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registerController = async (req, res) => {
  try {
    const { username, email, country, password } = req.body;

    // Check if required fields are missing
    if (!username || !email || !country || !password) {
      return res
        .status(400)
        .send({ message: "All fields are required", success: false });
    }

    // Check if user already exists
    const existingUser = await patientModel.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .send({ message: "User already exists", success: false });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new patient
    const newPatient = new patientModel({
      username,
      email,
      country,
      password: hashedPassword,
    });

    await newPatient.save();

    res
      .status(201)
      .send({ message: "Registered successfully", success: true, data: newPatient });
  } catch (error) {
    console.error("Register Error:", error);
    res
      .status(500)
      .send({ success: false, message: `Register Controller Error: ${error.message}` });
  }
};

module.exports = { registerController };
