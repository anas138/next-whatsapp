import React from 'react'
import Form from "../../reusable/form/Form"
import {dataTypes} from "../../enums/types"
import { useSession, signIn, signOut } from "next-auth/react"


function Login() {
  const {data:session}=useSession()
    const submitForm=(data:dataTypes)=>{
      signIn("credentials",{
        username:data.username,
        password:data.password,
        redirect:false
      })
    }
    console.log(session,"session")
  return (
    <Form submitForm={submitForm} action={'login'}/>
  )
}

export default Login