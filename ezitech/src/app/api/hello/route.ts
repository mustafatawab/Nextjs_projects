import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const url = request.nextUrl;
  if(url.searchParams.has("name")){
    const name = url.searchParams.get("name");
    return new NextResponse('Hello, from: ' + name);
  }
  else {
    return new NextResponse('Please send your name in search parameter "name"');
  }
  
}


export async function POST(request:NextRequest) {

  const req = await request.json();
  if(req.name){
    return NextResponse.json({
      To : req.name,
      message : "This is post Method"
    })
  }
  else{
    return new NextResponse("Please include body")
  }
  
}


export async function PUT(request:NextRequest) {
  
  const req = await request.json();
  if(req.name){
    return NextResponse.json({
      To : req.name,
      message : 'Hi, You have called the PUT Method I guess'

    })

  }
  else 
  {
    return new NextResponse("Include the body in the form of JSON")
  }

}


export default async function DELETE(request:NextRequest) {
  
  return NextResponse.json({
    message : "Your data has been deleted" 
  })
}