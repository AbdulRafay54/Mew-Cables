"use client";

import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="bg-white text-gray-800 py-12 px-6 sm:px-12">
      <div className="max-w-5xl mx-auto">
        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-blue-800 mb-10 border-b-4 border-blue-500 inline-block pb-2">
          About MEW Cables
        </h1>

        {/* Intro Text */}
        <p className="text-lg leading-relaxed mb-8 text-gray-700">
          <strong>MEW Cables</strong> is one of the leading Car Cables and Assembly Components manufacturers in Pakistan.
          Over the past two decades, MEW Cables has established its reputation as a top-tier{" "}
          <strong>OEM (Original Equipment Manufacturer)</strong> and Replacement Parts Manufacturer.
        </p>

        <p className="text-lg leading-relaxed mb-8 text-gray-700">
          We provide a complete range of products to fulfill our customers’ requirements, ranging from Engine Control Cables
          to Speed Meter Cables. Our expertise and experience serve renowned Automobile Companies including{" "}
          <strong>Suzuki, Nissan, Daihatsu, Honda, Mazda</strong> and more.
        </p>

        <p className="text-lg leading-relaxed mb-12 text-gray-700">
          Apart from automobile control cables, we also design high-quality cables for plant and machinery,
          along with major components involved in cable assembly. With a proven export record,
          our current focus is expanding to <strong>OEM international customers</strong>.
        </p>

        {/* Mission Section */}
        <div className="flex flex-col sm:flex-row items-center gap-8 mb-16">
          <div className="w-full sm:w-1/2">
            <Image
              src="/images/about.webp"
              alt="Our Mission"
              width={600}
              height={400}
              className="rounded-xl shadow-lg w-full h-auto object-cover"
            />
          </div>
          <div className="w-full sm:w-1/2">
            <h2 className="text-3xl font-bold text-blue-700 mb-4 border-l-4 border-blue-500 pl-3">Our Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              To remain the most renowned replacement part manufacturer in Pakistan and globally.
              We aim to grow our OEM clientele by delivering top-tier Control Cables and Assembly Components,
              ensuring unmatched quality and <strong>customer satisfaction</strong> worldwide.
            </p>
          </div>
        </div>

        {/* Vision Section */}
        <div className="flex flex-col sm:flex-row-reverse items-center gap-8 mb-16">
          <div className="w-full sm:w-1/2">
            <Image
              src="/images/vission.jpg"
              alt="Our Vision"
              width={600}
              height={400}
              className="rounded-xl shadow-lg w-full h-auto object-cover"
            />
          </div>
          <div className="w-full sm:w-1/2">
            <h2 className="text-3xl font-bold text-blue-700 mb-4 border-l-4 border-blue-500 pl-3">Our Vision</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              In an era of rapid industrialization, maintaining an effective quality-cost ratio is crucial.
              We emphasize constant improvement while keeping quality and innovation at the core of our business growth.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-blue-700 mb-4 border-l-4 border-blue-500 pl-3">Our Values</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            We are dedicated to <strong>quality commitment</strong> and <strong>customer satisfaction</strong>. We deliver maximum value by offering
            optimum cost-quality ratios. Our strong reputation reflects the trust and satisfaction of our consumers.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Since day one, MEW® has prioritized customer satisfaction through quality and affordability. We believe{" "}
            <strong>Quality and Cost Control</strong> are key to success. Even with rising raw material prices, we apply{" "}
            <strong>VAVE (Value Analysis Value Engineering)</strong> to ensure quality while optimizing costs.
          </p>
        </div>

        {/* Signature */}
        <div className="text-right text-gray-600 font-semibold italic">
          — Obaid-UR-Rehman, Managing Director
        </div>
      </div>
    </div>
  );
}
