import '@/styles/global.css';

export default function RootLayout({ children, } : { children : React.ReactNode }) {
  return (
    <html lang="en">
      <body className='bg-primary'>
        <header className='absolute top-0 w-full flex justify-end bg-transparent z-[1] text-white py-5 px-20 border-b border-white '>
          <nav>
            <div className='flex gap-7 ' style={{fontFamily: "Poiret One"}}>
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