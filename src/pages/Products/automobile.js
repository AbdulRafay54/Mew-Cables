'use client';

import Image from 'next/image';

const products = [
  { name: "Trunk Opener Cable", image: "/images/trunk-cable.jpg" },
  { name: "Clutch Cable", image: "/images/clutch-cable.jpg" },
  { name: "Accelerator Cable", image: "/images/accelerator-cable.jpg" },
  { name: "Brake Cable", image: "/images/brake-cable.jpg" },
  { name: "Gear Cable", image: "/images/gear-cable.jpg" },
  { name: "Bonnet Opener Cable", image: "/images/bonnet-cable.jpg" },
  { name: "Fuel Lid Cable", image: "/images/fuel-lid-cable.jpg" },
  { name: "Seat Opener Cable", image: "/images/seat-cable.jpg" },
];

export default function AutomobileProducts() {
  return (
    <div className="bg-white py-10 px-4">
      <h2 className="text-center text-3xl font-semibold text-blue-700 mb-8">Automobile</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {products.map((product, idx) => (
          <div key={idx} className="group relative overflow-hidden rounded-xl shadow hover:shadow-lg transition">
            <Image
              src={product.image}
              alt={product.name}
              width={300}
              height={200}
              className="object-cover w-full h-40"
            />
            <div className="absolute inset-0 bg-blue-700 bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-lg font-medium">{product.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
