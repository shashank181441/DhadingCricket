import React from 'react';

function Logo({ width = '50px', height = '50px' }) {
  return (
    <div className='flex items-center'>
      <img
        src="https://res.cloudinary.com/dd9l1c8cr/image/upload/v1704625200/prashDCA/oltbja9mfibdh8umal6e.jpg"
        alt="Logo"
        width={width}
        height={height}
        className='rounded-full'
      />
    </div>
  );
}

export default Logo;
