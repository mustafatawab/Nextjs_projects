import { DbConnection } from "@/lib/connection";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest) {
    await DbConnection()
    try{

        return NextResponse.json({message : "Connected successfully"})
    }
    catch (error){
        return NextResponse.json({message : "Error while connecting"})
    }

}