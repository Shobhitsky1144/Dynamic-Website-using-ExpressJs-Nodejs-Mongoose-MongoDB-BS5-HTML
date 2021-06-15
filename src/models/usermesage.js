const express=require('express');
const validator=require('validator')
const mongoose  = require('mongoose');

//define schema
const userSchema=new mongoose.Schema({
  
   name:{
       type:String,
       required:true,
       minLength:3
   },
   email:{
    type:String,
    required:true,
    validate(value){
        if(!validator.isEmail(value)){
            throw new Error("invalid email")
        }
    }
},
   phone:{
    type:Number,
    required:true,
    min:10
},

message:{
    type:String,
    required:true,
     minLength:3
},
date:{
    type:Date,
    default:Date.now
},
})

//Creating a new collection
const User=new mongoose.model("User",userSchema);

module.exports=User;