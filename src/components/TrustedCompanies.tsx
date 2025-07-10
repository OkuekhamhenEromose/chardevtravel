
const companies = [
  { name: 'Airbnb', logo: '🏠' },
  { name: 'Booking', logo: '🛏️' },
  { name: 'Expedia', logo: '✈️' },
  { name: 'TripAdvisor', logo: '🦉' },
  { name: 'Kayak', logo: '🛶' },
  { name: 'Skyscanner', logo: '🌐' },
  { name: 'Hotels.com', logo: '🏨' },
  { name: 'Agoda', logo: '🌟' }
];

const TrustedCompanies = () => {
  return (
    <section className="py-20 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h3 className="text-sky-500 font-semibold text-lg mb-2">Our Partners</h3>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Trusted By Industry Leaders
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We partner with the world's leading travel companies to bring you the best experiences.
          </p>
        </div>

        {/* Sliding Companies */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll">
            {/* First set */}
            {companies.map((company, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 mx-8 flex items-center justify-center group"
              >
                <div className="bg-gray-50 hover:bg-sky-50 rounded-2xl p-8 w-40 h-24 flex items-center justify-center transition-all duration-300 group-hover:shadow-lg">
                  <div className="text-center">
                    <div className="text-3xl mb-2">{company.logo}</div>
                    <div className="text-sm font-semibold text-gray-600 group-hover:text-sky-500 transition-colors duration-300">
                      {company.name}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {/* Second set for seamless loop */}
            {companies.map((company, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 mx-8 flex items-center justify-center group"
              >
                <div className="bg-gray-50 hover:bg-sky-50 rounded-2xl p-8 w-40 h-24 flex items-center justify-center transition-all duration-300 group-hover:shadow-lg">
                  <div className="text-center">
                    <div className="text-3xl mb-2">{company.logo}</div>
                    <div className="text-sm font-semibold text-gray-600 group-hover:text-sky-500 transition-colors duration-300">
                      {company.name}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-gray-100">
          <div className="text-center">
            <div className="text-4xl font-bold text-sky-500 mb-2">50K+</div>
            <div className="text-gray-600 font-medium">Happy Travelers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-sky-500 mb-2">200+</div>
            <div className="text-gray-600 font-medium">Destinations</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-sky-500 mb-2">15+</div>
            <div className="text-gray-600 font-medium">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-sky-500 mb-2">24/7</div>
            <div className="text-gray-600 font-medium">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedCompanies;