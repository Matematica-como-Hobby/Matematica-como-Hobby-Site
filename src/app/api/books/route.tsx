import { NextRequest, NextResponse } from "next/server";
import { GetBooks, GetTopics } from "./main";

export async function GET(req : NextRequest){
  if (req.nextUrl.searchParams.has("filtersList")){

    return NextResponse.json(JSON.stringify(await GetTopics()))
    
  }

  else if (req.nextUrl.searchParams.has("filterName") && req.nextUrl.searchParams.has("filterOid")){

    const name = req.nextUrl.searchParams.get("filterName")
    const oid = req.nextUrl.searchParams.get("filterOid")
    const init = parseInt(req.nextUrl.searchParams.get("init") || "0", 10)
    const end = parseInt(req.nextUrl.searchParams.get("end") || "10", 10)

    return NextResponse.json(JSON.stringify(await GetBooks(oid, name, init, end)))


  }

  return NextResponse.json({})
}