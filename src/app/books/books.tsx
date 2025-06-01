import {
  ChevronRightRounded,
  CloseRounded,
  MenuRounded,
  Search,
  FullscreenExitRounded,
  Info,
  FolderRounded
} from "@mui/icons-material";

import clsx from "clsx";

import "@/styles/books.css"
import "@/styles/neon.css"

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

export function Loading(){
  return <div className="flex items-end w-[40] justify-center h-[30px]" >
  <div className="dot"></div>
  <div className="dot"></div>
  <div className="dot"></div>
</div>
}

export function BookTopBar({setOpenBookSideBar, setReader})  {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="flex w-svd min-h-[47px] text-white items-center">
      <div className="absolute top-0 w-full h-[20px] bg-secundary z-0 " />

      <div className=" w-1/5 bg-primary h-full rounded-tr-xl z-1 flex flex-col font-[PoiretOne] text-sm z-1 justify-center items-center">
        <MenuRounded
          className="text-white lg:!hidden"
          onClick={() => setOpenBookSideBar( (p : boolean) => !p)}
        />
      </div>

      <div className="bg-secundary rounded-bl-xl w-4/5 h-full z-1 flex items-center px-5 gap-5">
        <div className="flex items-center h-full p-2 text-sm font-[PoiretOne] gap-2 mr-auto">
          <div className="w-[100px] h-full text-white bg-white/10 rounded-lg flex items-center justify-center">
            main
          </div>
        </div>
        <Info className="neonIcon color-black !hidden lg:!inline" fontSize="small" onClick={() => setShowInfo(true)}
          onMouseLeave={() => setShowInfo(false)}/>
          {showInfo && (
            <div className="absolute right-12.5 top-11 z-50 min-w-[220px] max-w-xs bg-green-mth text-white text-xs rounded-lg px-4 py-3 shadow-xl font-[PoiretOne] ">
              <div className="absolute -top-2 right-3 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-b-8 border-b-green-mth/90" />
              Em Desktop environment, os pdf's não podem ter seus conteúdos selecionados e copiados.<br />
              Entretanto, ao clicar duas vezes em um item do pdf, abrirá uma nova aba mostrando os contribuintes para a parte selecionada do livro.
            </div>
          )}
        <FullscreenExitRounded className="cursor-pointer" fontSize="small" onClick={() => setReader(true)} />
      </div>

    </div>
  );
}

export function TopBar({setOpen }) {
  return (
    <div className="flex w-svd min-h-[47px] text-white items-center place-content-between">
      <div className="absolute top-0 w-full h-[20px] bg-secundary z-0 " />

      <div className="bg-primary w-1/5 h-full rounded-tr-xl z-1 flex flex-col font-[PoiretOne] text-sm z-1 justify-center items-center">
        <a className="py-4 text-center hidden lg:inline" href="/">
          Home
        </a>
        <MenuRounded
          className="text-white lg:!hidden"
          onClick={() => setOpen((p : boolean) => !p)}
        />
      </div>

      <div className="bg-secundary rounded-b-xl w-3/5 h-full z-1 flex items-center px-3">
        <input type="text" maxLength={130} className="w-full outline-none" />
        <Search />
      </div>

      <div className="bg-primary w-1/5 h-full rounded-tl-xl z-1"></div>
    </div>
  );
}

