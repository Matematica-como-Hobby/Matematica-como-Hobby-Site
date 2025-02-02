import clsx from "clsx"
import Image from 'next/image';

export default function Socialcard({reverse, text, image, color} : {reverse: boolean, text : string, image?: any, color?: string}){
  return <div className={clsx(
      'flex items-center flex-col',
      {
        "lg:flex-row" : reverse == false,
        "lg:flex-row-reverse" : reverse == true,
      }
      )
    }>

    <div className='border-2 border-white w-30 h-30 rounded-full flex justify-center items-center '>
      <div className="w-[70%] h-[70%] rounded-full flex justify-center items-center " style={{background: color? color : "transparent"}}>
          <Image alt="social" src={image} className="w-[50%]"/>
      </div>

    </div>

    <p className='w-full leading-8 mx-auto font-[Carattere] lg:w-4/5 mt-10 lg:m-auto xl:text-xl'>
      {text}
    </p>


  </div>
}