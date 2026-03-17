const mongoose = require("mongoose")

const WishlistSchema = new mongoose.Schema({
  name: String,
  brand: String,
  expectedPrice: Number
})

module.exports = mongoose.model("Wishlist", WishlistSchema)