const express = require("express")
const router = express.Router()

const Sneaker = require("../models/Sneaker")

router.post("/add", async(req,res)=>{

const sneaker = new Sneaker(req.body)

await sneaker.save()

res.send("Sneaker Added")

})

router.get("/all", async(req,res)=>{

const sneakers = await Sneaker.find()

res.json(sneakers)

})

module.exports = router