import { NextResponse } from "next/server";

export function middleware(req){

  if (req.cookies.has("access_token")){
    return NextResponse.next()
  }


  return NextResponse.redirect(new URL("/", req.url))
}

export const config = {
  matcher : [
    "/books"
  ]
}