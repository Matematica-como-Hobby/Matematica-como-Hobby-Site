import SearchIcon from '@mui/icons-material/Search';
import { GetTopics, Topics } from 'app/books/main';

export default async function Page(request){

  const topics = await GetTopics()

  return <main className='text-white'>

    <div className='absolute w-svd '>

    </div>

    <div className='fixed right-0 h-[47px] text-white items-center w-full h-[47px] flex place-content-between'>
      <div className="absolute top-0 w-full h-1/2 bg-secundary z-0 "/>
      
      <div className="bg-primary w-1/5 h-full rounded-tr-xl z-1 flex flex-col font-[PoiretOne] text-sm z-1">
        <a className='py-4 text-center' href="/">Home</a>
      </div>

      <div className="bg-secundary rounded-b-xl w-3/5 h-full z-1 flex items-center px-3">
        <input type="text" maxLength={130} className="w-full outline-none"/>
        <SearchIcon/>
      </div>

      <div className="bg-primary w-1/5 h-full rounded-tl-xl z-1">

      </div>

    </div>

    <div className='grid min-h-dvh pt-[47px] grid-cols-[20%_auto]'>
      <div className='col-satrt-1 font-[PoiretOne]'>
        <section className='py-10'>
          
          <p className='px-10 pb-8 text-md'> 
            Filter books
          </p>

          <div className='grid gap-5 w-3/4 ml-auto text-sm'>
            <Topics topics={topics}/>
            
          </div>
        
        
        </section>
        
      </div>

      <div className='flex flex-col font-[PoiretOne]'>
        {/* need be bootons */}
        <div className='flex items-center gap-10 justify-end  px-10 py-3'>
          <div className='text-sm'>
          {/* ingles / potugues */}
            ingles
          </div>

          {/* < main > / < developement > */}
          <div className='text-sm'>
            main
          </div>
        </div>

        {/* need be dynamic and responsive */}
        <div>
          <p className='pb-10'> Livros Novos </p>

          <div className='flex flex-wrap gap-10'>
            <img src="https://camo.githubusercontent.com/96f62c374781ea5db7ad55fa8d35c7776c392b7461517cc4a3b68ae2dead9caa/68747470733a2f2f7777772e65647573702e636f6d2e62722f77702d636f6e74656e742f75706c6f6164732f323032342f30332f74656f7269615f646f735f636f6e6a756e746f732e6a7067" className='w-40 ml-10'/>
          </div>

        </div>

      </div>

    </div>

  </main>
}