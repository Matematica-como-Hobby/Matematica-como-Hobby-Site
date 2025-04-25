import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const url = new URL(request.url)
  const code = url.searchParams.get("code") 

  const response : NextResponse = NextResponse.redirect(new URL("/books", url));
  
  if (code){
    
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
      
      response.cookies.set('access_token', token, {
        httpOnly: true, // block the access of javascript
        secure: process.env.NODE_ENV === 'production', // only under https protocol
        sameSite: 'strict', // only work in matHobby site
        maxAge: 60 * 60 * 24, // 1 day
      });
    }
    
  }

  return response;

}