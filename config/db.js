const mongoose = require("mongoose");

const mongoURL = "mongodb://localhost:27017/Onehealth";

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ Database connected");
  } catch (err) {
    console.error("❌ Database not connected:", err.message);
    process.exit(1); // stop server if DB fails
  }
};

// Extra: handle disconnection
mongoose.connection.on("disconnected", () => {
  console.log("⚠️ Database disconnected");
});

module.exports = connectDB;  // <-- correctly export the function
