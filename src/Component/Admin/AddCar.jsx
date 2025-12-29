import axios from 'axios';
import React, { useState } from 'react';

export default function AddCar() {

  const [car, setCar] = useState({
    carname: '',
    modelname: '',
    carnumber: '',
    carcolor: '',
    location: '',
    description: '',
    geartype: 'AUTOMATIC',
    fueltype: 'PETROL'
  });

  const handleChange = (e) => {
    setCar({ ...car, [e.target.name]: e.target.value });
  };

  const addCar = () => {
    axios.post('http://localhost:8080/cars', car)
      .then(() => {
        alert('Car Added Successfully');
        setCar({
          carname: '',
          modelname: '',
          carnumber: '',
          carcolor: '',
          location: '',
          description: '',
          geartype: 'AUTOMATIC',
          fueltype: 'PETROL'
        });
      })
      .catch(err => {
        console.log(err);
        alert('Failed to add car');
      });
  };

  return (
    <div className="flex justify-center mt-6">
      <div className="flex flex-col gap-3 w-96 p-6 border-2 border-black rounded-lg bg-gray-100">

        <h1 className="text-xl font-semibold text-center">Add Car</h1>

        <input
          name="carname"
          placeholder="Car Name"
          value={car.carname}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <input
          name="modelname"
          placeholder="Model Name"
          value={car.modelname}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <input
          name="carnumber"
          placeholder="Car Number"
          value={car.carnumber}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <input
          name="carcolor"
          placeholder="Car Color"
          value={car.carcolor}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <input
          name="location"
          placeholder="Location"
          value={car.location}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <textarea
          name="description"
          placeholder="Description"
          value={car.description}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <select
          name="geartype"
          value={car.geartype}
          onChange={handleChange}
          className="border p-2 rounded"
        >
          <option value="AUTOMATIC">AUTOMATIC</option>
          <option value="MANUAL">MANUAL</option>
        </select>

        <select
          name="fueltype"
          value={car.fueltype}
          onChange={handleChange}
          className="border p-2 rounded"
        >
          <option value="PETROL">PETROL</option>
          <option value="DIESEL">DIESEL</option>
          <option value="ELECTRIC">ELECTRIC</option>
        </select>

        <button
          onClick={addCar}
          className="bg-black text-white p-2 rounded hover:bg-gray-800"
        >
          Add Car
        </button>

      </div>
    </div>
  );
}
