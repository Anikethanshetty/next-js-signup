import { NextRequest } from "next/server"
import { PrismaClient } from "@prisma/client"

const client  = new PrismaClient()

export async function POST(req:NextRequest){
  
  const body =  await req.json()
  
 const createUser =  await client.user.create({
    data:{
      username:body.username,
      password:body.password
    }
  })
 
console.log(createUser.id)
  
  return  Response.json({
        message:"you are looged in"
  })
}