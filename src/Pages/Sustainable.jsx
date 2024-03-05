import React from 'react';
import Carsilder from './Carsilder';

export default function offer() {
  return (
    <>
    <section id='sustainable' className='mx-auto justify-center scroll-smooth duration-500 text-[#e0e0e0] lg:pt-20 sm:pt-0 pt-0'>
        <div className='mx-auto justify-center max-w-screen-xl lg:px-10 sm:px-10 md:px-10 px-5'>
            <div className='mx-auto text-[#000]'>
                <div className='lg:pt-5 sm:pt-20 pt-16'>
                    <h1 className='lg:text-5xl md:text-4xl sm:text-4xl text-3xl mx-auto text-[#000] lg:py-5 py-2'>
                        Sustainable Travelling
                    </h1>
                    <div className='lg:flex lg:grid-cols-2 justify-end lg:gap-x-10 mx-auto lg:pt-10 sm:pt-5 pt-3'>
                        <h4 className='lg:text-xl sm:text-lg text-xl font-semibold text-[#000]'>
                            Zero-Emission Excellence &diams;
                        </h4>
                        <p className='lg:max-w-3xl tracking-wide text-sm sm:text-base lg:text-lg text-[#000000] lg:pt-0 md:pt-0 sm:pt-0 pt-2'>
                            Our fleet, exclusively composed of the latest electric vehicles like the EQV VAN Electric Car, represents our dedication to zero-emission travel. 
                            Every ride with us contributes to a cleaner, greener world, aligning luxury with the path to carbon neutrality.
                        </p>
                    </div>
                    <div className='lg:flex lg:grid-cols-2 justify-end lg:gap-x-10 mx-auto lg:pt-10 sm:pt-5 pt-3'>
                        <h4 className='lg:text-xl sm:text-lg text-xl font-semibold text-[#000]'>
                            Sustainable Sophistication &diams;
                        </h4>
                        <p className='lg:max-w-3xl tracking-wide text-sm sm:text-base lg:text-lg text-[#000000] lg:pt-0 md:pt-0 sm:pt-0 pt-2'>
                            We redefine luxury travel by integrating sustainable practices with an uncompromised level of sophistication. Our services are a testament to our belief that true luxury is not just about comfort but also about conscious choices that protect our environment.
                        </p>
                    </div>
                    <div className='lg:flex lg:grid-cols-2 justify-end lg:gap-x-10 mx-auto lg:pt-10 sm:pt-5 pt-3'>
                        <h4 className='lg:text-xl sm:text-lg text-xl font-semibold text-[#000]'>
                            Green Grandeur &diams;
                        </h4>
                        <p className='lg:max-w-3xl tracking-wide text-sm sm:text-base lg:text-lg text-[#000000] lg:pt-0 md:pt-0 sm:pt-0 pt-2'>
                            In every aspect of our operations, from the meticulous maintenance of our electric vehicles to our paperless transactions and offices powered by renewable energy, we embrace eco-luxury. Our commitment to the environment is as deep-seated as our commitment to our clients' comfort and style.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <Carsilder/>
    </section>
    </>
  )
}