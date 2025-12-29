import React, { useEffect, useState } from 'react';

export default function Home() {
  const [showcars, setcars] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/cars")
      .then(res => res.json())
      .then(data => setcars(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Available Cars 🚗
      </h1>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {showcars.map((car) => (
          <div 
            key={car.id} 
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6"
          >
            <h2 className="text-xl font-semibold text-blue-600 mb-2">
              {car.carname}
            </h2>

            <p className="text-gray-700">
              <span className="font-semibold">Model:</span> {car.modelname}
            </p>

            <p className="text-gray-700">
              <span className="font-semibold">Location:</span> {car.location}
            </p>

            <div className="flex gap-2 mt-3">
              <span className="px-3 py-1 text-sm bg-gray-200 rounded-full">
                {car.geartype}
              </span>
              <span className="px-3 py-1 text-sm bg-gray-200 rounded-full">
                {car.fueltype}
              </span>
            </div>

            <p className="text-gray-700 mt-3">
              <span className="font-semibold">Car No:</span> {car.carnumber}
            </p>

            <p className="text-gray-700">
              <span className="font-semibold">Color:</span> {car.carcolor}
            </p>

            <p className="text-sm text-gray-600 mt-3 line-clamp-3">
              {car.description}
            </p>
            <button
              className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg 
                         hover:bg-blue-800 transition duration-300"
              onClick={() => window.location.href = `/car/${car.id}`}
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
