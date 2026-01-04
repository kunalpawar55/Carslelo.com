import axios from "axios";
import React, { useState } from "react";

export default function RegistrationUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !password || !phone) {
      setError("All fields are required");
      return;
    }

    const userData = {
      name,
      email,
      password,
      phonenumber: phone, 
    };

    try {
      setLoading(true);
      setError("");

      await axios.post("http://localhost:8080/regi/", userData);

      alert("Registration Successful 🚗");

      setName("");
      setEmail("");
      setPassword("");
      setPhone("");
    } catch (err) {
      setError(
        err.response?.data?.message || "Registration failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0B0B] flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-gradient-to-br from-[#111] to-[#0B0B0B]
                   border border-gray-800 rounded-2xl shadow-2xl p-8"
      >
        <h2 className="text-3xl font-bold text-center text-red-500 mb-2">
          Create Account
        </h2>

        {error && (
          <p className="text-center text-red-400 mb-4">
            {error}
          </p>
        )}

        <div className="mb-4">
          <label className="block text-gray-300 mb-1">Full Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-[#121212] text-white"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-300 mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-[#121212] text-white"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-300 mb-1">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-[#121212] text-white"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-300 mb-1">Phone Number</label>
          <input
            type="text"   
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-[#121212] text-white"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-red-500 text-white py-3 rounded-xl
                     font-semibold hover:bg-red-600 disabled:opacity-50"
        >
          {loading ? "Registering..." : "Register 🚗"}
        </button>
      </form>
    </div>
  );
}
