"use client";

import Image from "next/image";
import cardata from "../../../public/CarData.json";
import Link from "next/link";
import { useState } from "react";

const CarListing = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const filtered = cardata.filter((car) => {

    const matchesSearch = car.name
      .toLowerCase()
      .includes(search.toLowerCase());

    //  price convert (string → number)
    const price = parseInt(car.price.replace(/[^0-9]/g, ""));

    //  filter match
    let matchesFilter = true;

    if (filter === "low") {
      matchesFilter = price < 100000;
    } else if (filter === "mid") {
      matchesFilter = price >= 100000 && price <= 200000;
    } else if (filter === "high") {
      matchesFilter = price > 200000;
    }

    return matchesSearch && matchesFilter;
  });

  return (
    <section id="browse" className="bg-[#0d0d0d] py-20 px-6 md:px-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-white">
          Our Car <span className="text-red-500">Collection</span>
        </h2>
        <p className="text-gray-400 mt-3 text-base">
          Choose from our wide range of premium vehicles
        </p>

        {/*  Search + Filter */}
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center mt-8">
          <input
            type="text"
            placeholder="Search by car name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="max-w-md w-full bg-[#161616] border border-white/10 focus:border-red-500 outline-none text-white placeholder-gray-500 text-sm rounded-xl py-3 px-4 transition-colors"
          />

          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="bg-[#161616] border border-white/10 focus:border-red-500 outline-none text-gray-400 text-sm rounded-xl py-3 px-4 transition-colors cursor-pointer"
          >
            <option value="all">All Prices</option>
            <option value="low">Under $100,000</option>
            <option value="mid">$100,000 – $200,000</option>
            <option value="high">Above $200,000</option>
          </select>
        </div>
      </div>

      {/* Car List */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((car) => (
            <div
              key={car.id}
              className="bg-[#161616] rounded-xl overflow-hidden border border-white/10 hover:border-red-500 transition-all hover:-translate-y-3"
            >
              <div className="relative w-full h-52">
                <Image
                  src={car.image}
                  alt={car.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-white font-bold text-lg">
                    {car.name}
                  </h3>
                  <span className="text-red-500 font-bold">
                    {car.price}
                  </span>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-5">
                  {car.description}
                </p>

                <Link href={`/car/${car.id}`}>
                  <button className="w-full bg-red-500 hover:bg-red-600 text-white text-sm font-semibold py-2.5 rounded-lg transition-colors">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-10">
          No cars found for "{search}"
        </p>
      )}
    </section>
  );
};

export default CarListing;