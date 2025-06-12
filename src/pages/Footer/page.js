import React, { useEffect, useState } from "react";
import { FaFacebookF, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const [year, setYear] = useState('');

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-gradient-to-br from-[#0b1a36] to-[#12284a] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
          {/* Company Info */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
              MEW Cables (Pvt.) Ltd.
            </h3>
            <p className="text-sm sm:text-base text-gray-300">
              Plot #123, Industrial Area, Karachi, Pakistan
            </p>
            <p className="text-sm sm:text-base text-gray-300 mt-2">
              Tel: +92 300 1234567 <br />
              Email:{" "}
              <a
                href="mailto:info@mewcables.com"
                className="underline hover:text-sky-400"
              >
                info@mewcables.com
              </a>
              <br />
              WhatsApp: @mewcables
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 mt-4 lg:mt-0">
            <a
              href="#"
              className="bg-white text-sky-600 p-2 rounded-full hover:bg-sky-300 transition"
            >
              <FaFacebookF size={18} />
            </a>
            <a
              href="#"
              className="bg-white text-green-500 p-2 rounded-full hover:bg-green-300 transition"
            >
              <FaWhatsapp size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gradient-to-r from-sky-600 to-blue-800 text-center py-4 text-sm font-medium text-white">
        © {year} MEW Cables. All Rights Reserved.
        <br className="sm:hidden" />
        <span className="block sm:inline">
          {" "}
          |{" "}
          <a href="#" className="underline hover:text-sky-200">
            Privacy Policy
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
