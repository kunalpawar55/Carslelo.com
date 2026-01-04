import React from "react";
import logo from "./ImagesFolder/Carslelo.jpeg";
export default function Footer() {
  return (
   <footer className="bg-[#0B0B0B] text-gray-400">
  <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8">

    <div>
      <img src={logo} alt="CarsLelo" className="h-10 mb-3" />
      <p className="text-sm">
        Trusted platform to buy & sell cars with confidence.
      </p>
    </div>

    <div>
      <h3 className="text-white font-semibold mb-3">Quick Links</h3>
      <ul className="space-y-2 text-sm">
        <li className="hover:text-red-500 cursor-pointer">Home</li>
        <li className="hover:text-red-500 cursor-pointer">Buy Cars</li>
        <li className="hover:text-red-500 cursor-pointer">Sell Cars</li>
      </ul>
    </div>

    <div>
      <h3 className="text-white font-semibold mb-3">Services</h3>
      <ul className="space-y-2 text-sm">
        <li>Verified Listings</li>
        <li>Best Prices</li>
        <li>Secure Deals</li>
      </ul>
    </div>

    <div>
      <h3 className="text-white font-semibold mb-3">Contact</h3>
      <p>support@carslelo.com</p>
      <p className="mt-2">+91 98765 43210</p>
    </div>
  </div>

  <div className="border-t border-gray-800 text-center py-4 text-sm">
    © {new Date().getFullYear()} <span className="text-red-500">CarsLelo</span>. All rights reserved.
  </div>
</footer>

  );
}
