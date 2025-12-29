import axios from 'axios';
import React, {  useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Makebid() {

  const [showbidamout, setbidamout] = useState('');
  const [showbidname, setbidname] = useState('');
    const [showemail, setemail] = useState('');

   const {id}=useParams();


  const makebid = () => {
    const biddata = {
      bidAmount: showbidamout,
      bidderName: showbidname,
      email: showemail
    };

    axios.post(`http://localhost:8080/bids/add/${id}`, biddata)
      .then(() => {
        alert('Bid Placed Successfully!');
        setbidamout('');
        setbidname('');
      })
      .catch(() => {
        alert('Bid Placement Failed. Please try again.');
      });
  };

  return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-4 p-6 w-80
        text-white text-center
        border-2 border-red-300
        bg-black rounded-lg">

        <h1 className="text-xl font-semibold">Make Bid</h1>

        <input
          type="text"
          placeholder="Enter your name"
          value={showbidname}
          onChange={(e) => setbidname(e.target.value)}
          className="p-2 rounded text-black focus:outline-none focus:ring-2 focus:ring-red-500"
        />

        <input
          type="number"
          placeholder="Enter your bid amount"
          value={showbidamout}
          onChange={(e) => setbidamout(e.target.value)}
          className="p-2 rounded text-black focus:outline-none focus:ring-2 focus:ring-red-500"
        />
        <input
          type="email"
          placeholder="Enter your email"
          value={showemail}
          onChange={(e) => setemail(e.target.value)}
          className="p-2 rounded text-black focus:outline-none focus:ring-2 focus:ring-red-500"
        />

        <button
          onClick={makebid}
          className="bg-red-600 hover:bg-red-700 transition p-2 rounded font-semibold"
        >
          Make a Bid
        </button>
      </div>
    </div>
  );
}
