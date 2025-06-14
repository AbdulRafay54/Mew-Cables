import Image from "next/image";

 function Footer() {
  return (
    <footer className="bg-gray-300 border-t border-blue-100 text-blue-900 py-10 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8">
        {/* Logo and Name */}
        <div className="flex items-center gap-4">
          <img
            src="/images/logo.png"
            alt="MEW Cables Logo"
            className="h-16 object-contain"
          />
          <h2 className="text-xl sm:text-2xl font-bold text-blue-800">MEW CABLES</h2>
        </div>

        {/* Address & Contact Info */}
        <div className="text-sm sm:text-base text-blue-700 leading-relaxed">
          <p>
            Address: Plot #24, Sector 16-B, North Karachi Industrial Area, Karachi, Pakistan
          </p>
          <p>CEO: Obaid-UR-Rehman</p>
          <p className="flex flex-wrap gap-4">
            <span>Tel: +92-21-12345678</span>
            <span>Fax: +92-21-87654321</span>
          </p>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-6 border-t border-blue-100 pt-4 text-center text-xs text-blue-500 tracking-wide">
        © 2025 MEW CABLES. All rights reserved.
      </div>
    </footer>
  );
}
export default Footer;