export function BookSideBar({ isopen, setOpen, data}) {

  return (
    <div
      className={clsx(
        "font-[PoiretOne] absolute top-0 w-[70%] h-svh bg-primary z-1 sm:w-[55%] transition-transform duration-300 ease-in-out transform md:w-[40%] lg:h-auto lg:col-satrt-1 lg:relative lg:w-auto",
        {
          "translate-x-0": isopen == true,
          "-translate-x-full lg:translate-x-0": isopen == false,
        }
      )}
    >
      <CloseRounded
        className="absolute right-4 top-4 lg:!hidden"
        fontSize="small"
        onClick={() => setOpen((p : boolean) => !p)}
      />

      <section className="py-15 lg:py-5">
        <div className="text-[poiretOne] text-sm rounded-lg bg-secundary flex p-5 mx-5">
          <div className="gap-2 flex flex-col">
            <p># Sobre o livro</p>
            <div className="pl-5">
              nome do livro : <span className="text-xs">{data.name || "unknow"}</span>
            </div>
            <div className="pl-5">
              autor : <span className="text-xs">{data.author || "unknow"}</span>
            </div>
            <div>
              descrição : <span className="text-xs">{data.description || "unknow"}</span>
            </div>
          </div>
        </div>

        <div className="grid gap-3 w-3/4 ml-10 text-sm mt-5">
          <div>
            <div className="flex gap-4 items-center">
              <FolderRounded style={{fontSize: 30}}/>
              <p>main</p>
            </div>

            {/* hover:bg-secundary transition-all delay-100 duration-300 ease-in-out  */}
            {/* when have chapters */}
            
            <button className="ml-10 mt-3 h-8 items-center gap-5 text-left px-5 rounded-lg bg-secundary ">
              main <ChevronRightRounded fontSize="small" />
            </button>

          </div>
        </div>
      </section>
    </div>
  );
}
export function SideBar({ isopen, setOpen, topicsName, currentTopic, setTopic}) {

  return (
    <div
      className={clsx(
        "font-[PoiretOne] absolute top-0 w-[70%] h-svh bg-primary z-1 sm:w-[55%] transition-transform duration-300 ease-in-out transform md:w-[40%] lg:h-auto lg:col-satrt-1 lg:relative lg:w-auto",
        {
          "translate-x-0": isopen == true,
          "-translate-x-full lg:translate-x-0": isopen == false,
        }
      )}
    >
      <CloseRounded
        className="absolute right-4 top-4 lg:!hidden"
        fontSize="small"
        onClick={() => setOpen((p : boolean) => !p)}
      />

      <section className="py-10">
        <p className="px-10 pb-8 text-md">Filter books</p>

        <div className="grid gap-3 w-3/4 ml-auto text-sm">
          {/* when have an analytics research */}
          {/* [ <div key={0}>mais vistos</div> , ... Object.keys(topics).map((value, index) => <div key={index+1}>{value}</div>) ] */}
          
          {
            topicsName.length === 0 ? (
            <div className="mr-auto pl-20">
              <Loading/>
            </div>
          ) : (
            topicsName.map((value, index) => (
              <button
                key={index}
                className={clsx(
                  "text-left px-5 h-8 mr-auto rounded-lg outline-offset-4",
                  {
                    "bg-yelow-mth border font-bold text-black border-transparent outline outline-yelow-mth/40 transition-all delay-100 duration-300 ease-in-out":
                      currentTopic == value,
                    "btn-jump": currentTopic != value,
                  }
                )}
                onClick={() => {setTopic(value)}}
              >
                {value.replace("-", " ")} <ChevronRightRounded fontSize="small" />
              </button>
                )
              )
            )
          }
          
        </div>
      </section>
    </div>
  );
}

export function ListBooks({books, data} : {books : object, data: Function}) {
  const res = []

  Object.entries(books).forEach(([key, value]) => {
    res.push(
      <div key={key} className="flex flex-col items-center text-wrap fade-in cursor-pointer" onClick={() => data({...value, path : key})}>
        <img src={value.image} alt="image" className="h-[150px] w-auto"/>
        <p className="mt-3 px-5 text-center overflow-hidden text-ellipsis line-clamp-2 max-w-[150px]">{value.name}</p>
      </div>
    )
  })

  return res
}


function useBooks(page, currentTopic, topics) {

  return useQuery({
    queryKey: ['books', page, currentTopic],
    queryFn: async () => {
      if (!currentTopic) return { info: {} };
      const data = await fetch(`api/books?filterName=${currentTopic}&filterOid=${topics[currentTopic]}&init=${page}&end=${page + 10}`);
      return JSON.parse(await data.json());
    },
    enabled: !!currentTopic,
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
    retry: false,
  });
}

export function Books({ topics, currentTopic, openBook}) {
  const [page, setPage] = useState(0);
  const { data, isLoading, isError, isFetching } = useBooks(page, currentTopic, topics);
  
  function handleScroll(e) {
    // get the element that is being scrolled
    const el = e.target;

    // loading more ten books, on end of the scroll
    if ((el.scrollHeight - el.scrollTop === el.clientHeight) && data?.hasMore && !isFetching) {
      setPage((p) => p + 10);
    }
    
  }

  return <div onScroll={handleScroll} className="flex flex-wrap gap-7 overflow-y-auto pb-10 min-h-0">
    {
      !isLoading && data !== undefined ? (
        <ListBooks books={data.info} data={openBook}/>
      ) : (
      <div className="m-10">
        <Loading/>
      </div>)
    }

  </div>
}