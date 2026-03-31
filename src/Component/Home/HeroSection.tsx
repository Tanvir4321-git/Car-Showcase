import React from 'react';
import bgimage from '../../../public/bg.png'

const HeroSection = () => {
    return (
        <div style={{ backgroundImage: "url('/bg.png')" }} className=' bg-cover bg-center h-screen md:h-[750px] w-full -mt-20'>
            <div className='md:mt-40 mt-24 flex flex-col items-center'>

                <h1 className='text-3xl  md:text-8xl text-center font-extrabold text-white tracking-widest'>Find Your  <span className='text-[#fb2c36]'>Dream Car</span></h1>
                 {/* CTA Button */}
        <button className="md:mt-20 mt-10 bg-[#fb2c36] hover:bg-red-700 text-white  font-semibold px-4 md:px-8 py-2 rounded-lg tracking-widest transition-colors md:text-2xl  text-sm ">
          Browse Cars
        </button>
            </div>
        </div>
    );
};

export default HeroSection;