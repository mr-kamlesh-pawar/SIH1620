const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({
  path: "./.env",
});

const connectDB = async () => {
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
      console.log("MongoDB connected Successfully!!");
    })
    .catch((error) => {
      console.error(error);
      console.log("MongoDB connection Failed!!");
    });
};
module.exports = connectDB;
