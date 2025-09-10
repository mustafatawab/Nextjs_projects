import { NextResponse, NextRequest } from "next/server";
import prisma from "@/lib/prisma";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

export async function POST(req:NextRequest){
    try {
        const body = await req.json()
        const {fullname , username , phone, email , password} = body

        const user_exist = await prisma.user.findUnique({
            where : {email : email}
        })

        
    } catch (error) {
        console.log("Error occured -- " , error)
        NextResponse.json({
            error : error
        })
    }
}