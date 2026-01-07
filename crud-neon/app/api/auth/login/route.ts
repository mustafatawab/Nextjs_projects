import { NextResponse, NextRequest } from "next/server";
import bcrypt from "bcrypt"
import { Prisma, PrismaClient } from "@/app/generated/prisma/client";

export async function GET() {
    return NextResponse.json({status : "healthy"})
}


export async function POST(request:NextRequest) {
    
    const {email, password} = await request.json()

    const prisma = new PrismaClient()

    const existUser = await prisma.user.findUnique({
        where : {email}
    })

    if (!existUser){
        return NextResponse.json({message : "Register yourself first"} , {status : 501})
    }

    const matchPassword = await bcrypt.compare(password, existUser.password)

    if (!matchPassword){
        return NextResponse.json({message : "Incorrect Password"} , {status : 501})
    }

    return NextResponse.json({message : "Logged IN"})

}