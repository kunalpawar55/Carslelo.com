import React, {  useState } from 'react'
import axios from 'axios';

import { useNavigate } from 'react-router-dom';

export default function Login() {

  const [showemail, setemail] = useState('');
  const [showpass, setpass] = useState('');
  const navigate = useNavigate();

  const handellogin = () => {
    axios.post('http://localhost:8080/login', {
      email: showemail,
      password: showpass
    })
    .then((response) => {
      console.log(response.data);
      alert('Login Successful!');
      navigate("/")

    })
    .catch((error) => {
      console.error(error);
      alert('Login Failed. Please check your credentials.');
            navigate("/login")

    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-sm">
        
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Login Page 🔐
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 px-4 py-2 border rounded-lg 
                     focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={e => setemail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-6 px-4 py-2 border rounded-lg 
                     focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={e => setpass(e.target.value)}
        />

        <button
          onClick={handellogin}
          className="w-full bg-red-600 text-white py-2 rounded-lg 
                     hover:bg-black transition duration-300"
        >
          Login
        </button>

      </div>
    </div>
  )
}
