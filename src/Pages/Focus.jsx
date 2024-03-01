import React from 'react';

export default function focus() {
  return (
    <>
    <section id='focus' className='mx-auto items-center justify-center scroll-smooth duration-500 text-[#e0e0e0] lg:pt-20 sm:pt-0 pt-0'>
        <div className='mx-auto justify-center max-w-screen-xl lg:px-10 sm:px-10 md:px-10 px-5'>
            <div className='mx-auto text-[#000]'>
                <div className='lg:pt-5 sm:pt-20 pt-10'>
                    <h1 className='lg:text-5xl md:text-4xl sm:text-4xl text-3xl mx-auto text-[#000] lg:py-5 py-2'>
                        Our Focus
                    </h1>
                    <div className='lg:flex lg:grid-cols-2 justify-end lg:gap-x-10 mx-auto lg:pt-10 sm:pt-5 pt-3'>
                        <h4 className='lg:text-xl sm:text-lg text-xl font-semibold text-[#000]'>
                            Eco-Luxury Fares &diams;
                        </h4>
                        <p className='lg:max-w-3xl tracking-wide text-sm sm:text-base lg:text-lg text-[#000000] lg:pt-10 sm:pt-5 pt-3'>
                            Indulge in sustainable opulence with our transparent, value-driven pricing. Every journey in our high-end electric vehicles reflects our commitment to fair and ethical pricing for our clientele and the environment.
                        </p>
                    </div>
                    <div className='lg:flex lg:grid-cols-2 justify-end lg:gap-x-10 mx-auto lg:pt-10 sm:pt-5 pt-3'>
                        <h4 className='lg:text-xl sm:text-lg text-xl font-semibold text-[#000]'>
                            Effortless Eco-Friendly Arrivals &diams;
                        </h4>
                        <p className='lg:max-w-3xl tracking-wide text-sm sm:text-base lg:text-lg text-[#000000] lg:pt-10 sm:pt-5 pt-3'>
                            Arrive refreshed and rejuvenated with our stress-free airport transfer service. Benefit from eco-conscious travel with up to one hour of complimentary wait time and proactive flight monitoring for a seamless connection.
                        </p>
                    </div>
                    <div className='lg:flex lg:grid-cols-2 justify-end lg:gap-x-10 mx-auto lg:pt-10 sm:pt-5 pt-3'>
                        <h4 className='lg:text-xl sm:text-lg text-xl font-semibold text-[#000]'>
                            Sustainable Scheduling &diams;
                        </h4>
                        <p className='lg:max-w-3xl tracking-wide text-sm sm:text-base lg:text-lg text-[#000000] lg:pt-10 sm:pt-5 pt-3'>
                            Elevate your travel plans with our flexible scheduling. Our customer-centric policies ensure you have the freedom to modify your arrangements effortlessly, prioritizing your convenience while keeping sustainability at the core.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}