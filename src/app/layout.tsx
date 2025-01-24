import logo from '@/public/logo.png'
import Image from 'next/image';

import '@/styles/global.css';

export default function RootLayout({ children, } : { children : React.ReactNode }) {
  return (
    <html lang="en">
      <body className='bg-primary'>
        <header className='w-full bg-green-mth flex justify-center text-white py-2 px-20 '>
          <Image className="w-14" src={logo} alt="mth-logo"/>

          <nav className='absolute right-10 py-4'>
            <div className='flex self-end gap-7 ' style={{fontFamily: "Poiret One"}}>
              <a>theme</a>
              <a>docs</a>
              <a>about</a>
            </div>
          </nav>
          
        </header>

        {children}

      </body>
    </html>
  )
}