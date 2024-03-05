import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function App() {
  return (
    <>
    <div className='md:max-w-screen-xl justify-center mx-auto md:px-10 px-5 lg:h-[45rem] pt-10 z-0'>
        <Swiper
            pagination={{
            type: 'progressbar',
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
        >
            <SwiperSlide>
                <img src='./12.png' alt='image'/>
            </SwiperSlide>
            <SwiperSlide>
                <img src='./13.png' alt='image'/>
            </SwiperSlide>
            <SwiperSlide>
                <img src='./14.png' alt='image'/>
            </SwiperSlide>
            <SwiperSlide>
                <img src='./15.png' alt='image'/>
            </SwiperSlide>
        </Swiper>

    </div>
    </>
  );
}
