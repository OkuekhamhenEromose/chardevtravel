import { useEffect, useState, useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';
import Expedia from '../assets/images/Expedia-Logo-2010-removebg-preview.png';
import Hotel from '../assets/images/Hotels.com-Logo.jpg';
import TripAdvisor from '../assets/images/tripadvisor.png';
import Skyscanner from '../assets/images/Skyscanner-Logo-Vector.png';
import Agoda from '../assets/images/Agoda_logo_2019.svg.png';

// Improved Counter component that handles different formats
interface CounterProps {
  value: string;
  duration?: number;
}

const companies = [
  { 
    name: 'Airbnb', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png' 
  },
  { 
    name: 'Booking', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Booking.com_logo.svg/2560px-Booking.com_logo.svg.png' 
  },
  { 
    name: 'Expedia', 
    logo: Expedia
  },
  { 
    name: 'TripAdvisor', 
    logo: TripAdvisor
  },
  { 
    name: 'Skyscanner', 
    logo: Skyscanner 
  },
  { 
    name: 'Hotels.com', 
    logo: Hotel
  },
  { 
    name: 'Agoda', 
    logo: Agoda
  }
];

const Counter = ({ value, duration = 2000 }: CounterProps) => {
  const [count, setCount] = useState(0);
  const [suffix, setSuffix] = useState('');

  useEffect(() => {
    // Extract numeric value and suffix from the prop
    const numericMatch = value.match(/\d+/);
    if (!numericMatch) {
      setSuffix(value); // For values like "24/7" that don't contain a plain number
      return;
    }

    const numericValue = parseInt(numericMatch[0]);
    const extractedSuffix = value.replace(numericMatch[0], '');
    setSuffix(extractedSuffix);

    let start = 0;
    const increment = numericValue / (duration / 16); // 60fps

    const timer = setInterval(() => {
      start += increment;
      if (start >= numericValue) {
        setCount(numericValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value, duration]);

  if (value === '24/7') {
    return (
      <div className="text-4xl font-bold text-sky-500 mb-2">
        {value}
      </div>
    );
  }

  return (
    <div className="text-4xl font-bold text-sky-500 mb-2">
      {suffix === '/7' ? '24/7' : `${count.toLocaleString()}${suffix}`}
    </div>
  );
};

// Animation variants for header elements (updated to match Contact.tsx)
const headerVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: -60,
    scale: 0.9
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const headerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const TrustedCompanies = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <section className="py-20 bg-white border-y border-gray-100" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Updated header with the same animation as Contact.tsx */}
        <motion.div
          variants={headerContainerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h3 
            variants={headerVariants}
            className="text-sky-500 font-semibold text-lg mb-2"
          >
            Our Partners
          </motion.h3>
          <motion.h2 
            variants={headerVariants}
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
          >
            Trusted By Industry Leaders
          </motion.h2>
          <motion.p 
            variants={headerVariants}
            className="text-gray-600 text-lg max-w-2xl mx-auto"
          >
            We partner with the world's leading travel companies to bring you the best experiences.
          </motion.p>
        </motion.div>

        {/* Sliding Companies */}
        <div className="relative overflow-hidden">
          <div className="flex items-center">
            {/* Infinite scrolling container */}
            <div className="flex animate-infinite-scroll whitespace-nowrap">
              {companies.map((company, index) => (
                <div
                  key={`first-${index}`}
                  className="inline-flex items-center justify-center mx-8 group"
                >
                  <div className="bg-gray-50 hover:bg-sky-50 rounded-2xl p-6 w-48 h-32 flex items-center justify-center transition-all duration-300 group-hover:shadow-lg">
                    <img 
                      src={company.logo} 
                      alt={company.name}
                      className="h-20 w-full object-contain object-center grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 px-2"
                    />
                  </div>
                </div>
              ))}
              {/* Duplicate for seamless looping */}
              {companies.map((company, index) => (
                <div
                  key={`second-${index}`}
                  className="inline-flex items-center justify-center mx-8 group"
                >
                  <div className="bg-gray-50 hover:bg-sky-50 rounded-2xl p-6 w-48 h-32 flex items-center justify-center transition-all duration-300 group-hover:shadow-lg">
                    <img 
                      src={company.logo} 
                      alt={company.name}
                      className="h-20 w-full object-contain object-center grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 px-2"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-gray-100">
          <div className="text-center">
            <Counter value="50K+" />
            <div className="text-gray-600 font-medium">Happy Travelers</div>
          </div>
          <div className="text-center">
            <Counter value="200+" />
            <div className="text-gray-600 font-medium">Destinations</div>
          </div>
          <div className="text-center">
            <Counter value="15+" />
            <div className="text-gray-600 font-medium">Years Experience</div>
          </div>
          <div className="text-center">
            <Counter value="24/7" />
            <div className="text-gray-600 font-medium">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedCompanies;