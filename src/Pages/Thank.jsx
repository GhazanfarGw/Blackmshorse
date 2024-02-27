import React from 'react'
  
export default function Thank() {
    return (
    <>
        <div className='duration-500 py-20'>
            <div className='bg-local lg:h-24 md:h-24 h-32'>
                <img className='hidden md:block lg:block z-0 duration-500' src='/mercedes.jpg' alt='images'/>
                <img className='block md:hidden lg:hidden z-0 duration-500 w-full' src='/mercedes1.jpg' alt='images'/>
            </div>
            <div className='md:px-16 mx-auto md:justify-center overflow-hidden px-10 md:text-center max-w-screen-lg'>
                <div className='text-white md:py-20 md:mt-44 md:pb-0'>
                    <div className='md:text-center'>
                        <h1 className='second md:text-4xl text-base tracking-wider duration-500 text-center mx-auto'>
                            Thanks for trusting us for over a decade
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}
  