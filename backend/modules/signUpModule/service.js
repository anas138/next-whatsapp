const userSchema = require("./model")

exports.addUser = async (data) => {
    try {
        const user = new userSchema(data)
        const response = await user.save()
        if (response) {
            return response
        }
    }
    catch (error) {
        console.log(error)
    }


}

exports.findUserByName = async (name) => {
    console.log(name,"name")
    try {
        const user = await userSchema.findOne({ username: name })
        console.log(user,"userrrrrrrr")
        if (user) {
            return user
        }
       return;
    } catch (error) {
        console.log(error)
    }

}
exports.login=async(username,password)=>{
  try{
      const user = await userSchema.findOne({username:username,password:password})
      if(user){
          return user
      }
      return;
  }catch(error){}
}

exports.updateVerificationCode=async(name,code)=>{
   const update  = await userSchema.updateOne({name:name},{
    verificationCode:code
   })
   if(update){
       return update
   }
   return;
}
exports.getAllUsers=async()=>{
  const users = await userSchema.find()
  console.log(users,"usersss")
  if(users.length){
      return users
  }
  return;
}