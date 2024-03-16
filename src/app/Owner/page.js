"use client"
import Image from "next/image";
import React from 'react';

function Page() {
  const handleButtonClick = () => {
    // Add your button click logic here
    console.log('Button clicked!');
  };

  return (
    <div>
      <div style={{  margin: '5px' , backgroundColor: 'white', height: '400', width: '400'}}>
        hi
        {/* <Image src="/lodge1.jpg" alt="lodge1" height={350} width={300} /> */}
        {/* <button
          style={{
            position: 'absolute',
            top: '80%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            padding: '10px 20px',
            // backgroundColor: 'rgba(255, 255, 255, 0.5)',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
          onClick={handleButtonClick}
        >
          Click Me
        </button> */}
      </div>
    </div>
  );
}

export default Page;
