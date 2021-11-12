const mongoose = require("mongoose");

// Connect to MongoDB
const connectDB = async () => {
  try {
    // Connect to MongoDB
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    // Exit process with failure
    console.error(`Error: ${error.message}`);
    process.exit();
  }
};

module.exports = connectDB;
