const mongoose = require('mongoose');
require('dotenv').config();

const mongoURI = process.env.DB_URL;

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI); // <-- just the URI, no extra code here
    console.log("✅ MongoDB Connected Successfully");
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
