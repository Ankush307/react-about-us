import React, { useState } from 'react';
import { CARDS_DATA } from '../common/Helper';

const Hero = () => {
  const [value, setValue] = useState(0);
  const handleClick = () => {
    setValue(value - 1);
  };

  return (
    <div className="flex items-center flex-col justify-center min-h-screen">
      <h1 className="md:text-5xl font-bold md:mb-10 my-3 text-3xl">Use State</h1>
      <p className="text-xl font-bold mb-5"> {value}</p>
      <button onClick={handleClick} className='bg-black text-white py-2 px-5 rounded-lg'>Click Me</button>
      <h1 className="md:text-5xl font-bold md:mb-20 my-5 text-3xl">React Map</h1>
      <div className="flex flex-wrap gap-5 px-3 items-center justify-center">
        {CARDS_DATA.map((data, i) => (
          <div key={i} className="border p-5 rounded-lg shadow-md max-w-xs text-center">
            <img src={data.imgSrc} alt="card img" className="w-full h-auto mb-3 rounded-lg" />
            <div>
              <h1 className="text-3xl font-semibold">{data.Heading}</h1>
              <p className="text-lg font-medium">{data.para}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
