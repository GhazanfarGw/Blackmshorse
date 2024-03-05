// WhatsAppLink.js
import React from 'react';

const WhatsAppLink = ({ phoneNumber }) => {
  return (

    <a className='flex items-center mx-auto justify-center gap-x-3 bg-[#948564] hover:bg-opacity-80 px-4 py-2 text-white rounded-md' href={`https://wa.me/${phoneNumber}`} target="_blank" rel="noopener noreferrer">
      <img width={20} src='./whatsapp.png'/>
      WhatsApp Us
    </a>
  );
};

export default WhatsAppLink;