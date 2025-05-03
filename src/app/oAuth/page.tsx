'use client'

import { useRouter, useSearchParams } from "next/navigation"
import { useEffect } from "react"


export default function Page(){

  const code = useSearchParams().get("code") // get the parameter code from url like (https://example.com/oAuth?code=aaaaaa)
  const router = useRouter() // router for redirect

  useEffect(() => {
    if (code){
      // get and put the token of github, in a cookie
      fetch("api/oAuth", {
        method : "POST",
        headers : {
          'Content-Type': 'application/json',
        },
        body : JSON.stringify({
          code : code
        })
      }).then(response => {
        router.push(response.url) // redirect to /books if sucessfuly or to home if filed 
      })

    }
  })
  
  return <>
    <div className="flex text-white h-dvh justify-center items-center font-[PoiretOne]">
      Espere Alguns Segundos ...
    </div>
  </>
}