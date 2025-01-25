'use client';

import clsx from 'clsx';
import { useState } from 'react';

export default function Headernavh(){

  var [isOpen, setOpen] = useState(false)

  return <>
    <svg onClick={() => setOpen(isOpen = !isOpen)} className="lg:hidden absolute right-10 my-4 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
    </svg>

    <nav className={clsx(
      "max-lg:mt-6 max-lg:mb-2 lg:absolute right-10 lg:py-4",
      {
        "max-lg:hidden": isOpen === true, 
        "": isOpen === false, 
      }

      )}
    >
      <div className='flex self-end gap-7 sm:gap-3' style={{fontFamily: "Poiret One"}}>
        <a href='#' className='hover:bg-white/10 rounded px-7 py-1'>theme</a>
        <a href='#' className='hover:bg-white/10 rounded px-7 py-1'>docs</a>
        <a href='#' className='hover:bg-white/10 rounded px-7 py-1'>about</a>
      </div>
    </nav>
  </>
}