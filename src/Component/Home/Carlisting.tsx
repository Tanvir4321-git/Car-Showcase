
import Image from 'next/image';
import cardata from '../../../public/CarData.json'


const CarListing = async () => {
  const cars = cardata


  return (
    <section className="bg-[#0d0d0d] py-20 px-6 md:px-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-white">
          Our Car <span className="text-red-500">Collection</span>
        </h2>
        <p className="text-gray-400 mt-3 text-base">
          Choose from our wide range of premium vehicles
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cars.map(car => (
          <div
            key={car.id}
            className="bg-[#161616] rounded-xl overflow-hidden border border-white/10 hover:border-red-500/50 transition-all hover:-translate-y-3"
          >
            <div className="relative w-full h-52">
              <Image src={car.image} alt={car.name} fill className="object-cover" />
            </div>
            <div className="p-5">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-white font-bold text-lg">{car.name}</h3>
                <span className="text-red-500 font-bold">{car.price}</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-5">{car.description}</p>
              <button className="w-full bg-red-500 hover:bg-red-600 text-white text-sm font-semibold py-2.5 rounded-lg transition-colors">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CarListing;