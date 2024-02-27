import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Tooltip } from '@mui/material'

function Post() {
    const settings = {
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 5,
        slidesToScroll: 1,
        pauseOnHover: true,
        dots: true,

        cssEase: "linear",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true,
            }
          }
        ]
      };
  return (
    <>
    <div className='mx-0 px-5 items-center'>
      <div data-aos="zoom-in-up" data-aos-delay="300" className='max-w-screen-2xl items-center mx-auto overflow-hidden'>
        <Slider {...settings} className='flex mx-auto items-center gap-4 pt-5'>
            
            <Tooltip placement='bottom' className='hover:opacity-80 cursor-pointer py-5 hover:bg-[#000] justify-center items-center px-3'>
              <img src='./1.jpg' alt='Image'/>
            </Tooltip>

            <Tooltip placement='bottom' className='hover:opacity-80 cursor-pointer py-5 hover:bg-[#000] justify-center items-center px-3'>
              <img src='./2.jpg' alt='Image'/>
            </Tooltip>

            <Tooltip placement='bottom' className='hover:opacity-80 cursor-pointer py-5 hover:bg-[#000] justify-center items-center px-3'>
              <img src='./3.jpg' alt='Image'/>
            </Tooltip>

            <Tooltip placement='bottom' className='hover:opacity-80 cursor-pointer py-5 hover:bg-[#000] justify-center items-center px-3'>
              <img src='./4.jpg' alt='Image'/>
            </Tooltip>

            <Tooltip placement='bottom' className='hover:opacity-80 cursor-pointer py-5 hover:bg-[#000] justify-center items-center px-3'>
              <img src='./5.jpg' alt='Image'/>
            </Tooltip>

            <Tooltip placement='bottom' className='hover:opacity-80 cursor-pointer py-5 hover:bg-[#000] justify-center items-center px-3'>
              <img src='./6.jpg' alt='Image'/>
            </Tooltip>
            <Tooltip placement='bottom' className='hover:opacity-80 cursor-pointer py-5 hover:bg-[#000] justify-center items-center px-3'>
            <img src='./7.jpg' alt='Image'/>
            </Tooltip>

            <Tooltip placement='bottom' className='hover:opacity-80 cursor-pointer py-5 hover:bg-[#000] justify-center items-center px-3'>
              <img src='./9.jpg' alt='Image'/>
            </Tooltip>

            <Tooltip placement='bottom' className='hover:opacity-80 cursor-pointer py-5 hover:bg-[#000] justify-center items-center px-3'>
              <img src='./10.jpg' alt='Image'/>
            </Tooltip>
        </Slider>
      </div>
    </div>
    </>
  )
}

export default Post;