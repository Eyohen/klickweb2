//import React from 'react';

const OutlineButton = ({ name, onClick }) => {
  return (
    <button
      className='bg-white border border-yellow-400 focus:outline-none hover:bg-yellow-100 font-medium rounded-full text-sm py-5 mr-2 px-14 mb-2 w-full'
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default OutlineButton;


