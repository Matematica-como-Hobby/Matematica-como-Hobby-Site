import { NextResponse } from "next/server";
import {encrypt} from "app/lib/session";

export async function POST(request: Request) {
  const url = new URL(request.url)
  const { code } = await request.json()
  
  const res = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      client_id: process.env.CLIENT_ID, // github app CLIENT ID
      client_secret: process.env.CLIENT_SECRET, // github app CLIENT SECRET
      code: code, // "code" from github
    }),
  });
  
  
  const token = ( await res.json() ).access_token

  
  if (token){
    const response : NextResponse = NextResponse.redirect(new URL("/books", url));
    
    const jwtToken = await encrypt({github_access_token : token})
    
    response.cookies.set('access_token', jwtToken, {
      httpOnly: true, // block the access of javascript
      secure: process.env.NODE_ENV === 'production', // only under https protocol
      sameSite: 'strict', // only work in matHobby site
      maxAge: 60 * 60 * 8, // 8 hours
    });

    return response
  }
    
  return NextResponse.redirect(new URL("/", url));
}