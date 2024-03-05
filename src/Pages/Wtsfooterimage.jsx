// WhatsAppLink.js
import React from 'react';

const WhatsAppLink = ({ phoneNumber }) => {
  return (

    <a className='flex items-center mx-auto justify-center gap-x-3 bg-[#948564] hover:bg-black rounded-full hover:bg-opacity-80 text-white' href={`https://wa.me/${phoneNumber}`} target="_blank" rel="noopener noreferrer">
      <img width={60} src='./whatsapp.png'/>
    </a>
  );
};

export default WhatsAppLink;