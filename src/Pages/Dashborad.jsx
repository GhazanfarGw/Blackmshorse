import React from 'react'
import Register from './Reg'

export default function Dashboard() {
  return (
    <>
        <div id='herosection' className='duration-500 min-h-screen w-full items-center lg:px-10 md:px-10 sm:px-5 px-5 pb-10'>
            <div className='lg:flex lg:grid-cols-2 gap-x-10 justify-between mx-auto max-w-screen-xl items-center'>
                <div className='text-white max-w-xl'>
                    <div className='lg:pt-28 pt-48'>
                        <h1 className='second lg:text-5xl md:text-5xl text-4xl tracking-wider duration-500'>
                            Are you looking for a private chauffeur in London?
                        </h1>
                        <p className='pt-3'>
                            Complete the form and we will contact you as soon as possible
                        </p>
                    </div>
                </div>
                <div>
                    <Register/>
                </div>

            </div>
        </div>
    </>
  )
}