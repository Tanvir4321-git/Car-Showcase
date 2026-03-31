import Image from 'next/image';
import Link from 'next/link';
import cardata from '../../../../public/CarData.json';

const CarDetails = async ({ params }) => {
  const { id } = await params;
  const car = cardata.find((car) => car.id == Number(id));

  if (!car) {
    return (
      <div className="bg-[#0d0d0d] min-h-screen flex items-center justify-center">
        <p className="text-white text-2xl">Car not found</p>
      </div>
    );
  }

  return (
    <div className='bg-[#0d0d0d] min-h-screen -mt-20'>

    <div className="max-w-11/12 mx-auto mt-30 py-16">

     

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* Image */}
        <div className="relative w-full h-72 md:h-[420px] rounded-2xl overflow-hidden">
          <Image src={car.image} alt={car.name} fill className="object-cover" />
        </div>

        {/* Info */}
        <div className="flex flex-col justify-center">

          {/* Name & Price */}
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-white text-4xl font-extrabold">{car.name}</h1>
            <span className="text-red-500 text-2xl font-bold">{car.price}</span>
          </div>

          {/* Brand badge */}
          <span className="inline-block bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full w-fit mb-4">
            {car.brand}
          </span>

          {/* Full Description */}
          <p className="text-gray-400 text-sm leading-relaxed mb-8">
            {car.details.fullDescription}
          </p>

          {/* Features Grid */}
          <h2 className="text-white font-semibold text-base mb-4">Specifications</h2>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#161616] rounded-lg px-4 py-3 border border-gray-200">
              <p className="text-gray-500 text-xs mb-1">Brand</p>
              <p className="text-white text-sm font-semibold">{car.details.features.brand}</p>
            </div>
            <div className="bg-[#161616] rounded-lg px-4 py-3 border border-gray-200">
              <p className="text-gray-500 text-xs mb-1">Engine</p>
              <p className="text-white text-sm font-semibold">{car.details.features.engine}</p>
            </div>
            <div className="bg-[#161616] rounded-lg px-4 py-3 border border-gray-200">
              <p className="text-gray-500 text-xs mb-1">Horsepower</p>
              <p className="text-white text-sm font-semibold">{car.details.features.horsepower}</p>
            </div>
            <div className="bg-[#161616] rounded-lg px-4 py-3 border border-gray-200">
              <p className="text-gray-500 text-xs mb-1">Mileage</p>
              <p className="text-white text-sm font-semibold">{car.details.features.mileage}</p>
            </div>
            <div className="bg-[#161616] rounded-lg px-4 py-3 border border-gray-200">
              <p className="text-gray-500 text-xs mb-1">Transmission</p>
              <p className="text-white text-sm font-semibold">{car.details.features.transmission}</p>
            </div>
            <div className="bg-[#161616] rounded-lg px-4 py-3 border border-gray-200">
              <p className="text-gray-500 text-xs mb-1">Drivetrain</p>
              <p className="text-white text-sm font-semibold">{car.details.features.drivetrain}</p>
            </div>
            <div className="bg-[#161616] rounded-lg px-4 py-3 border border-gray-200">
              <p className="text-gray-500 text-xs mb-1">Seats</p>
              <p className="text-white text-sm font-semibold">{car.details.features.seats}</p>
            </div>
            <div className="bg-[#161616] rounded-lg px-4 py-3 border border-gray-200">
              <p className="text-gray-500 text-xs mb-1">Year</p>
              <p className="text-white text-sm font-semibold">{car.details.features.year}</p>
            </div>
          </div>

        </div>
      </div>
    </div>
    </div>
  );
};

export default CarDetails;