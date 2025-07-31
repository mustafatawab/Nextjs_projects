import { NextRequest, NextResponse } from "next/server"
import {DbConnection} from '@/lib/connection'
import User from "@/model/User"
import bcryptjs from "bcryptjs";

export async function GET(request: NextRequest, response : NextResponse) {
    await DbConnection()


    return NextResponse.json({message : "Register Route is here"})
}



export async function POST(request: NextRequest, response : NextResponse) {
    await DbConnection()
    const body = await request.json()
    const {name , email , password} = body
    
    const user = await User.findOne({email})
    if (user){
        return NextResponse.json({message : "User already Exist"})
    }

    const salt = await bcryptjs.genSalt(10)
    const hashedPassword = await bcryptjs.hash(password, salt)
    
    const newUser = new User({
        name,
        email,
        password : hashedPassword
    })

    const addUser = await newUser.save();

    return NextResponse.json({message : "user added successfully" , user : addUser})
}