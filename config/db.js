const mongoose = require("mongoose");

const localUrl = process.env.MONGO_URI_LOCAL;
const liveUrl = process.env.MONGO_URI_LIVE;

const connectDB = async () => {
  try {
    await mongoose.connect(liveUrl);
    console.log("MongoDb connected lively");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = connectDB;
