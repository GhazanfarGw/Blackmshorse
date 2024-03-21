import { Transition } from '@headlessui/react'
import React, { useEffect, useState } from 'react';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="header">
      <Logo isScrolled={isScrolled} />
      {/* Add your navigation items here */}
    </div>
  );
}

function Logo({ isScrolled }) {
  const [isOpen, setIsOpen] = useState(false)

  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
    
      {isScrolled ? (
        <header className="fixed z-10 md:px-10 px-3 w-full duration-300 mx-auto items-center bg-[#fff] text-black overflow-x-hidden shadow-md md:py-2 pt-2 scroll-smooth">
        <div onClick={handleScrollToTop} className="mx-auto items-center overflow-x-hidden">
          <div className="flex items-center">
            <div className="flex items-center max-w-screen-2xl justify-between mx-auto w-full">
              <div className="flex-shrink-0 py-2 items-center">
                <a href="/">
                  <img width={210} className='hidden md:block lg:block items-center duration-300' src='./black.png' alt='favicon.png'/>
                  <img width={180} className='block md:hidden lg:hidden items-center duration-300' src='./black.png' alt='favicon.png'/>
                </a>
              </div>
              <div className="hidden lg:block w-full duration-200 scroll-smooth">
                <div className="items-center flex duration-200 justify-end mx-auto gap-x-10">
                  <div className='flex pl-8 items-center'>
                    <a
                      href="#home"
                      className="
                      
                      items-center text-base md:hover:border-b border-[#000] relative h-8 pt-0.5 duration-200 lg:px-4 md:px-2 px-4 flex justify-center flex-row tracking-wide"
                    >
                      Home
                    </a>
                    <a
                      href="#about"
                      className="
                      
                      items-center text-base md:hover:border-b border-[#000] relative h-8 pt-0.5 duration-200 lg:px-4 md:px-2 px-4 flex justify-center flex-row tracking-wide"
                    >
                      Echoes Luxury
                    </a>
                    <a
                      href="#service"
                      className="
                      items-center text-base md:hover:border-b border-[#000] relative h-8 pt-0.5 duration-200 lg:px-4 md:px-2 px-4 flex justify-center flex-row tracking-wide"
                    >
                      Service Overview
                    </a>
                    <a
                      href="#offers"
                      className="
                      items-center text-base md:hover:border-b border-[#000] relative h-8 pt-0.5 duration-200 lg:px-4 md:px-2 px-4 flex justify-center flex-row tracking-wide"
                    >
                      Our Offers
                    </a>
                    <a
                      href="#sustainable"
                      className="
                      items-center text-base md:hover:border-b border-[#000] relative h-8 pt-0.5 duration-200 lg:px-4 md:px-2 px-4 flex justify-center flex-row tracking-wide"
                    >
                      Sustainable
                    </a>
                    <a
                      href="#network"
                      className="
                      items-center text-base md:hover:border-b border-[#000] relative h-8 pt-0.5 duration-200 lg:px-4 md:px-2 px-4 flex justify-center flex-row tracking-wide"
                    >
                      Network
                    </a>
                    <a
                      href="#focus"
                      className="
                      items-center text-base md:hover:border-b border-[#000] relative h-8 pt-0.5 duration-200 lg:px-4 md:px-2 px-4 flex justify-center flex-row tracking-wide"
                    >
                      Focus
                    </a>
                  </div>
                  <div>
                    <a href="mailto:info@blackmshorse.com" class="items-center text-base border  relative h-8 duration-200 lg:px-10 md:px-6 px-4 flex justify-center flex-row tracking-wide">
                      Contact Us
                    </a>
                  </div>

                </div>
              </div>
            </div>
            <div className="mr-2 flex lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="py-3 inline-flex items-center justify-center duration-200 rounded-md text-[#000000]"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6 duration-200 font-light"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6 duration-200 font-light"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <Transition
          show={isOpen}
          enter="transition ease-out duration-200 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-400 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="lg:hidden w-full pb-10 mt-3 bg-[#ffffff] text-black" id="mobile-menu">
              <div ref={ref} className="mx-auto z-10 px-5 flex flex-col">
              <a
                  href="#home"
                  className="
                  tracking-wider py-3 flex flex-row items-center justify-between duration-200 border-b border-[#000] border-opacity-10 text-sm font-bold"
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="
                  tracking-wider py-3 flex flex-row items-center justify-between duration-200 border-b border-[#000] border-opacity-10 text-sm font-bold"
                >
                  Echoes Luxury
                </a>
                <a
                  href="#service"
                  className="
                  tracking-wider py-3 flex flex-row items-center justify-between duration-200 border-b border-[#000] border-opacity-10 text-sm font-bold"
                >
                  Service Overview
                </a>
                <a
                  href="#offers"
                  className="
                  tracking-wider py-3 flex flex-row items-center justify-between duration-200 border-b border-[#000] border-opacity-10 text-sm font-bold"
                >
                  Our Offers
                </a>
                <a
                  href="#sustainable"
                  className="
                  tracking-wider py-3 flex flex-row items-center justify-between duration-200 border-b border-[#000] border-opacity-10 text-sm font-bold"
                >
                  Sustainable
                </a>
                <a
                  href="#network"
                  className="
                  tracking-wider py-3 flex flex-row items-center justify-between duration-200 border-b border-[#000] border-opacity-10 text-sm font-bold"
                >
                  Network
                </a>
                <a
                  href="#focus"
                  className="
                  tracking-wider py-3 flex flex-row items-center justify-between duration-200 border-b border-[#000] border-opacity-10 text-sm font-bold"
                >
                  Focus
                </a>
                <div>
                  <a href="mailto:info@blackmshorse.com" class="items-center text-base mt-5 text-white bg-[#948564] border relative h-8 duration-200 lg:px-10 md:px-6 px-4 flex justify-center flex-row tracking-wide">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          )}
        </Transition>
      </header>
      ) : (
        <header className="fixed z-10 lg:px-10 md:px-10 px-3 w-full duration-200 mx-auto items-center overflow-x-hidden py-3 md:py-4 text-white">
        <div className="mx-auto items-center overflow-x-hidden max-w-screen-2xl duration-200">
          <div className="flex items-center">
            <div className="flex items-center w-full">
              <div className="flex-shrink-0 md:py-2 items-center duration-200">
                <a href="/">
                  <img width={220} className='items-center hidden md:block lg:block duration-200' src='./white.png' alt='favicon.png'/>
                  <img width={185} className='items-center md:hidden block lg:hidden duration-200' src='./white.png' alt='favicon.png'/>
                </a>
              </div>
              <div className="hidden lg:block w-full duration-200 scroll-smooth">
                <div className="items-center flex duration-200 justify-end mx-auto gap-x-10">
                  <div className='flex pl-8 items-center'>
                    <a
                      href="#home"
                      className="
                      
                      items-center text-base md:hover:border-b border-[#000] relative h-8 pt-0.5 duration-200 lg:px-4 md:px-2 px-4 flex justify-center flex-row tracking-wide"
                    >
                      Home
                    </a>
                    <a
                      href="#about"
                      className="
                      
                      items-center text-base md:hover:border-b border-[#000] relative h-8 pt-0.5 duration-200 lg:px-4 md:px-2 px-4 flex justify-center flex-row tracking-wide"
                    >
                      Echoes Luxury
                    </a>
                    <a
                      href="#service"
                      className="
                      items-center text-base md:hover:border-b border-[#000] relative h-8 pt-0.5 duration-200 lg:px-4 md:px-2 px-4 flex justify-center flex-row tracking-wide"
                    >
                      Service Overview
                    </a>
                    <a
                      href="#offers"
                      className="
                      items-center text-base md:hover:border-b border-[#000] relative h-8 pt-0.5 duration-200 lg:px-4 md:px-2 px-4 flex justify-center flex-row tracking-wide"
                    >
                      Our Offers
                    </a>
                    <a
                      href="#sustainable"
                      className="
                      items-center text-base md:hover:border-b border-[#000] relative h-8 pt-0.5 duration-200 lg:px-4 md:px-2 px-4 flex justify-center flex-row tracking-wide"
                    >
                      Sustainable
                    </a>
                    <a
                      href="#network"
                      className="
                      items-center text-base md:hover:border-b border-[#000] relative h-8 pt-0.5 duration-200 lg:px-4 md:px-2 px-4 flex justify-center flex-row tracking-wide"
                    >
                      Network
                    </a>
                    <a
                      href="#focus"
                      className="
                      items-center text-base md:hover:border-b border-[#000] relative h-8 pt-0.5 duration-200 lg:px-4 md:px-2 px-4 flex justify-center flex-row tracking-wide"
                    >
                      Focus
                    </a>
                    
                  </div>
                  <div>
                    <a href="mailto:info@blackmshorse.com" class="items-center text-base border relative h-8 duration-200 lg:px-10 md:px-6 px-4 flex justify-center flex-row tracking-wide">
                      Contact Us
                    </a>
                  </div>

                </div>
              </div>
            </div>
            <div className="mr-2 flex lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="py-3 inline-flex items-center justify-center duration-200 rounded-md text-[#fff]"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6 duration-200 font-light"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6 duration-200 font-light"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <Transition
          show={isOpen}
          enter="transition ease-out duration-200 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-400 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="lg:hidden w-full pb-10 mt-1 bg-[#fff] text-black" id="mobile-menu">
              <div ref={ref} className="mx-auto z-10 px-5 flex flex-col">
              <a
                  href="#home"
                  className="
                  tracking-wider py-3 flex flex-row items-center justify-between duration-200 border-b border-[#000] border-opacity-10 text-sm font-bold"
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="
                  tracking-wider py-3 flex flex-row items-center justify-between duration-200 border-b border-[#000] border-opacity-10 text-sm font-bold"
                >
                  Echoes Luxury
                </a>
                <a
                  href="#service"
                  className="
                  tracking-wider py-3 flex flex-row items-center justify-between duration-200 border-b border-[#000] border-opacity-10 text-sm font-bold"
                >
                  Service Overview
                </a>
                <a
                  href="#offers"
                  className="
                  tracking-wider py-3 flex flex-row items-center justify-between duration-200 border-b border-[#000] border-opacity-10 text-sm font-bold"
                >
                  Our Offers
                </a>
                <a
                  href="#sustainable"
                  className="
                  tracking-wider py-3 flex flex-row items-center justify-between duration-200 border-b border-[#000] border-opacity-10 text-sm font-bold"
                >
                  Sustainable
                </a>
                <a
                  href="#network"
                  className="
                  tracking-wider py-3 flex flex-row items-center justify-between duration-200 border-b border-[#000] border-opacity-10 text-sm font-bold"
                >
                  Network
                </a>
                <a
                  href="#focus"
                  className="
                  tracking-wider py-3 flex flex-row items-center justify-between duration-200 border-b border-[#000] border-opacity-10 text-sm font-bold"
                >
                  Focus
                </a>
                <div>
                  <a href="mailto:info@blackmshorse.com" class="items-center text-base border mt-5 text-white bg-[#948564] border-[#fff] relative h-8 duration-200 lg:px-10 md:px-6 px-4 flex justify-center flex-row tracking-wide">
                    Contact Us
                  </a>
                </div>

              </div>
            </div>
          )}
        </Transition>
      </header>
      )}
    </>
  )};
export default Navbar;
