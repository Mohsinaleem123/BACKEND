const mongoose = require("mongoose");
const User_det =new mongoose.Schema({
    User_ID:{
        type:String,
        required:true
    },
    Name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }, 
    token_auth:{
        type:String
    }

});

const User = mongoose.model("User",User_det);
module.exports=User;