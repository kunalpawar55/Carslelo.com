import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {  useParams } from 'react-router-dom';
export default function GetCarbyId() {

  const [car, setCar] = useState(null);
const {id} = useParams();
  useEffect(() => {
    axios.get(`http://localhost:8080/cars/getid/${id}`)
      .then((res) => setCar(res.data))
      .catch((err) => console.log(err));
  }, [id]);
  
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Car Details 🚗
      </h1>

      {car && (
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md p-6">
          
          <h2 className="text-xl font-semibold text-blue-600 mb-2">
            {car.carname}
          </h2>

          <p><b>Model:</b> {car.modelname}</p>
          <p><b>Location:</b> {car.location}</p>

          <div className="flex gap-2 mt-3">
            <span className="px-3 py-1 bg-gray-200 rounded-full">
              {car.geartype}
            </span>
            <span className="px-3 py-1 bg-gray-200 rounded-full">
              {car.fueltype}
            </span>
          </div>

          <p className="mt-3"><b>Car No:</b> {car.carnumber}</p>
          <p><b>Color:</b> {car.carcolor}</p>

          <p className="text-sm text-gray-600 mt-3">
            {car.description}
          </p>
         <button className='bg-red-600 text-white p-3 rounded-lg
          hover:bg-slate-800'  onClick={()=>window.location.href=`/makebid/${car.id}`}>Make a bid</button>
        </div>
      )}
    </div>
  );
}
