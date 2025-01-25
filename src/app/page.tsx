import Image from 'next/image';
import card_oint from '@/public/card-oint.png'

import "@/styles/neon.css"

export default function Page() {
  return <main>

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