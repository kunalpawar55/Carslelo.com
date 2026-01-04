import React, { useEffect, useState } from "react";

export default function Home() {
  const [showcars, setcars] = useState([]);

  const name = JSON.parse(localStorage.getItem("user"))?.name;

  useEffect(() => {
    fetch("http://localhost:8080/cars")
      .then((res) => res.json())
      .then((data) => setcars(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="min-h-screen bg-[#0B0B0B] px-6 py-10">
      
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-center text-white mb-10">
        Available Cars for{" "}
        <span className="text-red-500">{name}</span> 🚗
      </h1>

      {/* Cars Grid */}
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {showcars.map((car) => (
          <div
            key={car.id}
            className="bg-[#121212] border border-gray-800 rounded-2xl 
                       shadow-lg hover:shadow-red-500/20 
                       hover:-translate-y-1 transition-all duration-300 p-6"
          >
            {/* Car Name */}
            <h2 className="text-xl font-semibold text-red-500 mb-2">
              {car.carname}
            </h2>

            <p className="text-gray-300">
              <span className="font-semibold text-white">Model:</span>{" "}
              {car.modelname}
            </p>

            <p className="text-gray-300">
              <span className="font-semibold text-white">Location:</span>{" "}
              {car.location}
            </p>

            {/* Tags */}
            <div className="flex gap-2 mt-4 flex-wrap">
              <span className="px-3 py-1 text-xs bg-gray-800 text-gray-300 rounded-full">
                {car.geartype}
              </span>
              <span className="px-3 py-1 text-xs bg-gray-800 text-gray-300 rounded-full">
                {car.fueltype}
              </span>
            </div>

            <p className="text-gray-300 mt-3">
              <span className="font-semibold text-white">Car No:</span>{" "}
              {car.carnumber}
            </p>

            <p className="text-gray-300">
              <span className="font-semibold text-white">Color:</span>{" "}
              {car.carcolor}
            </p>

            {/* Description */}
            <p className="text-sm text-gray-400 mt-3 line-clamp-3">
              {car.description}
            </p>

            {/* Button */}
            <button
              onClick={() => (window.location.href = `/car/${car.id}`)}
              className="mt-5 w-full bg-red-500 text-white py-2.5 rounded-lg 
                         font-semibold hover:bg-red-600 
                         transition duration-300"
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
