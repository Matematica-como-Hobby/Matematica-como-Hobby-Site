"use client";

import { useEffect, useState } from "react";

import {Books, BookSideBar, BookTopBar, SideBar, TopBar} from "./books";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import clsx from "clsx";

import { Document, Page as PagePDF , pdfjs} from 'react-pdf';


export default function Page() {
  
  const [topics, setList] = useState({});
  const [currentTopic, setTopic] = useState(undefined);

  const [isopenSideBar, setOpenSideBar] = useState(true);
  
  const [isopenBookSideBar, setOpenBookSideBar] = useState(true);
  const [ishiddenReader, setReader] = useState(true);
  
  const [queryClient] = useState(() => new QueryClient());

  const [bookdata, setBookData] = useState({path: ""});

  const [numPages, setNumPages] = useState<number>(2);
  const [visiblePages, setVisiblePages] = useState<number>(2);
  
  function openBook(data){
    setReader(false)
    setBookData({...data, path : `https://raw.githubusercontent.com/${process.env.NEXT_PUBLIC_REPO_OWNER}/Solucionarios/${process.env.NEXT_PUBLIC_REPO_BRANCH}/books/${currentTopic}/${data.path}/main.pdf`});
  }

  function handleScroll(e) {
    if (e.scrollTop + e.clientHeight >= e.scrollHeight - 40) {
      setVisiblePages((prev) => Math.min(prev + 1, numPages))
    }

  }

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
    pdfjs.GlobalWorkerOptions.workerSrc = new URL('pdfjs-dist/build/pdf.worker.min.mjs', import.meta.url, ).toString();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <main className="text-white h-screen relative flex flex-col">
        
        <TopBar setOpen={setOpenSideBar}/>
        
        <div className="grid-cols-[20%_auto] min-h-0 lg:grid ">
          <SideBar setOpen={setOpenSideBar} isopen={isopenSideBar} currentTopic={currentTopic} setTopic={setTopic} topicsName={Object.keys(topics)}/>

          <div className="flex flex-col font-[PoiretOne] min-h-0">
            {/* need be bootons */}
            <div className="flex items-center gap-10 justify-end px-10 py-3">
              <div className="text-sm">
                {/* ingles / potugues */}
                ingles
              </div>

              {/* < main > / < developement > */}
              <div className="text-sm">main</div>
            </div>

            <div className="mx-20 lg:mx-5 flex flex-col min-h-0">
              <p className="pb-10"> Livros Novos </p>

              <Books topics={topics} currentTopic={currentTopic} openBook={openBook} />

            </div>
          </div>
        </div>

        <div className={clsx("absolute flex flex-col bg-primary h-screen w-screen top-0 left-0 top-0 z-10 fade-in",
          {
            "hidden" : ishiddenReader,
          }

        )} >

          <BookTopBar setOpenBookSideBar={setOpenBookSideBar} setReader={setReader}/>

          <div className="flex-1 grid-cols-[20%_auto] min-h-0 lg:grid ">
            <BookSideBar setOpen={setOpenBookSideBar} isopen={isopenBookSideBar} data={bookdata}/>

            <div className="flex flex-col font-[PoiretOne] bg-primary min-h-0 " >
              <div className="flex w-[600px] h-full items-start justify-center mx-auto mt-10 min-h-0 overflow-y-auto mb-5" onScroll={(e) => handleScroll(e.currentTarget)}>
                <Document
                file={bookdata.path}
                onLoadSuccess={({ numPages }) => setNumPages(numPages)}
                className="gap-2 flex flex-wrap"
              >
                {Array.from({ length: visiblePages }, (_, i) => (
                  <PagePDF
                    key={i + 1}
                    pageNumber={i + 1}
                    renderTextLayer={false}
                    renderAnnotationLayer={false}
                    width={600}
                  />
                ))}
              </Document>
              </div>
            </div>

          </div>
          
        </div>


      </main>
    </QueryClientProvider>
    
  );
}
