import Image from 'next/image';
import card_oint from '@/public/card-oint.png'
import elipse_home from '@/public/Ellipse_home.svg'

import "@/styles/neon.css"

export default function Page() {
  return <main >
    <div className='absolute right-0 top-0 z-[0] w-3/4 sm:w-1/2 h-[120%] overflow-y-visible overflow-x-hidden'>
      <svg width="482" height="631" viewBox="0 0 482 631" fill="none" xmlns="http://www.w3.org/2000/svg" className='rotate-103 w-svh h-3/5 2xl:ml-30'>
        <rect width="480.883" height="630.205" transform="translate(0.394531 0.709053)" fill="url(#paint0_linear_224_11)" fillOpacity="0.66"/>
        <defs>
          <linearGradient id="paint0_linear_224_11" x1="480.062" y1="630.34" x2="-13.3505" y2="15.6409" gradientUnits="userSpaceOnUse">
          <stop offset="0.12" stop-color="white" stop-opacity="0.08"/>
          <stop offset="0.6" stop-color="white" stop-opacity="0"/>
          </linearGradient>
        </defs>
      </svg>


      <Image alt="elipse gradient" src={elipse_home} className='ml-100 mt-20'/>
    </div>

    <div className='relative z-1 flex flex-col justify-center m-auto text-white text-center mt-20 sm:mt-32'>
      
      <h1 className=" font-[Almendra] text-xl w-3/4 mx-auto sm:text-4xl 2xl:text-5xl">Livros , Resolução & Comunidade - Matematica como Hobby</h1>
      
      <p className=" w-4/5 leading-8 mx-auto font-[Carattere] mt-10 sm:leading-10 md:text-xl md:mt-24 2xl:w-3/5 2xl:text-2xl 2xl:mt-32  ">A matemática, frequentemente percebida como uma disciplina desafiadora, pode se transformar em um hobby fascinante quando explorada por meio de  livros, resolução de problemas e a força da comunidade. Esses elementos inspiram os leitores a apreciar a beleza dos números e a lógica por trás das fórmulas. Resolver desafios matemáticos oferece um prazer único, estimulando tanto o raciocínio crítico quanto a criatividade. Assim, a matemática se revela não apenas uma ciência, mas uma emocionante jornada de descobertas e conexões.</p>

      <div className='flex gap-14 m-auto mt-10 h-11 sm:mt-32 sm:h-12'>
        <button className='neonButton rounded-md text-xs w-23 sm:w-32'>
          ver livros
        </button>

        <button className='bg-white/10 rounded-md text-xs w-23 sm:w-32'>
          docs
        </button>

      </div>

    </div>

    <div className='relative max-lg:mt-20 max-lg:flex max-sm:justify-center'>
      <Image alt="card" src={card_oint} className='w-[60%] sm:w-[40%] sm:ml-10 z-0 pointer-events-none lg:absolute sm: -top-40 left-10 lg:opacity-60 lg:w-[30%]'/>
    </div>

  </main>
}