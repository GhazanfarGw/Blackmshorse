import React from 'react';
import Swiper from './swiper';

export default function service() {
  return (
    <>
    <section id='service' className='mx-auto items-center justify-center scroll-smooth duration-500 text-[#e0e0e0] lg:pt-20 sm:pt-0 pt-0'>
        <div className='mx-auto justify-center max-w-screen-xl lg:px-10 sm:px-10 md:px-10 px-5'>
            <div className='mx-auto text-[#000] items-center'>
                <div className='lg:pt-5 sm:pt-20 pt-16'>
                    <h1 className='lg:text-5xl md:text-4xl sm:text-4xl text-3xl mx-auto text-[#000] lg:py-5 py-2'>
                        Service Overview
                    </h1>
                    <p className='pt-3 tracking-wide text-sm md:text-lg text-[#000000]'>
                        Our services cater to high-net-worth individuals seeking sustainable luxury. 
                        We specialize in transfers from London to South Hampton, around the Midlands, and Heathrow to South Hampton, ensuring your travel is not just eco-friendly 
                        but also embodies the pinnacle of comfort and style.
                    </p>
                </div>
                <div className='py-8'>
                    <h1 className='lg:text-3xl md:text-2xl sm:text-xl text-xl mx-auto text-[#000]'>
                        Fleet Information
                    </h1>
                    <p className='pt-3 tracking-wide text-sm md:text-lg text-[#000000]'>
                        Our meticulously curated fleet, highlighted by the EQV VAN Electric Car 6 seater and the prestigious S Class, offers unmatched luxury and environmental stewardship. 
                        Each vehicle is chosen for its elegance, comfort, and commitment to clean energy.
                    </p>
                </div>
            </div>
        </div>
        <Swiper/>
    </section>
    </>
  )
}