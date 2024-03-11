const mongoose = require("mongoose");

const DB_URI =
  "mongodb+srv://sofiamino78:Libertad2023@cluster0.fnfsygl.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0";

const connectDB = async () => {
  try {
    await mongoose.connect(DB_URI);
    console.log("Database connected");
  } catch (error) {
    console.log("Error while connecting" + error.message);
  }
};

module.exports = connectDB;
