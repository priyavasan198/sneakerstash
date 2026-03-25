const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())
const sneakers = [
{
id:1,
name:"Air Jordan 1",
brand:"Nike",
size:"9",
price:"150",
image:"/images/jordan.jpg"
},

{
id:2,
name:"Yeezy Boost 350",
brand:"Adidas",
size:"8",
price:"220",
image:"/images/yeezy.jpg"
},

{
id:3,
name:"Chuck Taylor",
brand:"Converse",
size:"7",
price:"80",
image:"/images/converse.jpg"
},

{
id:4,
name:"Puma RS-X",
brand:"Puma",
size:"9",
price:"120",
image:"/images/puma.jpg"
},

{
id:5,
name:"New Balance 574",
brand:"New Balance",
size:"8",
price:"110",
image:"/images/newbalance.jpg"
}

]
app.get("/sneakers",(req,res)=>{
    res.json(sneakers)
})

app.post("/login",(req,res)=>{

const {email,password} = req.body

if(email && password){
res.json({message:"Login Successful"})
}
else{
res.status(400).json({message:"Enter Email & Password"})
}

})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
