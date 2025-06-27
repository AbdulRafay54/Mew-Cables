function Footer() {
  return (
    <footer className="bg-white border-t border-blue-200 text-blue-900 px-6 sm:px-10 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

        {/* Logo & Name */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <img
              src="/images/logo.png"
              alt="MEW Cables Logo"
              className="h-14 w-auto object-contain"
            />
            <h2 className="text-2xl font-bold tracking-wide text-blue-800">MEW CABLES</h2>
          </div>
          <p className="text-[15px] text-gray-700">
            Trusted partner in the automotive industry for quality cable solutions.
          </p>
        </div>

        {/* Contact Info */}
        <div className="text-[15px]  text-gray-700 leading-relaxed space-y-1">
          <h3 className="text-[23px]  mt-2 font-semibold text-blue-800 mb-2">Contact</h3>
          <p>Plot #24, Sector 16-B, North Karachi Industrial Area</p>
          <p>Karachi, Pakistan</p>
          <p>Tel: +92-21-12345678</p>
          <p>Fax: +92-21-87654321</p>
        </div>

        {/* About Section */}
        <div className="text-[15px] text-gray-700 leading-relaxed">
          <h3 className="text-[23px] mt-2 font-semibold text-blue-800 mb-2">About Us</h3>
          <p>
            MEW Cables specializes in OEM and replacement parts, delivering durability, innovation, and excellence for over 20 years.
          </p>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-10 pt-4 text-center text-xs text-gray-600 border-t border-blue-100 tracking-wide">
        © 2025 <span className="font-semibold text-blue-800">MEW CABLES</span>. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
