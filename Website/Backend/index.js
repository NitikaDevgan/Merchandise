
const express = require("express");
const collection = require("./model");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");


 app.use(cors())
app.use(express.json())
//app.set("view engine","hbs")

app.use(express.urlencoded())
 mongoose.connect("mongodb://127.0.0.1:27017/aution", {
  useNewUrlParser: true,
  useUnifiedTopology:true
}, ()=>{
  console.log("connected")
})
//Routes
// app.get("/",(req,res) => {
//   res.send("My API")
// })

// const userSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   password: String
// })

// const User = new mongoose.model("User",userSchema)

// app.post("/login",(req,res) => {
//   res.send("My API login")
// })

// app.get('/Resgistration',(req,res)=>{

// })

// app.post("/registration",(req,res) => {
//     const { name,email,password } =req.body
//     User.findOne({email:email},(err,user) => {
//       if(user){
//         res.send({message: "User already registered"})
//       }else {
//         const user = new User({
//           name,
//           email,
//           password
//         })
//         user.save(err =>{
//           if(err){
//             res.send(err)
//           } else {
//             res.send({message: "Successfully Registered"})
//           }
//         })
//       }
//     })
    
// })

app.get('/Resgistration',(req,res)=>{

})

app.post('/Registration',async (req,res)=>{
    const{email,password,name}=req.body
      const data={
        name:name,
        email:email,
        password:password
      }
      
      const check=await collection.findOne({name:name,email:email,password:password})
      if(check)
      {
        res.json("exist")
      }
      else{
        res.json("not exist")
        await collection.insertMany([data])
      }
    
})

app.get('/Login',(req,res)=>{

})


app.post('/Login',async (req,res)=>{
    const{name,password}=req.body

    try{
          const check=await collection.findOne({name:name,password:password})
          if(check)
          {
            res.json("exist")
          }
          else{
            res.json("not exist")
          }
    }
    catch(e){
        res.json("notexist")
    }
})

app.listen(4000, ()=> {
  console.log("Server is running on Port 4000 ");
})





// import express from "express"
// import cors from "cors"
// import mongoose from "mongoose"


// const app = require("express");
// app.use(express.json())
// app.use(express.urlencoded())
// app.use(cors())

// mongoose.connect("mongodb://localhost:2017//myLoginRegisterDB",{
//   useNewUrlParser:true,
//   useUnifiedTopology:true
// },() => {
//     console.log("DB connected")
// })

// app.get("/",(req,res) => {
//   res.send("My API")
// })


// app.listen(3000,() => {
//   console.log("Port started at port 3000")
// })





