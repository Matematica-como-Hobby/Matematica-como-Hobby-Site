import { NextRequest, NextResponse } from "next/server";

export function middleware(req : NextRequest){

  if (req.cookies.has("access_token")){
    return NextResponse.next()
  }


  return NextResponse.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.CLIENT_ID}`)
}

export const config = {
  matcher : [
    "/books"
  ]
}