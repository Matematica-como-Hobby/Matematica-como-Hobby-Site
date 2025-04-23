import Image from 'next/image';
import "@/styles/neon.css"
import Socialcard from './social-card';
import Headernavh from './header-button';

import { Docs, NeonLivros } from "./routerButtons"

import card_oint from '@/public/card-oint.png'
import down_image from '@/public/down_image.png'
import elipse_home from '@/public/Ellipse_home.svg'
import logo from '@/public/logo.png'
import divider from '@/public/divider.png'
import youtube from '@/public/social/youtube-white.svg'
import discord from '@/public/social/discord-white.svg'

export default function Page() {
  return <>
  <header className='relative flex z-[1] flex-col text-white items-center w-full bg-green-mth py-4 px-20'>

    <Image className="w-14" src={logo} alt="mth-logo"/>

    <Headernavh />

  </header>
  <main>
    <div className='absolute right-0 top-0 z-[0] w-3/4 sm:w-1/2 h-[120%] overflow-y-visible overflow-x-hidden'>
      <svg width="482" height="631" viewBox="0 0 482 631" fill="none" xmlns="http://www.w3.org/2000/svg" className='rotate-103 w-svh h-3/5 2xl:ml-30'>
        <rect width="480.883" height="630.205" transform="translate(0.394531 0.709053)" fill="url(#paint0_linear_224_11)" fillOpacity="0.66"/>
        <defs>
          <linearGradient id="paint0_linear_224_11" x1="480.062" y1="630.34" x2="-13.3505" y2="15.6409" gradientUnits="userSpaceOnUse">
          <stop offset="0.12" stopColor="white" stopOpacity="0.08"/>
          <stop offset="0.6" stopColor="white" stopOpacity="0"/>
          </linearGradient>
        </defs>
      </svg>


      <Image alt="elipse gradient" src={elipse_home} className='ml-100 mt-20'/>
    </div>

    <div className='relative z-1 flex flex-col justify-center m-auto text-white text-center mt-20 sm:mt-32'>
      
      <h1 className=" font-[Almendra] text-xl w-3/4 mx-auto sm:text-4xl 2xl:text-5xl">Livros , Resolução & Comunidade - Matematica como Hobby</h1>
      
      <p className=" w-4/5 leading-8 mx-auto font-[Carattere] mt-10 sm:leading-10 md:text-xl md:mt-24 2xl:w-3/5 2xl:text-2xl 2xl:mt-32  ">A matemática, frequentemente percebida como uma disciplina desafiadora, pode se transformar em um hobby fascinante quando explorada por meio de  livros, resolução de problemas e a força da comunidade. Esses elementos inspiram os leitores a apreciar a beleza dos números e a lógica por trás das fórmulas. Resolver desafios matemáticos oferece um prazer único, estimulando tanto o raciocínio crítico quanto a criatividade. Assim, a matemática se revela não apenas uma ciência, mas uma emocionante jornada de descobertas e conexões.</p>

      <div className='flex gap-14 m-auto mt-10 h-11 sm:mt-32 sm:h-12'>
          <NeonLivros/>
          <Docs/>

      </div>

    </div>

    <div className='relative flex-col flex sm:grid sm:grid-cols-2 max-lg:mt-20 max-sm:items-center lg:items-center lg:flex lg:flex-col'>

      <Image alt="card" src={card_oint} className='hidden w-[60%] z-0 pointer-events-none left-10 sm:block sm:w-[100%] md:w-[80%] sm:ml-10 lg:absolute sm:-top-40 lg:opacity-80 lg:w-[30%]'/>

      <div className='mx-auto lg:mt-25'>
        <Image className="w-25 mt-10 mx-auto" src={logo} alt="mth-logo"/> 
        <Image className="w-60 h-50 lg:mt-0" src={divider} alt="divider"/> 
      </div>

    </div>

    <div className='grid grid-row-2 gap-30 text-white w-3/4 mx-auto'>
      <Socialcard reverse={false} color='#5865F2' text='No Discord, a comunidade de matemática se torna um verdadeiro  laboratório de ideias, onde cada membro é um explorador em busca de  conhecimento. Juntos, desvendamos os mistérios dos números, trocamos  soluções e celebramos cada descoberta. É nesse ambiente colaborativo que a matemática se transforma em uma paixão compartilhada, unindo pessoas  em torno de desafios e conquistas. Vamos continuar a inspirar uns aos  outros e a crescer juntos nessa jornada' image={discord}/>

      <Socialcard reverse={true} color='#FF0033' text='A onde compartilho minha jornada pessoal de exploração da matemática de uma maneira mais divertida, criativa, livre e seguindo minha curiosidade, ou seja, encarando-a como um hobby. Aqui, a prioridade é o conteúdo e a sinceridade, em vez de produções elaboradas. O que você verá são vídeos autênticos e genuínos, onde compartilho minha jornada de aprendizado com honestidade e entusiasmo.' image={youtube}/>

    </div>

    {/* <section className='text-white w-[90%] lg:w-[80%] xl:w-[60%] mx-auto my-35'>
      <h2 className='text-center font-[Almendra] underline-offset-4  underline sm:text-xl  xl:text-2xl'>
        Matematica como hobby 
      </h2>

      <div className='grid gap-15 rounded-xl mt-30 from-green-mth to-yelow-mth font-[Playwrite] md:py-30 md:px-20 md:bg-linear-to-r'>
        <h3 className='text-center max-md:bg-linear-to-r from-green-mth to-yelow-mth max-md:p-20 rounded-xl'>
          O livro da natureza está escrito na linguagem matemática - Galileu Galilei
        </h3> 
        <h3 className='text-center max-md:bg-linear-to-r from-green-mth to-yelow-mth max-md:p-20 rounded-xl '>
          A matemática, vista corretamente, possui não apenas verdade, mas suprema beleza - Bertrand Russel
        </h3> 
        <h3 className='text-center max-md:bg-linear-to-r from-green-mth to-yelow-mth max-md:p-20 rounded-xl'>
          A beleza da matemática só se mostra a seguidores mais pacientes - Maryam Mirzakhani
        </h3> 
      </div>

    </section> */}

    <Image src={down_image} alt="image pilastra" className='mt-10 sm:w-3/5 mx-auto'/>

    <section className='relative font-[PoiretOne] text-white sm:w-3/4 mx-auto h-[30em] border-b-2 my-20'>
      <h2 className='text-center mt-4'>
        Livros Novos
      </h2>

      <button className='absolute top-0 left-5 sm:left-10 bg-white/10 text-sm px-5 py-2 rounded-sm'>
        <a href='/books'>ver livros</a>
      </button>

    </section>

    <div className='h-70 pt-15 pl-15 font-[PoiretOne] bg-secundary text-white lg:h-100 lg:pt-20 lg:pl-30'>
      <p className=''>

        Matematica como hobby

      </p>

      <nav className='ml-12 lg:ml-25 mt-10 grid gap-5'>
        <p>
          site roupas -

          <a className="mx-1" href='https://reserva.ink/470704' target="_blank" >https://reserva.ink/470704</a>

        </p>

        <p>
          github -

          <a className="mx-1" href='https://github.com/Matematica-como-Hobby/' target="_blank" >https://github.com/Matematica-como-Hobby/</a>

        </p>
      </nav>
    </div>

  </main>
  </>
}