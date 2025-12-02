import React from "react";
import { FaInstagram, FaFacebookF, FaPinterestP } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-10 pt-16">
      <div className="max-w-7xl mx-auto px-3 flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-0">
        
        <div className="text-center sm:text-left">
          <h3 className="text-lg font-semibold mb-3 text-green-200">Quick Links</h3>
          <ul className="space-y-1 text-gray-300">
            <li><a href="/about" className="hover:text-white transition">About</a></li>
            <li><a href="mailto:support@greennest.com" className="hover:text-white transition">Contact</a></li>
            <li><a href="/privacy-policy" className="hover:text-white transition">Privacy Policy</a></li>
          </ul>
        </div>

        <div className="flex gap-5 text-2xl">
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-green-300 transition">
            <FaInstagram />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-green-300 transition">
            <FaFacebookF />
          </a>
          <a href="https://pinterest.com" target="_blank" rel="noreferrer" className="hover:text-green-300 transition">
            <FaPinterestP />
          </a>
        </div>
      </div>

      <div className="border-t border-gray-400 my-6 mx-6"></div>

      <div className="text-center text-gray-400 text-sm">
        © 2025 <span className="text-green-300 font-medium">GreenNest</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
