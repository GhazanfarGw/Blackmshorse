import React from 'react'

export default function Dashboard() {
  return (
    <>
        <div id='herosection' className='duration-500 lg:py-64 sm:py-40 py-48 items-center mx-auto md:justify-center md:text-center sm:justify-center sm:text-center'>
            <div className='mx-auto md:justify-center md:text-center lg:px-0 px-5'>
                <div className='text-white'>
                    <div className=''>
                        <h1 className='second lg:text-6xl md:text-5xl text-4xl tracking-wider duration-500 sm:max-w-screen-md lg:max-w-screen-lg sm:text-center mx-auto'>
                            Discover the future of luxury travel with us
                        </h1>
                    </div>
                    <div className='third mt-10'>
                        <div className='hidden md:block lg:block five border-[#fff] border-l-2 mx-auto items-center relative md:h-44 h-16 md:my-3 my-5 w-0 justify-center text-center flex rounded-sm'/>
                        <a className='mt-10' href='/'>
                        <button className='bg-white text-black rounded-md flex-1 relative md:px-10 px-6 py-2 md:py-4 font-semibold hover:bg-opacity-80 tracking-wider' type='button'>
                            Book Now  
                        </button>
                    </a>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}