import Image from 'next/image';
import card_oint from '@/public/card-oint.png'
import "@/styles/neon.css"

export default function Page() {
  return <main>

    <div className='relative z-1 flex flex-col justify-center mt-32 m-auto text-white text-center'>
      
      <h1 className="text-5xl font-[Almendra]">Livros , Resolução & Comunidade - Matematica como Hobby</h1>
      
      <p className="text-2xl leading-10 mt-32 mx-auto w-3/5" style={{fontFamily : "Carattere"}}>A matemática, frequentemente percebida como uma disciplina desafiadora, pode se transformar em um hobby fascinante quando explorada por meio de  livros, resolução de problemas e a força da comunidade. Esses elementos inspiram os leitores a apreciar a beleza dos números e a lógica por trás das fórmulas. Resolver desafios matemáticos oferece um prazer único, estimulando tanto o raciocínio crítico quanto a criatividade. Assim, a matemática se revela não apenas uma ciência, mas uma emocionante jornada de descobertas e conexões.</p>

      <div className='flex gap-14 m-auto mt-32 h-12'>
        <button className='neonButton w-32 rounded-md text-sm'>
          ver livros
        </button>

        <button className='bg-white/10 w-32 rounded-md text-sm'>
          docs
        </button>

      </div>

    </div>

    <div className='relative'>
      <Image alt="card" src={card_oint} className='absolute z-0 -top-40 left-10 opacity-60 w-[30%] pointer-events-none'/>
    </div>


  </main>
}