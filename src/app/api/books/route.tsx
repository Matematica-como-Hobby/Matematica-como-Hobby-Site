import { NextRequest, NextResponse } from "next/server";
import { GetBooks, GetTopics } from "./main";

export async function GET(req : NextRequest){
  if (req.nextUrl.searchParams.has("filtersList")){

    return NextResponse.json(JSON.stringify(await GetTopics()))
    
  }
  else if (req.nextUrl.searchParams.has("filterName") && req.nextUrl.searchParams.has("filterOid")){
    const name = req.nextUrl.searchParams.get("filterName")
    const oid = req.nextUrl.searchParams.get("filterOid")


    return NextResponse.json(JSON.stringify(await GetBooks(oid, name)))


  }

  return NextResponse.json({})
}