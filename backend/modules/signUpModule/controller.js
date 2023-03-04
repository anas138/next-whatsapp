const { addUser, findUserByName,login,updateVerificationCode,getAllUsers } = require('./service')
const {Email} = require("../../handler/emailHandler")
exports.addUsers = async (req, res, next) => {
    const data = req.body
    const findOne = await findUserByName(data.username)
    if (!findOne) {
        const user = await addUser(data)
        if (user) {
            res.send({
                message: "success",
                data: user
            })
        }
    }
    else {
        console.log(findOne, "notttttttttt")
        const error = new Error();
        error.message = "user already exists"
        error.status = "400"
        next(error)
    }


}
exports.login=async(req,res,next)=>{
    console.log(req,"user")
    const code = Math.random().toString(36) 
 const data = req.body;
 const loginUser = await login(data.username,data.password)
  if(loginUser){
      console.log(loginUser,"user")
      const reqEmail = await Email(loginUser.email,code,loginUser.username)
      if(reqEmail){
        const reqEmail = await updateVerificationCode(loginUser.username,code)
        console.log(reqEmail,"res")
        res.send({loginUser})
      }
  }
  else{
      res.send("nouser found")
  }
}

exports.getAllUsers=async(req,res,next)=>{
    const users = await getAllUsers()
    if(users.length){
      res.send(users)
    }
}