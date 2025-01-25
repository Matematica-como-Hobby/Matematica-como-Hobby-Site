import logo from '@/public/logo.png'
import Image from 'next/image';
import Headernavh from './header-button';

import '@/styles/global.css';

export default function RootLayout({ children, } : { children : React.ReactNode }) {

  return (
    <html lang="en">
      <body className='bg-primary'>
        <header className='flex flex-col text-white items-center w-full bg-green-mth py-4 px-20'>

          <Image className="w-14" src={logo} alt="mth-logo"/>
          
          <Headernavh />

        </header>

        {children}

      </body>
    </html>
  )
}