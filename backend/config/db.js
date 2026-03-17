const mongoose = require("mongoose")

function connectDB() {
  mongoose.connect("mongodb://127.0.0.1:27017/sneakerstash")
  console.log("MongoDB Connected")
}

module.exports = connectDB