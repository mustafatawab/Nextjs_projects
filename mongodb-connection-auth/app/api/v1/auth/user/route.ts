import { NextRequest, NextResponse } from "next/server";
import User from "@/model/User";

export async function GET(request:NextRequest) {
    
    const id = localStorage.getItem('userId')
    try{
        const user = await User.findOne({_id : id})
        if(!user){
            console.log("User Not Found")
            return NextResponse.json({message : "user not found" } , {status : 404})
        }
        console.log(user)
        
    }catch (error){
        return NextResponse.json({mesage : "user not found"} , {status : 404})
    }    
}