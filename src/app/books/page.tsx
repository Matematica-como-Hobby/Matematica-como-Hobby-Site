"use client";

import "@/styles/books.css"

import { useEffect, useState } from "react";

import {ListBooks, Loading, SideBar, TopBar} from "./books";


export default function Page(req) {
  const [topics, setList] = useState({});
  const [currentTopic, setTopic] = useState(undefined);
  const [currentListT, setLT] = useState(undefined);
  const [isopen, setOpen] = useState(true);

  useEffect(() => {
    async function getFilters(){
      const data = await fetch("api/books?filtersList")
      const res = JSON.parse( await data.json() )

      setList(res)
      setTopic(Object.keys(res)[0])
    }
    
    getFilters()

  }, []);

  useEffect(() => {
    async function getBooks(){
      const data = await fetch(`api/books?filterName=${currentTopic}&filterOid=${topics[currentTopic]}`)
      const res = JSON.parse( await data.json() )

      setLT(res)

    }
    if (currentTopic != undefined){
      getBooks()
    }

  }, [currentTopic]);

  return (
    <main className="text-white max-h-screen">
      
      <TopBar setOpen={setOpen} isopen={isopen}/>
      
      <div className="h-auto grid-cols-[20%_auto] lg:grid">
        <SideBar setOpen={setOpen} isopen={isopen} currentTopic={currentTopic} setTopic={setTopic} setLT={setLT} topicsName={Object.keys(topics)}/>

        <div className="flex flex-col font-[PoiretOne]">
          {/* need be bootons */}
          <div className="flex items-center gap-10 justify-end  px-10 py-3">
            <div className="text-sm">
              {/* ingles / potugues */}
              ingles
            </div>

            {/* < main > / < developement > */}
            <div className="text-sm">main</div>
          </div>

          {/* need be dynamic and responsive */}
          <div className="px-20 lg:px-5">
            <p className="pb-10"> Livros Novos </p>

            <div className="flex flex-wrap gap-7">
              {
                currentListT != undefined ? (
                  <ListBooks books={currentListT}/>
                ) : (
                <div className="m-10">
                  <Loading/>
                </div>)
              }
              
            </div>
          </div>
        </div>
      </div>


    </main>
  );
}
