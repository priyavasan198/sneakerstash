const express = require("express")
const router = express.Router()
const User = require("../models/User")

router.post("/register", async (req,res)=>{
  const user = new User(req.body)
  await user.save()
  res.send("User Registered")
})

router.post("/login", async (req,res)=>{
  const user = await User.findOne(req.body)

  if(user){
    res.send("Login Successful")
  } else {
    res.send("Invalid login")
  }
})

module.exports = router