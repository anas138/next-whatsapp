import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { NextAuthOptions } from "next-auth"
import axios from "axios"
export const authOptions:NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
        name: "Credentials",
        credentials: {
        //   username: { label: "Username", type: "text", placeholder: "jsmith" },
        //   password: { label: "Password", type: "password" }
        },
        async authorize(credentials, req) {
            const {username,password} = credentials as any
          const response = await axios.post("http://localhost:8000/login",{
            username:username,
            password:password
          }) 
          console.log(response.data)
          if(response) return response.data
          return {
              name:"anas"
          }
        }
      })
  ],
  session:{
    strategy:"jwt"
  },
  pages:{
      signIn:"/login"
  }
}
export default NextAuth(authOptions)

