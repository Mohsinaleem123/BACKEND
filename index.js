const express = require('express');
const mongoose = require ('mongoose');

const app= express()
app.use(express.json());
//const jwt = require('jsonwebtoken');
const User = require("./User");
//const Student = require("./models/Student");

mongoose.connect("mongodb+srv://MASINNERX:KfU4xdm3irxtJTVx@cluster0.3ihlz.mongodb.net/LMSDATA",{
    useNewUrlParser:true,
    

});

// const dotenv = require('dotenv');

// // get config vars
// dotenv.config();
// // access config var
// process.env.TOKEN_SECRET;
// function generateAccessToken(username) {
//     return jwt.sign(username, process.env.TOKEN_SECRET, { expiresIn: '1800s' });
//   }
// app.post("/login",(req,res)=>{
//     const {User_ID,password} =req.body;
//     User.findOne({User_ID:User_ID},(err,user)=>{
//         if(User){
//           if(password === user.password){
//             const token = generateAccessToken({ User_ID});
            
//           User.findByIdAndUpdate({_id:user._id}, {token_auth:token}, function(err, data) {
//             if(err){
//                     res.send('Something Goes to Wrong!');
//                     return ;
                    
//             }
//             else{
              
//               res.send({message:"login sucess",User:user,token});
         
//             }
//            } ); 
           
        
//         }
//            else{
//                res.send({message:"wrong credentials"})
//            }
//         }
//         else{
//             res.send("not register")
//         }
//     })
// });
app.post("/register",(req,res)=>{
    console.log(req.body) 
    const {User_ID,name,password} =req.body;
    User.findOne({User_ID:User_ID},(err,User)=>{
        if(User){
            res.send({message:"user already exist"})
        }else {
            const User_new = new User({name,User_ID,password})
            User.save(err=>{
                if(err){
                    res.send(err)
                }else{
                    res.send({message:"sucessfull"})
                }
            })
        }
    })


}) 

app.post("/insertstudent", async(req, res)=>{
    const Student_new =new Student(
        {
            Student_ID:"02",
            Name:"NEW Student",
            password:"pass",
            token_auth:""
        }
    );
    try{
    await Student_new.save();
    console.log("datainset");

    }catch(err){
        console.log("data not inset");
        console.log(err);
    }
});
app.post("/updateuser", async(req,res)=>{
    User_ID=req.body.User_ID;
    var data = req.body ;
    var dummy ={Name:"onetwo", User_ID:"01"};
    User.findOne({User_ID:User_ID},(err,user)=>{
        if(User){
            User.findByIdAndUpdate({_id:user._id},dummy,function(err, data) {
                if(err){
                        res.send('Something Goes to Wrong!');
                        return ;
                        
                }
                else{
                  
                  res.send({message:"updated "});
             
                }
            });

        
        }
        else {
            res.send("something wrong");
        }
});
}
);
app.post("/insertuser", async(req, res)=>{
    const User_new =new User(
        {
            User_ID:"0323",
            Name:"NEW Useer",
            password:"pass",
            token_auth:""
        }
    );
    try{
    await User_new.save();
    console.log("datainset");

    }catch(err){
        console.log("data not inset");
        console.log(err);
    }
});
app.listen(3000,()=>{
    console.log(" server started");

});
