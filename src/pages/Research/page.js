'use client';

import Image from 'next/image';

export default function ResearchDevelopment() {
  return (
    <section className="bg-white text-gray-800 py-16 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div>
          <h2 className="text-4xl font-bold text-blue-700 mb-6">
            Research & Development
          </h2>
          <p className="mb-4 leading-relaxed text-gray-700">
            Recently the company has started focusing on research and development in collaboration with the universities and technical institutes in its home town. This Research & Development serves not only the national but also the international causes.
          </p>
          <p className="mb-4 leading-relaxed text-gray-700">
            To serve the nation and the country, R&D helps by saving valuable foreign exchange by developing the products of global standards locally. It also helps in deploying and enhancing the skill set of human resources and technologies available in the country, which thereby again serves the community.
          </p>
          <p className="mb-4 leading-relaxed text-gray-700">
            This R&D supports the international cause of the company by letting the company focus on its primary objective – providing the most competitive prices and excellent services to the valued multinational and foreign consumers of its products.
          </p>
          <p className="leading-relaxed text-gray-700">
            With the objective to bridge the gap between research and industry, the company has opened a new avenue of research by developing specialized automated tools and machines, besides producing quality products locally to international standards.
          </p>
        </div>

        
        <div className="relative w-full h-96">
          <Image
            src="/images/aboutimg.jpg" 
            alt="Research and Development"
            fill
            className="object-cover rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
~