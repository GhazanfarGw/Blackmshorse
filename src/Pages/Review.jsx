import React, { useEffect, useState } from "react";

const Review = () => {
  const [inputData, setInputData] = useState(null);

  useEffect(() => {
    // Retrieve input data from local storage
    const data = localStorage.getItem('inputData');
    if (data) {
      setInputData(JSON.parse(data));
    }
  }, []);
  

  if (!inputData) {
    return (
      <p className="py-3 px-5 text-red-500 max-w-xs md:text-sm text-xs justify-center text-center items-center overflow-hidden mx-auto font-semibold">
        No address data found.
      </p>
    );
  }

  return (
    <>
            <div className="max-w-screen-2xl mx-auto justify-center lg:px-10 px-5 pt-3 md:pt-5 lg:pt-5 border-b pb-2 shadow-sm">
                <a href="/">
                  <img width={150} className='items-center duration-300' src='./black.png' alt='favicon.png'/>
                </a>
            </div>

            <div className="overflow-hidden max-w-screen-md mx-auto justify-center min-h-screen items-center px-5">
                <div className="lg:px-10 md:px-8 px-5 border-[#000] border lg:py-16 md:py-10 pt-5 lg:my-10 md:my-8 my-5 border-opacity-20">
                    <h1 className="lg:text-3xl md:text-2xl text-base font-bold">
                        Dear {inputData.firstname}
                    </h1>
                    <p className="text-sm sm:text-base lg:text-base lg:pt-5 pt-3">
                        Thank you for choosing our chauffeur service!
                        We are delighted to confirm your booking with the following details:
                    </p>
                    <div className="lg:pt-10 md:pt-8 pt-5">
                        <div className="">
                            <div className="flex gap-x-5">
                                <p className="text-sm sm:text-base lg:text-base">
                                    Name:
                                </p>
                                <p className="text-sm sm:text-base lg:text-base">{inputData.firstname}</p>
                            </div>
                            <div className="flex gap-x-5 pt-3">
                                <p className="text-sm sm:text-base lg:text-base">
                                    Phone:
                                </p>
                                <p className="text-sm sm:text-base lg:text-base">{inputData.phone}-</p>
                            </div>
                        </div>
                        <div className="pt-3">
                            <div className="flex gap-x-5">
                                <p className="text-sm sm:text-base lg:text-base">
                                Email:
                                </p>
                                <p className="text-sm sm:text-base lg:text-base">{inputData.email}</p>
                            </div>
                        </div>
                        <div className="">
                            <div className="flex gap-x-5 pt-3">
                                <p className="text-sm sm:text-base lg:text-base">Pickup Location:</p>
                                <p className="text-sm sm:text-base lg:text-base">{inputData.pickuplocation}</p>
                            </div>
                            <div className="flex gap-x-5 pt-3">
                                <p className="text-sm sm:text-base lg:text-base">Destination:</p>
                                <p className="text-sm sm:text-base lg:text-base">{inputData.destination}</p>
                            </div>
                        </div>

                        <div className="">
                            <div className="flex gap-x-5 pt-3">
                                <p className="text-sm sm:text-base lg:text-base">Date:</p>
                                <p className="text-sm sm:text-base lg:text-base">{inputData.godate}</p>
                            </div>
                            <div className="">
                                <div className="flex gap-x-5 pt-3">
                                    <p className="text-sm sm:text-base lg:text-base">Hour:</p>
                                    <p className="text-sm sm:text-base lg:text-base">{inputData.hour}</p>
                                </div>
                                <div className="flex gap-x-5 pt-3">
                                    <p className="text-sm sm:text-base lg:text-base">Minute:</p>
                                    <p className="text-sm sm:text-base lg:text-base">{inputData.minute}</p>
                                </div> 
                            </div>
                        </div>
                        <p className="lg:pt-10 md:pt-8 pt-5 text-sm sm:text-base lg:text-base md:pb-5 pb-10 lg:pb-0">
                            Our professional chauffeurs are dedicated to providing you with a safe, comfortable, and luxurious travel experience.
                            <br/> Rest assured that we will take care of every detail to ensure your journey is seamless and enjoyable.
                            <br/> <br/>If you have any special requests or need further assistance, feel free to contact our customer service team at <span className="font-bold">+44 7375 150590</span>
                             <span className="px-2">or</span> <span className="font-bold">info@blckmshorse.com.</span><br/>
                            We look forward to serving you and exceeding your expectations!
                        </p>
                    </div>
                </div>
            </div>
    </>
  );
}

export default Review;