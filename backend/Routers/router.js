const express = require('express');
const {addUsers,login,getAllUsers} = require('../modules/signUpModule/controller')
const {Email} = require("../handler/emailHandler")

const router = express.Router()

router.get("/",(req,res)=>{
    res.send("hello backend")
})
router.post("/users",addUsers)
router.post('/login',login)
router.get('/users',getAllUsers)


module.exports=router