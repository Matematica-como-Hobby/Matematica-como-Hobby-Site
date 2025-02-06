import Image from "next/image"
import SearchIcon from '@mui/icons-material/Search';
import top from "@/public/books/top.svg"

export default function Page(){

  return <>
    <header className="relative flex h-[47px] text-white items-center w-full bg-primary flex place-content-between ">
      <div className="absolute top-0 w-full h-1/2 bg-secundary z-0 "/>
      <div className="bg-primary w-1/5 h-full rounded-tr-xl z-1 flex items-center justify-center font-[PoiretOne] text-sm">
        <a href="/">Home</a>

      </div>

      <div className="bg-secundary rounded-b-xl w-full h-full z-1 flex items-center px-3">
        <input type="text" maxLength={130} className="w-full outline-none"/>
        <SearchIcon/>
      </div>

      <div className="bg-primary w-1/5 h-full rounded-tl-xl z-1">

      </div>
    </header>
  </>
}