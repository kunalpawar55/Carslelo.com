import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function GetCarbyId() {
  const [car, setCar] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/cars/getid/${id}`)
      .then((res) => setCar(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="min-h-screen bg-[#0B0B0B] flex items-center justify-center px-6">
      
      {car && (
        <div
          className="w-full max-w-5xl bg-gradient-to-br from-[#111] to-[#0B0B0B]
                     border border-gray-800 rounded-3xl shadow-2xl
                     grid md:grid-cols-2 gap-10 p-10"
        >
          {/* LEFT – Car Visual / Name */}
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-bold text-red-500 mb-4">
              {car.carname}
            </h1>

            <p className="text-gray-400 text-lg mb-6">
              {car.description}
            </p>

            <div className="flex gap-3 flex-wrap">
              <span className="px-4 py-1 text-sm rounded-full bg-gray-800 text-gray-300">
                {car.geartype}
              </span>
              <span className="px-4 py-1 text-sm rounded-full bg-gray-800 text-gray-300">
                {car.fueltype}
              </span>
            </div>
          </div>

          {/* RIGHT – Car Details */}
          <div className="bg-[#121212] rounded-2xl p-8 border border-gray-700">
            <h2 className="text-2xl font-semibold text-white mb-6">
              Car Information
            </h2>

            <div className="space-y-4 text-gray-300">
              <p>
                <span className="font-semibold text-white">Model:</span>{" "}
                {car.modelname}
              </p>
              <p>
                <span className="font-semibold text-white">Location:</span>{" "}
                {car.location}
              </p>
              <p>
                <span className="font-semibold text-white">Car No:</span>{" "}
                {car.carnumber}
              </p>
              <p>
                <span className="font-semibold text-white">Color:</span>{" "}
                {car.carcolor}
              </p>
            </div>

            {/* CTA */}
            <button
              onClick={() =>
                (window.location.href = `/makebid/${car.id}`)
              }
              className="mt-8 w-full bg-red-500 text-white py-3 rounded-xl
                         text-lg font-semibold hover:bg-red-600
                         transition-all duration-300"
            >
              Make a Bid 🚀
            </button>
          </div>
        </div>
      )}

      {/* Loading */}
      {!car && (
        <p className="text-gray-400 text-lg animate-pulse">
          Loading car details...
        </p>
      )}
    </div>
  );
}
