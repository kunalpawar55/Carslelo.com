import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function AdminBidSection() {
  const [showbid, setbid] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8080/admin/GetallBid')
      .then(res => setbid(res.data))
      .catch(err => console.log(err));
  }, []);

  const handleDelete = async (bidId) => {
    try {
      await axios.delete(`http://localhost:8080/admin/deletebid/${bidId}`);
      alert('Bid deleted successfully');

      setbid(prev => prev.filter(bid => bid.bidId !== bidId));
    } catch (error) {
      alert('Failed to delete bid. Please try again.');
    }
  };

  return (
    <div>
      <h1 className="text-center text-xl font-semibold">Admin Panel</h1>

      {showbid.map((bid) => (
        <div
          key={bid.bidId}
          className="border-2 border-red-600 m-3 p-3 rounded-lg bg-gray-200"
        >
          <p><b>Bidder Name:</b> {bid.bidderName}</p>
          <p><b>Bid Amount:</b> ₹{bid.bidAmount}</p>

          <p><b>Car Name:</b> {bid.car?.carname}</p>
          <p><b>Model:</b> {bid.car?.modelname}</p>
          <p><b>Car ID:</b> {bid.car?.id}</p>
          <p><b>Car Number:</b> {bid.car?.carnumber}</p>

          <p className="text-sm text-gray-600">
            <b>Bid Time:</b> {bid.bidTime}
          </p>

          <p className="text-sm text-gray-600">
            <b>Bid Email:</b> {bid.email}
          </p>

          <button
            className="text-lg border border-orange-600 p-3 m-2 rounded-lg 
                       bg-black text-zinc-50 hover:bg-orange-600"
            onClick={() => handleDelete(bid.bidId)}
          >
            Delete Bid
          </button>
        </div>
      ))}
    </div>
  );
}
