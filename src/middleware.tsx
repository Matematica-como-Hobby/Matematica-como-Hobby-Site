import { NextRequest, NextResponse } from "next/server";
import {decrypt } from "app/lib/session";

export async function middleware(req : NextRequest){
  const token = req.cookies.get("access_token")?.value; // Get the access token from cookies
  
  if (token){ // If the token exists, verify it
    
    try {
      const payload = await decrypt(token); // Decrypt the token to get the payload
      
      if (payload && payload.github_access_token) { // Check if the payload contains the access token
        return NextResponse.next();
      }

    } catch {
    }
  }
  
  
  return NextResponse.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.CLIENT_ID}`) // Redirect to GitHub OAuth if the token is invalid or expired
}

export const config = {
  matcher : [
    "/books"
  ]
}