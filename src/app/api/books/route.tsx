import { NextRequest, NextResponse } from "next/server";
import { GetBooks, GetTopics } from "./main";
import { cookies } from 'next/headers';
import { decrypt } from "app/lib/session";

export async function GET(req : NextRequest){
  const cookieStore = await cookies();
  const session_token = cookieStore.get('access_token').value;
  
  if (session_token) {
    const payload = await decrypt(session_token);

    if (!payload ) {
      return NextResponse.json({ error: "Invalid session" }, { status: 401 });
    }
  
    const authToken = payload.github_access_token;
    
    if (req.nextUrl.searchParams.has("filtersList")){

      return NextResponse.json(JSON.stringify(await GetTopics(authToken)))
      
    }

    else if (req.nextUrl.searchParams.has("filterName") && req.nextUrl.searchParams.has("filterOid")){

      const name = req.nextUrl.searchParams.get("filterName")
      const oid = req.nextUrl.searchParams.get("filterOid")
      const init = parseInt(req.nextUrl.searchParams.get("init") || "0", 10)
      const end = parseInt(req.nextUrl.searchParams.get("end") || "10", 10)

      return NextResponse.json(JSON.stringify(await GetBooks(oid, name, init, end, authToken)))


    }
  }

  return NextResponse.json({})
}