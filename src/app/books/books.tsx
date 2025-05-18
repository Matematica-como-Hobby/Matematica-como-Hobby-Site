import {
  ChevronRightRounded,
  CloseRounded,
  MenuRounded,
  Search,
} from "@mui/icons-material";

import clsx from "clsx";

import "@/styles/books.css"

export function Loading(){
  return <div className="flex items-end w-[40] justify-center h-[30px]" >
  <div className="dot"></div>
  <div className="dot"></div>
  <div className="dot"></div>
</div>
}

export function TopBar({ isopen, setOpen }) {
  return (
    <div className="flex w-svd h-[47px] text-white items-center place-content-between">
      <div className="absolute top-0 w-full h-[20px] bg-secundary z-0 " />

      <div className="bg-primary w-1/5 h-full rounded-tr-xl z-1 flex flex-col font-[PoiretOne] text-sm z-1 justify-center items-center">
        <a className="py-4 text-center hidden lg:inline" href="/">
          Home
        </a>
        <MenuRounded
          className="text-white lg:!hidden"
          onClick={() => setOpen(!isopen)}
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

export function SideBar({ isopen, setOpen, topicsName, currentTopic, setTopic, setLT}) {

  return (
    <div
      className={clsx(
        "font-[PoiretOne] absolute top-0 h-svh w-[70%] bg-primary z-1 sm:w-[55%] transition-transform duration-300 ease-in-out transform md:w-[40%] lg:h-auto lg:col-satrt-1 lg:relative lg:w-auto",
        {
          "translate-x-0": isopen == true,
          "-translate-x-full lg:translate-x-0": isopen == false,
        }
      )}
    >
      <CloseRounded
        className="absolute right-4 top-4 lg:!hidden"
        fontSize="small"
        onClick={() => setOpen(!isopen)}
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
                onClick={() => {setTopic(value); setLT(undefined)}}
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

export function ListBooks({books} : {books : object}){
  const res = []

  Object.entries(books).forEach(([key, value], index) => {
    res.push(
      <div key={index} className="flex flex-col items-center text-wrap ">
        <img src={value.image} alt="image" className="h-[150px] w-auto"/>
        <p className="mt-3 px-5 text-center overflow-hidden text-ellipsis line-clamp-3 max-w-[150px]">{value.name}</p>
      </div>
    )
  })

  return res
}