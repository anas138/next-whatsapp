import React from "react";
import axios from "axios";
export const getStaticPaths = async () => {
  const response = await axios.get("http://localhost:8000/users")
   if(response){
     const users = response.data
     const oneUser = users.map((user:any)=>{
       return {
        params:{ verify:`${user.verificationCode}&&${user.username}`}
       }
     })
     console.log(oneUser,"one")
    return {
      paths:oneUser,
      fallback: false
    };
   }
    
  }

export const getStaticProps=async(context:any)=>{
  const user = context.params.verify
   return {
    props: { user: user }
   }
}
function Verify(props:any) {
  return <div>verification{props.user}</div>;
}

export default Verify;
