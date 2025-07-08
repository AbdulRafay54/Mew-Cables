'use client';

import Image from 'next/image';

function ResearchDevelopment() {
  return (
    <section className="bg-white text-gray-800 py-16 px-4 sm:px-8 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
        
      
        <div className="order-1 md:order-2 relative w-full h-64 sm:h-80 md:h-96">
          <Image
            src="/images/R&D.png"
            alt="Research and Development"
            fill
            className="object-cover rounded-2xl shadow-lg"
          />
        </div>

        
        <div className="order-2 md:order-1 space-y-4 text-justify">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-700">
            Research & Development
          </h2>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            Recently the company has started focusing on research and development in collaboration with the universities and technical institutes in its home town. This Research & Development serves not only the national but also the international causes.
          </p>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            To serve the nation and the country, R&D helps by saving valuable foreign exchange by developing the products of global standards locally. It also helps in deploying and enhancing the skill set of human resources and technologies available in the country, which thereby again serves the community.
          </p>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            This R&D supports the international cause of the company by letting the company focus on its primary objective – providing the most competitive prices and excellent services to the valued multinational and foreign consumers of its products.
          </p>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            With the objective to bridge the gap between research and industry, the company has opened a new avenue of research by developing specialized automated tools and machines, besides producing quality products locally to international standards.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ResearchDevelopment;
