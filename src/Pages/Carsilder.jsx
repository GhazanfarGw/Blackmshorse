import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Tooltip } from '@mui/material'
import Whatsapp from './Whatsapp';

function Post() {
    const settings = {
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        pauseOnHover: true,
        centerPadding: "60px",
        dots: true,

        cssEase: "linear",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              centerPadding: "30px",
              infinite: true,
              infinite: true,
              autoplay: true,
              autoplaySpeed: 2000,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerPadding: "0px",
              infinite: true,
              autoplay: true,
              autoplaySpeed: 4000,
              initialSlide: 1
              
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              autoplay: true,
              autoplaySpeed: 4000,
              centerPadding: "0px",
              dots: true,
            }
          }
        ]
      };
  return (
    <>
    <div className='px-5 lg:px-10 justify-center max-w-screen-xl mx-auto lg:pt-20 sm:pt-0 pt-0'>
      <div className='lg:pt-5 sm:pt-20 pt-16'>
        <p className='text-[#948564] text-xl'>
          Fleet
        </p>
        <h1 className='lg:text-5xl md:text-4xl sm:text-4xl text-3xl text-black md:pt-3 lg:pt-3'>
          SEDAN & MINIVAN
        </h1>
      </div>
      <div data-aos="zoom-in-up" data-aos-delay="300" className='max-w-screen-xl items-center mx-auto'>
        <Slider {...settings} className='flex mx-auto items-center gap-4 lg:pt-5 md:pt-4 sm:pt-3'>
            <Tooltip placement='bottom' className='shadow-2xl py-5 justify-center items-center px-3'>
              <img src='./Sedan/mercedes_e_class.jpg' alt='Image'/>
              <div className='lg:px-3 md:px-3 sm:px-2'>
                <h1 className='text-black text-xl pt-5 font uppercase'>
                  Mercedes E-Class
                </h1>
                <p className='font-bold text-[#7a7a7a]'>
                  up to 4 passengers
                </p>
                <div className="pt-5">
                  <Whatsapp phoneNumber="+447375150590" />
                </div>
              </div>
            </Tooltip>
            <Tooltip placement='bottom' className='shadow-2xl py-5 justify-center items-center px-3'>
              <img src='./Sedan/mercedes_s_class.jpg' alt='Image'/>
              <div className='lg:px-3 md:px-3 sm:px-2'>
                <h1 className='text-black text-xl pt-5 font uppercase'>
                  Mercedes S-Class
                </h1>
                <p className='font-bold text-[#7a7a7a]'>
                  up to 3 passengers
                </p>
                <div className="pt-5">
                  <Whatsapp phoneNumber="+447375150590" />
                </div>
              </div>
            </Tooltip>
            <Tooltip placement='bottom' className='shadow-2xl py-5 justify-center items-center px-3'>
              <img src='./minivan/Mercedes_v_class.jpg' alt='Image'/>
              <div className='lg:px-3 md:px-3 sm:px-2'>
                <h1 className='text-black text-xl pt-5 font uppercase'>
                  Mercedes V-Class
                </h1>
                <p className='font-bold text-[#7a7a7a]'>
                  up to 6 passengers
                </p>
                <div className="pt-5">
                  <Whatsapp phoneNumber="+447375150590" />
                </div>
              </div>
            </Tooltip>
            <Tooltip placement='bottom' className='shadow-2xl py-5 justify-center items-center px-3'>
              <img src='./minivan/v_class minvan Silver.jpg' alt='Image'/>
              <div className='lg:px-3 md:px-3 sm:px-2'>
                <h1 className='text-black text-xl pt-5 font uppercase'>
                  Mercedes V-Class Silver
                </h1>
                <p className='font-bold text-[#7a7a7a]'>
                  up to 6 passengers
                </p>
                <div className="pt-5">
                  <Whatsapp phoneNumber="+447375150590" />
                </div>
              </div>
            </Tooltip>
        </Slider>
      </div>
    </div>
    </>
  )
}

export default Post;
