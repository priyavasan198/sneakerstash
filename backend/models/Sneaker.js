const mongoose = require("mongoose")

const SneakerSchema = new mongoose.Schema({

name:String,
brand:String,
price:String

})

module.exports = mongoose.model("Sneaker",SneakerSchema)