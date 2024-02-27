import React from 'react';
import Carsilder from './Carsilder';

export default function offer() {
  return (
    <>
    <section id='service' className='mx-auto items-center justify-center overflow-hidden scroll-smooth duration-500 text-[#e0e0e0] lg:py-20 md:py-16'>
        <div className='mx-auto justify-center max-w-screen-xl md:px-10 px-5 md:py-16 lg:pt-0'>
            <div className='mx-auto text-[#000]'>
                <div className='lg:pt-5 pt-20'>
                    <h1 className='md:text-5xl text-3xl mx-auto text-[#000] md:py-5 py-2'>
                        Sustainable Travelling
                    </h1>
                    <div className='md:flex md:grid-cols-2 md:justify-end md:gap-x-10 md:mx-auto md:pt-10 pt-3'>
                        <h4 className='md:text-xl text-xl font-semibold text-[#000] md:text-end'>
                            Zero-Emission Excellence &diams;
                        </h4>
                        <p className='md:max-w-3xl tracking-wide text-sm md:text-lg text-[#000000] pt-3'>
                            Our fleet, exclusively composed of the latest electric vehicles like the EQE VAN Electric Car, represents our dedication to zero-emission travel. 
                            Every ride with us contributes to a cleaner, greener world, aligning luxury with the path to carbon neutrality.
                        </p>
                    </div>
                    <div className='md:flex md:grid-cols-2 md:justify-end md:gap-x-10 md:mx-auto md:pt-10 pt-3'>
                        <h4 className='md:text-xl text-xl font-semibold text-[#000] md:text-end pt-3'>
                            Sustainable Sophistication &diams;
                        </h4>
                        <p className='md:max-w-3xl tracking-wide text-sm md:text-lg text-[#000000] pt-3'>
                            We redefine luxury travel by integrating sustainable practices with an uncompromised level of sophistication. Our services are a testament to our belief that true luxury is not just about comfort but also about conscious choices that protect our environment.
                        </p>
                    </div>
                    <div className='md:flex md:grid-cols-2 md:justify-end md:gap-x-10 md:mx-auto md:pt-10 pt-3'>
                        <h4 className='md:text-xl text-xl font-semibold text-[#000] md:text-end pt-3'>
                            Green Grandeur &diams;
                        </h4>
                        <p className='md:max-w-3xl tracking-wide text-sm md:text-lg text-[#000000] pt-3'>
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