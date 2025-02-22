'use client'

import { useRouter } from 'next/navigation'

export function NeonLivros(){
  const router = useRouter()

  return <button className='neonButton rounded-md text-xs w-23 sm:w-32 cursor-pointer' onClick={() => router.push('/books')}>
    <a>ver livros</a>
  </button>
}

export function Docs(){
  return <button className='bg-white/10 rounded-md text-xs w-23 sm:w-32 cursor-pointer'>
  docs
</button>
}



        