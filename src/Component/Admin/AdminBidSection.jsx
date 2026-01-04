import axios from "axios";
import React, { useEffect, useState } from "react";

export default function AdminBidSection() {
  const [showbid, setbid] = useState([]);
  const [error, setError] = useState("");
  
useEffect(() => {
  axios
    .get("http://localhost:8080/admin/GetallBid")
    .then((res) => setbid(res.data))
    .catch((err) => {
      setError(err.response?.data?.message || "Failed to load bids");
    });
}, []);

  const handleDelete = async (bidId) => {
  try {
    await axios.delete(`http://localhost:8080/bids/delete/${bidId}`);
    alert("Bid deleted successfully");

    setbid((prev) => prev.filter((bid) => bid.bidId !== bidId));
  } catch (err) {
    alert(err.response?.data?.message || "Failed to delete bid");
  }
};


  const handleViewCarDetail = (carId) => {
    window.location.href = `/car/${carId}`;
  };

  const handelwhatsapp = (phone, carName) => {
    const message = `Hello 👋
I am interested in your bid for the car 🚗
Car Name: ${carName}`;

    const url = `https://wa.me/91${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-[#0B0B0B] px-6 py-10">
      
      {/* Heading */}
      <h1 className="text-center text-3xl md:text-4xl font-bold text-red-500 mb-10">
        Admin Bid Dashboard
      </h1>

      {/* Grid */}
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {showbid.map((bid) => (
          <div
            key={bid.bidId}
            className="bg-[#121212] border border-gray-800 rounded-2xl
                       shadow-lg hover:shadow-red-500/20
                       transition-all duration-300"
          >
            {/* Header */}
            <div className="p-4 border-b border-gray-800">
              <h2 className="text-xl font-bold text-white">
                {bid.car?.carname}
              </h2>
              <p className="text-sm text-gray-400">
                Model: {bid.car?.modelname}
              </p>
            </div>

            {/* Body */}
            <div className="p-5 space-y-2 text-sm text-gray-300">
              <p className="text-lg font-semibold text-green-400">
                ₹ {bid.bidAmount}
              </p>

              <p><span className="text-white font-semibold">Bidder:</span> {bid.bidderName}</p>
              <p><span className="text-white font-semibold">Email:</span> {bid.email}</p>
              <p><span className="text-white font-semibold">Phone:</span> {bid.phonenumber}</p>
              <p><span className="text-white font-semibold">Car No:</span> {bid.car?.carnumber}</p>

              <p className="text-xs text-gray-500">
                Bid Time: {bid.bidTime}
              </p>
            </div>

                <div className="flex gap-3 p-4 border-t border-gray-800">
              <button
                onClick={() => handleDelete(bid.bidId)}
                className="flex-1 py-2 rounded-lg bg-red-600
                           hover:bg-red-700 text-white font-medium transition"
              >
                Delete
              </button>

              <button
                onClick={() =>
                  handelwhatsapp(bid.phonenumber, bid.car?.carname)
                }
                className="flex-1 py-2 rounded-lg bg-green-600
                           hover:bg-green-700 text-white font-medium transition"
              >
                WhatsApp
              </button>

              <button
                onClick={() => handleViewCarDetail(bid.car?.id)}
                className="flex-1 py-2 rounded-lg bg-gray-900
                           hover:bg-yellow-600 text-white font-medium transition"
              >
                View Car
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
