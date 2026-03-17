const express = require("express")
const router = express.Router()
const Wishlist = require("../models/Wishlist")

router.post("/add", async (req,res)=>{
  const item = new Wishlist(req.body)
  await item.save()
  res.send("Added to wishlist")
})

router.get("/all", async (req,res)=>{
  const items = await Wishlist.find()
  res.json(items)
})

module.exports = router