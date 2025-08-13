import React from "react";
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { assets } from "@/assets/assets";
import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col md:flex-row items-start justify-center px-6 md:px-16 lg:px-32 gap-5 py-5 border-b border-gray-500/30 text-gray-500">
        {/* Logo column */}
        <div className="w-full md:w-1/4 flex flex-col items-start">
          <Image className="w-28 md:w-40" src={assets.logo} alt="logo" />
          <p className="mt-2 text-sm"></p>
        </div>

        {/* Company */}
        <div className="w-full md:w-1/4 flex flex-col items-start md:items-center">
          <h2 className="font-medium text-gray-900 mb-5">Company</h2>
          <ul className="text-sm space-y-2">
            <li>
              <a className="hover:underline transition" href="#">
                Home
              </a>
            </li>
            <li>
              <a className="hover:underline transition" href="#">
                About us
              </a>
            </li>
            <li>
              <a className="hover:underline transition" href="#">
                Contact us
              </a>
            </li>
            <li>
              <a className="hover:underline transition" href="#">
                Privacy policy
              </a>
            </li>
          </ul>
        </div>

        {/* Get in touch */}
        <div className="w-full md:w-1/4 flex flex-col items-start md:items-center">
          <h2 className="font-medium text-gray-900 mb-5">Get in touch</h2>
          <div className="text-sm space-y-2">
            <p>
              Email:{" "}
              <a href="mailto:contact@SerpentStudios.com" className="hover:text-gray-900">
                contact@SerpentStudios.com
              </a>
            </p>
            <p>Phone: +91 70225 87766</p>
            <p>Address: Chennai, Tamil Nadu, India</p>
          </div>
        </div>

        {/* Follow Us */}
        <div className="w-full md:w-1/4 flex flex-col items-start md:items-center">
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4 text-2xl">
            <a href="#" className="hover:text-pink-500" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-blue-500" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-blue-700" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      <p className="py-4 text-center text-xs md:text-sm">
        Copyright 2025 © SerpentStudios All Right Reserved.
      </p>
    </footer>
  );
};

export default Footer;
