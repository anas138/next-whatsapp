import React from 'react'
import Form from "../../reusable/form/Form"
import {dataTypes} from "../../enums/types"
import axios from "axios"

function Signup() {
    const submitForm = async (data:dataTypes)=>{
        console.log(data,"anas")
        console.log("clicked")
        try{
          axios.post("http://localhost:8080/users",{
            ...data
          }).then(res=>{
           console.log(res,"res")
          })
        }catch(error){
          console.log(error)
        }
       
    }
  return (
    <Form submitForm={submitForm} action={'singnup'}/>  
  )
}

export default Signup