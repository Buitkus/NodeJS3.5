const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`Connected to MongoDB ${conn.connection.host}`);
  } catch (err) {
    console.error(`Could not connecto to MongoDB`, err);
  }
};

module.exports = connectDB;
