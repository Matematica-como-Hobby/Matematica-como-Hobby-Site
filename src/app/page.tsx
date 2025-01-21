import Image from 'next/image';
import background from '@/public/background.jpg'
import card_oint from '@/public/card-oint.png'
import "@/styles/neon.css"

export default function Page() {
  return <main>
    <Image alt="freepick-2" src={background} quality={100} className='absolute top-0 z-[0] pointer-events-none w-svw h-svh opacity-50'/> 

    <div className='relative z-[1] text-white w-svw h-svh grid grid-cols-2'>
      <div className='flex flex-col ml-48 w-full pr-11 justify-center'>
        <h1 className="text-2xl p-8 font-[Almendra]">Livros , Resolução & Comunidade - Matematica como Hobby</h1>
        
        <p className="text-2xl leading-10 my-3" style={{fontFamily : "Carattere"}}>A matemática, frequentemente percebida como uma disciplina desafiadora, pode se transformar em um hobby fascinante quando explorada por meio de  livros, resolução de problemas e a força da comunidade. Esses elementos inspiram os leitores a apreciar a beleza dos números e a lógica por trás das fórmulas. Resolver desafios matemáticos oferece um prazer único, estimulando tanto o raciocínio crítico quanto a criatividade. Assim, a matemática se revela não apenas uma ciência, mas uma emocionante jornada de descobertas e conexões.</p>

        <div className='flex flex-row gap-14 ml-20 mt-10 h-12'>
          <button className='neonButton w-32 rounded-md text-sm'>
            ver livros
          </button>

          <button className='bg-white bg-opacity-10 w-32 rounded-md text-sm'>
            docs
          </button>

        </div>

      </div>

      <div className='py-28 pointer-events-none'>
        <Image alt="card" src={card_oint} className=''/>
      </div>

    </div>
  </main>
}