const mongoose = require('mongoose');

const BuyerSchema = mongoose.Schema({
    first_name:{
        type:String,
       
    },
    last_name:{
        type:String,
       
    },
    email:{
        type:String,
       
    },
    password:{
        type:String,
        
    },
    phone:{
        type:Number,
        
    },
    
  
});

module.exports = mongoose.model('Buyer', BuyerSchema);