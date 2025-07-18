import React from "react";
 // adjust the path to your logo
import logo from "../assets/hehe.png"
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <img src={logo} alt="Logo" className="h-8 w-8 object-cover" />
            <span className="text-3xl font-bold">CreatorMarket</span>
          </div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Where every product has a story, every creator has a voice, and every buyer finds authenticity.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-12 text-gray-400">
          <div>
            <h3 className="font-bold mb-4 text-lg text-white">For Creators</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-amber-400">Join the Marketplace</a></li>
              <li><a href="#" className="hover:text-amber-400">Creator Stamp Certification</a></li>
              <li><a href="#" className="hover:text-amber-400">FAQ & Support</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-lg text-white">For Buyers</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-amber-400">Browse Collections</a></li>
              <li><a href="#" className="hover:text-amber-400">Authenticity Guarantee</a></li>
              <li><a href="#" className="hover:text-amber-400">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-lg text-white">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-amber-400">About Us</a></li>
              <li><a href="#" className="hover:text-amber-400">Careers</a></li>
              <li><a href="#" className="hover:text-amber-400">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-lg text-white">Connect</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-amber-400">Twitter</a></li>
              <li><a href="#" className="hover:text-amber-400">Instagram</a></li>
              <li><a href="#" className="hover:text-amber-400">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        <p className="text-center text-gray-600 text-sm">
          &copy; {new Date().getFullYear()} CreatorMarket. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
