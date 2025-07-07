import React from 'react'

const Careers = () => {
  return (
         <main className="min-h-screen bg-white py-16 px-4 sm:px-8 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <section className="text-center mb-14">
          <h1 className="text-4xl font-bold text-blue-800 mb-3">
            Careers at MEW Cables
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Join a company where your skills and passion power the future. We’re always looking for driven individuals to join our growing team.
          </p>
        </section>

        {/* Content Box */}
        <section className="bg-blue-50 rounded-xl shadow-lg p-8 sm:p-10 lg:p-14 grid md:grid-cols-2 gap-10">
          {/* Left Text */}
          <div>
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">Why Work With Us?</h2>
            <p className="text-gray-700 leading-relaxed mb-5">
              At MEW Cables, you’ll work with experienced teams, build real skills, and contribute
              to projects that make a difference across Pakistan. We offer a positive, collaborative environment where your growth matters.
            </p>

            <ul className="list-disc pl-5 text-gray-700 space-y-2 text-sm sm:text-base">
              <li>Supportive team and leadership</li>
              <li>Opportunities for growth and development</li>
              <li>Modern manufacturing technology</li>
              <li>Transparent work culture</li>
            </ul>
          </div>

          {/* Right Form CTA */}
          <div className="bg-white border border-blue-200 rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">Apply Online</h3>
            <p className="text-gray-700 text-sm sm:text-base mb-5">
              Click below to fill out the application form and upload your resume. Make sure to
              mention your previous experience and why you'd like to join MEW Cables.
            </p>

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdPU-eivz5VRaP1Vp7DpS9mpqYwZ6cs0bfNE4CheRVHAU429w/viewform?usp=header"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="w-full bg-blue-700 hover:bg-blue-800 transition text-white py-2.5 px-4 rounded-lg text-sm sm:text-base font-medium">
                Apply Now
              </button>
            </a>

            <p className="mt-4 text-xs text-center text-gray-500">
              Applications are reviewed weekly by our hiring team.
            </p>
          </div>
        </section>
      </div>
    </main>

  )
}

export default Careers