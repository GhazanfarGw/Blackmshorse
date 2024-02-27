import React from 'react'

export default function Dashboard() {
  return (
    <>
        <div className='duration-500 min-h-screen'>
            <div className='bg-local md:h-24 px-5 pt-20 md:pt-0 md:px-0 h-80'>
                <img className='hidden md:block lg:block z-0 duration-500 w-full object-cover h-[50rem]' src='./sclass001.jpg' alt='images'/>
                <img className='block md:hidden lg:hidden z-0 duration-500 w-full object-cover' src='./Mob.jpg' alt='images'/>
            </div>
            <div className='md:px-16 mx-auto md:justify-center overflow-hidden px-10 md:text-center max-w-screen-lg'>
                <div className='text-white md:py-20 md:mt-16 md:pb-0'>
                    <div className='md:text-center'>
                        <h1 className='second md:text-6xl text-4xl tracking-wider duration-500'>
                            Discover the future of luxury travel with us
                        </h1>
                    </div>
                    <div className='third mt-12 md:mt-0'>
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