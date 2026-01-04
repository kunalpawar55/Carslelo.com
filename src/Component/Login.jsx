import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [showemail, setemail] = useState("");
  const [showpass, setpass] = useState("");
  const navigate = useNavigate();

  const handellogin = () => {
    axios
      .post("http://localhost:8080/login/login", {
        email: showemail,
        password: showpass,
      })
      .then((response) => {
        localStorage.setItem("user", JSON.stringify(response.data));
        alert("Login Successful 🚀");
        navigate("/");
      })
      .catch(() => {
        alert("Invalid email or password ❌");
      });
  };

  return (
    <div className="min-h-screen bg-[#0B0B0B] flex items-center justify-center px-4">
      
      <div
        className="w-full max-w-sm bg-gradient-to-br from-[#111] to-[#0B0B0B]
                   border border-gray-800 rounded-2xl shadow-2xl p-8"
      >
        {/* Title */}
        <h1 className="text-3xl font-bold text-center text-red-500 mb-2">
          Welcome Back
        </h1>
        <p className="text-center text-gray-400 text-sm mb-8">
          Login to continue bidding on cars
        </p>

        {/* Email */}
        <input
          type="email"
          placeholder="Email address"
          onChange={(e) => setemail(e.target.value)}
          className="w-full mb-4 px-4 py-2 rounded-lg
                     bg-[#121212] text-white
                     border border-gray-700
                     focus:outline-none focus:ring-2 focus:ring-red-500"
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setpass(e.target.value)}
          className="w-full mb-6 px-4 py-2 rounded-lg
                     bg-[#121212] text-white
                     border border-gray-700
                     focus:outline-none focus:ring-2 focus:ring-red-500"
        />

        <button
          onClick={handellogin}
          className="w-full bg-red-500 text-white py-3 rounded-xl
                     font-semibold text-lg
                     hover:bg-red-600 transition-all duration-300"
        >
          Login 🔐
        </button>

        <p className="text-center text-gray-400 text-sm mt-6">
          Don’t have an account?{" "}
          <span
            onClick={() => navigate("/registration")}
            className="text-red-500 cursor-pointer hover:underline"
          >
            Register
          </span>
        </p>
      </div>
    </div>
  );
}
