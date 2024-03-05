import "react-router-dom";
import React, { useState } from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ThreeDots } from 'react-loader-spinner';

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [firstname, setFirstname] = useState('');
  const [phone, setPhone] = useState ('');
  const [email, setEmail] = useState ('');
  const [error, setError] = useState('');
  const [pickuplocation, setPickuplocation] = useState ('');
  const [destination, setDestination] = useState ('');
  const [godate, setGodate] = useState ('');
  const [hour, setHour] = useState ('');
  const [minute, setMinute] = useState ('');
  const [isChecked, setIsChecked] = useState(false);


  const handleFirstnameChange = (event) => {
    setFirstname(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handlePickuplocationChange = (event) => {
    setPickuplocation(event.target.value);
  }
  
  const handleDestinationChange = (event) => {
    setDestination(event.target.value);
  }

  const handleMinuteChange = (event) => {
    setMinute(event.target.value);
  }

  const handleGodateChange = (date) => {
    setGodate(date);
    const currentDate = new Date();
    const selectedDate = new Date(date);

    if (selectedDate < currentDate) {
        setError('not possible');
      } else {
        setError('');
    } 
  };
  
  const handleHourChange = (event) => {
    setHour(event.target.value);
  }

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(true);
    setIsChecked(true);

      // Store input data in local storage
      const inputData = {firstname, phone, email, pickuplocation, destination, godate, hour, minute};
      localStorage.setItem('inputData', JSON.stringify(inputData));

    try {
      await postDataToAPI(firstname, phone, email, pickuplocation, destination, godate, hour, minute);
    } catch (error) {
      console.error(error);
    }

    setTimeout(() => {
        const confirmation = window.confirm("Are you sure you want to submit this form?");
        if (confirmation) {
              window.location.href = '/request_submitted_5465465ashdjashdjkashkjadjkdhajkdka';
        }
    }, 3000);
  };

    const postDataToAPI = async (firstname, phone, email, pickuplocation, destination, godate, hour, minute) => {
    const response = await fetch('https://backend-blackhors.adaptable.app/user/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ firstname, phone, email, pickuplocation, destination, godate, hour, minute }),
    });
    return response.json();
  };

  return (
    <>
      <div className="items-center lg:pt-72 pt-10">
        <form onSubmit={handleSubmit} className="">
            <div className="">
                <div className="lg:flex grid-cols-3 lg:gap-x-10 items-center">
                    <div className="w-full mx-auto lg:pt-0 pt-3">
                        <label className="text-[#fff] text-sm">
                            First & Second Name
                        </label> 
                        <br />
                        <input
                        type="text"
                        value={firstname}
                        required
                        onChange={handleFirstnameChange}
                        className="mt-1 border-[1px] border-gray-400 px-2 py-2 w-full bg-[#E9E8E4] text-sm"
                        />
                    </div>
                    <div className="w-full mx-auto lg:pt-0 pt-3">
                        <label className="text-[#fff] text-sm">Phone</label>
                        <br />
                        <input
                            type="number"
                            value={phone}
                            required
                            onChange={handlePhoneChange}
                            className="mt-1 border-[1px] border-gray-400 px-2 py-2 placeholder-gray-400 w-full bg-[#E9E8E4] text-sm"
                        />
                    </div>
                    <div className="w-full mx-auto lg:pt-0 pt-3">
                        <label className="text-[#fff] text-sm">Email</label>
                        <br />
                        <input
                            type="mail"
                            value={email}
                            required
                            onChange={handleEmailChange}
                            className="mt-1 border-[1px] border-gray-400 px-2 py-2 placeholder-gray-400 w-full bg-[#E9E8E4] text-sm"
                        />
                    </div>
                </div>
                <div className="lg:flex lg:grid-cols-2 mx-auto items-center justify-between lg:gap-x-5 lg:pt-5 pt-3">
                    <div className="w-full mx-auto lg:pt-0 pt-3">
                        <label className="text-[#fff] text-sm">Pick-up location</label>
                        <br />
                        <input value={pickuplocation} 
                        onChange={handlePickuplocationChange}
                        type="text"
                        required
                        placeholder="Address Airport, Hotel,..." 
                        className="border-[1px] border-gray-400 px-2 w-full py-2 mt-1 placeholder-gray-400 bg-[#E9E8E4] text-sm">
                        </input>
                    </div>
                    <div className="w-full mx-auto lg:pt-0 pt-3">
                        <label className="text-[#fff] text-sm">Destination</label>
                        <br />
                        <input value={destination} 
                        onChange={handleDestinationChange}
                        type="text"
                        required
                        placeholder="Address Airport, Hotel,..."  
                        className="border-[1px] border-gray-400 px-2 w-full py-2 mt-1 placeholder-gray-400 bg-[#E9E8E4] text-sm">
                        </input>
                    </div>
                </div>

                <div className="flex grid-cols-2 justify-between mx-auto gap-x-5 lg:pt-5 pt-3">
                    <div className="w-full">
                        <label className="text-[#fff] text-sm">
                            Date
                        </label>
                        <br />
                        <DatePicker
                        selected={godate}
                        required
                        onChange={handleGodateChange}
                        className="border-[1px] border-gray-400 py-2 px-2 placeholder-gray-400 w-[100%] mt-1 bg-[#E9E8E4] text-sm" 
                        />
                        {error && <p className="text-red-500 text-sm pt-3">{error}</p>}
                    </div>
                    <div className="flex lg:gap-x-10 gap-x-2 grid-cols-2">
                        <div className="w-full">
                            <label className="text-[#fff] text-sm">Hour</label>
                            <br />
                            <input value={hour} 
                            onChange={handleHourChange}
                            type="number"
                            required
                            placeholder="HH"
                            className="border-[1px] border-gray-400 px-2 py-2 placeholder-gray-400 w-[100%] mt-1 bg-[#E9E8E4] text-sm">
                            </input>
                        </div>

                        <div className="w-full">
                            <label className="text-[#fff] text-sm">Minute</label>
                            <br />
                            <input value={minute} 
                            onChange={handleMinuteChange}
                            type="number"
                            required
                            placeholder="MM"
                            className="border-[1px] border-gray-400 px-2 py-2 placeholder-gray-400 w-[100%] mt-1 bg-[#E9E8E4] text-sm">
                            </input>
                        </div>
                    </div>
                </div>
                <div className="pt-5"> {/* Tailwind CSS classes for white border and padding */}
                    <input
                        type="checkbox"
                        id="myCheckbox"
                        required
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                        className="mr-2" // Tailwind CSS class for margin-right
                    />
                    <label htmlFor="myCheckbox" className="text-white">I accept the</label> {/* Tailwind CSS class for white text color */}
                </div>
                <div className="flex py-2 pt-5">
                  <button
                    value={handleSubmit} 
                    className="text-[#fff] lg:text-base text-sm items-center block self-end px-20 py-2 bg-[#948564]"
                    type="submit">
                    {loading ? (
                      <div className='flex items-center gap-3 cursor-progress'>
                        <span className='text-base text-center justify-center'>Loading</span>
                        <ThreeDots height="20" width="20" radius="9" color="secondary" ariaLabel="three-dots-loading" wrapperStyle={{}} wrapperClassName="" visible={true}/>
                      </div>
                      ) : (
                      'REQUEST A BUDGET'
                    )}
                  </button>
                </div>
            </div>
        </form>
      </div>
    </>
  );
}

export default Register;
