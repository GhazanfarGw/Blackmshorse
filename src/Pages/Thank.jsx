import React from 'react'
  
export default function Thank() {
    return (
    <>
        <div className='duration-500 lg:pt-20 md:pt-16 sm:pt-10 pt-10'>
            <div className='bg-local lg:h-24 sm:h-10 h-32'>
                <img className='hidden md:block sm:block lg:block z-0 duration-500' src='/mercedes_benz.jpg' alt='images'/>
                <img className='block md:hidden lg:hidden z-0 duration-500 w-full' src='/trust.webp' alt='images'/>
            </div>
            <div className='md:px-16 mx-auto md:justify-center px-10 md:text-center lg:max-w-screen-lg an'>
                <div className='text-white lg:py-20 lg:mt-44 lg:pb-0 sm:mt-16'>
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
  