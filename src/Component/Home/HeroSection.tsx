import React from 'react';
import bgimage from '../../../public/bg.png'

const HeroSection = () => {
    return (
        <div style={{ backgroundImage: "url('/bg.png')" }} className=' bg-cover bg-center h-screen w-full -mt-20'>
            <div className='mt-40 flex flex-col items-center'>

                <h1 className=' text-8xl font-extrabold text-white tracking-widest'>Find Your  <span className='text-[#fb2c36]'>Dream Car</span></h1>
                 {/* CTA Button */}
        <button className="mt-20 bg-[#fb2c36] hover:bg-red-700 text-white  font-semibold px-8 py-2 rounded-lg tracking-widest transition-colors text-2xl  ">
          Browse Cars
        </button>
            </div>
        </div>
    );
};

export default HeroSection;