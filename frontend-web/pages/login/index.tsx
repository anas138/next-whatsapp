import React,{useEffect} from 'react'
import LoginComp from "../../components/login/login"
import axios from "axios"

function Login() {
  useEffect(()=>{
    axios.get("http://localhost:3001/users/image").then(res=>{
      console.log(res.data,"data")
    })
  })
  return (
    <LoginComp/>
  )
}

export default Login