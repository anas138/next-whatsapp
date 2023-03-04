const mongoose = require('mongoose')


const schema = mongoose.Schema({
    username:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    islogin:{
        type:Boolean,
        default:false,
    },
    isverified:{
        type:Boolean,
        default:false
    },
    verificationCode:{
        type:String,
    }
}) 

const singnUp = mongoose.model('singnups',schema);
module.exports=singnUp