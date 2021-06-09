const mongoose = require('mongoose');

const AdminSchema = mongoose.Schema({
    name:{
        type:String,
       
    },
    email:{
        type:String,
       unique:true
    },
    password:{
        type:String,
        
    },
    phone:{
        type:Number,
        unique : true
        
    },
    
  
});

module.exports = mongoose.model('Admin', AdminSchema);