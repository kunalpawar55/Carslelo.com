import axios from "axios";
import React, { useState } from "react";

export default function AddCar() {
  const [car, setCar] = useState({
    carname: "",
    modelname: "",
    carnumber: "",
    carcolor: "",
    location: "",
    description: "",
    geartype: "AUTOMATIC",
    fueltype: "PETROL",
  });

  const handleChange = (e) => {
    setCar({ ...car, [e.target.name]: e.target.value });
  };

  const addCar = () => {
    axios.post("http://localhost:8080/cars", car)
      .then(() => alert("Car Added"))
      .catch(() => alert("Failed"));
  };

  return (
    <div className="min-h-screen bg-[#0B0B0B] flex items-center justify-center">
      
      <div className="w-full max-w-md bg-[#121212] p-6 rounded-lg border border-gray-800">
        <h2 className="text-xl font-semibold text-white text-center mb-4">
          Add Car
        </h2>

        <div className="space-y-3">
          <input name="carname" placeholder="Car Name" onChange={handleChange} className="input-dark" />
          <input name="modelname" placeholder="Model Name" onChange={handleChange} className="input-dark" />
          <input name="carnumber" placeholder="Car Number" onChange={handleChange} className="input-dark" />
          <input name="carcolor" placeholder="Car Color" onChange={handleChange} className="input-dark" />
          <input name="location" placeholder="Location" onChange={handleChange} className="input-dark" />

          <textarea
            name="description"
            placeholder="Description"
            onChange={handleChange}
            className="input-dark h-20"
          />

          <select name="geartype" onChange={handleChange} className="input-dark">
            <option>AUTOMATIC</option>
            <option>MANUAL</option>
          </select>

          <select name="fueltype" onChange={handleChange} className="input-dark">
            <option>PETROL</option>
            <option>DIESEL</option>
            <option>ELECTRIC</option>
          </select>

          <button
            onClick={addCar}
            className="w-full bg-red-600 text-white py-2 rounded
                       hover:bg-red-700 transition"
          >
            Add Car
          </button>
        </div>
      </div>

      <style>
        {`
          .input-dark {
            width: 100%;
            padding: 8px 10px;
            background: #0B0B0B;
            border: 1px solid #333;
            color: white;
            border-radius: 6px;
            outline: none;
          }
          .input-dark:focus {
            border-color: #ef4444;
          }
        `}
      </style>
    </div>
  );
}
