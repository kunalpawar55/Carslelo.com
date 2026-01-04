import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function Makebid() {
  const [showbidamout, setbidamout] = useState("");
  const [showbidname, setbidname] = useState("");
  const [showemail, setemail] = useState("");

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    setemail(user?.email);
    setbidname(user?.name);
  }, []);

  const makebid = () => {
    const biddata = {
      bidAmount: showbidamout,
      bidderName: showbidname,
      email: showemail,
    };

    axios
      .post(`http://localhost:8080/bids/add/${id}`, biddata)
      .then(() => {
        alert("🚀 Bid placed successfully!");
        navigate(`/car/${id}`);
      })
      .catch(() => {
        alert("❌ Bid failed. Please try again.");
      });
  };

  return (
    <div className="min-h-screen bg-[#0B0B0B] flex items-center justify-center px-4">

      <div
        className="w-full max-w-md bg-gradient-to-br from-[#111] to-[#0B0B0B]
                   border border-gray-800 rounded-2xl shadow-2xl p-8"
      >
        <h1 className="text-3xl font-bold text-center text-red-500 mb-2">
          Place Your Bid
        </h1>
        <p className="text-center text-gray-400 text-sm mb-6">
          Enter your best offer to compete for this car
        </p>

        <div className="bg-[#121212] rounded-xl p-4 mb-5 text-left text-sm">
          <p className="text-gray-300">
            <span className="font-semibold text-white">Bidder:</span>{" "}
            {showbidname}
          </p>
          <p className="text-gray-300 mt-1">
            <span className="font-semibold text-white">Email:</span>{" "}
            {showemail}
          </p>
        </div>

        <input
          type="number"
          placeholder="Enter bid amount (₹)"
          value={showbidamout}
          onChange={(e) => setbidamout(e.target.value)}
          className="w-full p-3 rounded-lg text-black text-lg
                     focus:outline-none focus:ring-2 focus:ring-red-500"
        />

        <button
          onClick={makebid}
          className="mt-6 w-full bg-red-500 text-white py-3 rounded-xl
                     text-lg font-semibold hover:bg-red-600
                     transition-all duration-300"
        >
          Submit Bid 🚗
        </button>

        <button
          onClick={() => navigate(-1)}
          className="mt-4 w-full text-gray-400 hover:text-white transition text-sm"
        >
          ← Back to Car Details
        </button>
      </div>
    </div>
  );
}
