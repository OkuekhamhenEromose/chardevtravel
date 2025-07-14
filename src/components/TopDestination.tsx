import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView, Variants } from 'framer-motion';
import { MapPin, Star, Heart, Camera } from 'lucide-react';

const destinations = [
  {
    id: 1,
    name: 'Santorini, Greece',
    image: 'https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Experience the magic of white-washed buildings and stunning sunsets over the Aegean Sea in this iconic Greek island paradise.',
    rating: 4.9,
    price: '$1,299',
    category: 'Romantic'
  },
  {
    id: 2,
    name: 'Bali, Indonesia',
    image: 'https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Discover tropical paradise with ancient temples, lush rice terraces, pristine beaches, and vibrant cultural traditions.',
    rating: 4.8,
    price: '$899',
    category: 'Adventure'
  },
  {
    id: 3,
    name: 'Tokyo, Japan',
    image: 'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Immerse yourself in the perfect blend of traditional culture and modern innovation in this bustling metropolis.',
    rating: 4.9,
    price: '$1,599',
    category: 'Cultural'
  },
  {
    id: 4,
    name: 'Machu Picchu, Peru',
    image: 'https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Journey to the ancient Incan citadel high in the Andes Mountains, one of the New Seven Wonders of the World.',
    rating: 4.9,
    price: '$1,199',
    category: 'Historical'
  },
  {
    id: 5,
    name: 'Iceland',
    image: 'https://images.pexels.com/photos/1760900/pexels-photo-1760900.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Witness the Northern Lights and explore dramatic landscapes of fire and ice, geysers, and breathtaking waterfalls.',
    rating: 4.8,
    price: '$1,799',
    category: 'Nature'
  },
  {
    id: 6,
    name: 'Maldives',
    image: 'https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Relax in overwater bungalows surrounded by crystal-clear turquoise waters and pristine coral reefs.',
    rating: 4.9,
    price: '$2,299',
    category: 'Luxury'
  }
];

const TopDestinations = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [likedDestinations, setLikedDestinations] = useState<number[]>([]);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-scroll every 4 seconds with smooth transition
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        (prevIndex + 1) % destinations.length
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [destinations.length]);

  const getVisibleDestinations = () => {
    const visible = [];
    for (let i = 0; i < itemsPerPage; i++) {
      const index = (currentIndex + i) % destinations.length;
      visible.push(destinations[index]);
    }
    return visible;
  };

  const toggleLike = (destinationId: number) => {
    setLikedDestinations(prev => 
      prev.includes(destinationId) 
        ? prev.filter(id => id !== destinationId)
        : [...prev, destinationId]
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const headerVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const slideVariants: Variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
      transition: {
        duration: 0.5
      }
    })
  };

  const visibleDestinations = getVisibleDestinations();

  return (
    <section className="py-20 bg-white relative overflow-hidden" id="destinations" ref={ref}>
      {/* Background Elements */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-sky-100/50 to-transparent rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h3 
            variants={headerVariants}
            className="text-sky-500 font-semibold text-lg mb-2"
          >
            Explore The World
          </motion.h3>
          <motion.h2 
            variants={headerVariants}
            className="text-4xl lg:text-6xl font-bold text-gray-900 mb-4"
          >
            Top{' '}
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600"
              whileHover={{ scale: 1.05 }}
            >
              Destinations
            </motion.span>
          </motion.h2>
          <motion.p 
            variants={headerVariants}
            className="text-gray-600 text-lg max-w-2xl mx-auto"
          >
            Discover our handpicked collection of the world's most breathtaking destinations, 
            each offering unique experiences and unforgettable memories.
          </motion.p>
        </motion.div>

        {/* Auto-scrolling Destinations */}
        <motion.div 
          className="relative overflow-hidden bg-gradient-to-r from-sky-50/50 via-transparent to-blue-50/50 rounded-3xl p-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Auto-scroll indicator */}
          <motion.div 
            className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <motion.div 
              className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-white/20"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-sm text-gray-600 font-medium flex items-center">
                <motion.span
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="mr-2"
                >
                  🎬
                </motion.span>
                Auto-scrolling every 4 seconds • Right to Left
              </span>
            </motion.div>
          </motion.div>

          {/* Destinations Container */}
          <div className="relative h-[700px] mt-8 overflow-hidden">
            <AnimatePresence custom={1} mode="wait">
              <motion.div
                key={currentIndex}
                custom={1} // Direction (1 for right-to-left)
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {visibleDestinations.map((destination, index) => {
                  const isLiked = likedDestinations.includes(destination.id);
                  
                  return (
                    <motion.div
                      key={`${destination.id}-${currentIndex}-${index}`}
                      className="group cursor-pointer bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500"
                      whileHover={{ 
                        y: -10,
                        scale: 1.02,
                        boxShadow: "0 25px 50px rgba(0,0,0,0.15)"
                      }}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="relative overflow-hidden h-72">
                        <motion.img
                          src={destination.image}
                          alt={destination.name}
                          className="w-full h-full object-cover"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                        />
                        
                        {/* Gradient Overlay */}
                        <motion.div 
                          className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        />

                        {/* Category Badge */}
                        <motion.div
                          className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.5 + index * 0.1 }}
                        >
                          <span className="text-sm font-semibold text-sky-600">
                            {destination.category}
                          </span>
                        </motion.div>

                        {/* Like Button */}
                        <motion.button
                          className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleLike(destination.id);
                          }}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.6 + index * 0.1 }}
                        >
                          <Heart 
                            className={`w-5 h-5 transition-colors duration-300 ${
                              isLiked ? 'text-red-500 fill-current' : 'text-gray-600'
                            }`}
                          />
                        </motion.button>

                        {/* Price Tag */}
                        <motion.div
                          className="absolute bottom-4 right-4 bg-sky-500 text-white px-4 py-2 rounded-full font-bold"
                          initial={{ opacity: 0, y: 20 }}
                          whileHover={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          {destination.price}
                        </motion.div>

                        {/* Overlay Content */}
                        <motion.div
                          className="absolute bottom-4 left-4 right-16 text-white"
                          initial={{ opacity: 0, y: 20 }}
                          whileHover={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-3">
                            <h4 className="font-bold text-lg mb-1">{destination.name}</h4>
                            <div className="flex items-center space-x-2">
                              <Star className="w-4 h-4 text-yellow-400 fill-current" />
                              <span className="text-sm">{destination.rating}</span>
                              <Camera className="w-4 h-4 ml-2" />
                            </div>
                          </div>
                        </motion.div>
                      </div>
                      
                      <div className="p-6">
                        <div className="flex items-center mb-3">
                          <MapPin className="w-5 h-5 text-sky-500 mr-2 flex-shrink-0" />
                          <h3 className="text-xl font-bold text-gray-900 group-hover:text-sky-500 transition-colors duration-300">
                            {destination.name}
                          </h3>
                        </div>
                        
                        <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
                          {destination.description}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <button className="text-sky-500 font-semibold hover:text-sky-600 transition-all duration-300 flex items-center space-x-2">
                            <span>Learn More</span>
                            <span>→</span>
                          </button>
                          
                          <div className="flex items-center space-x-1">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span className="text-sm font-medium text-gray-600">
                              {destination.rating}
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Progress indicator */}
        <motion.div 
          className="mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
        >
          <div className="bg-gray-200 rounded-full h-2 max-w-md mx-auto overflow-hidden">
            <motion.div 
              className="bg-gradient-to-r from-sky-400 to-sky-600 h-full rounded-full"
              initial={{ width: "0%" }}
              animate={{ 
                width: `${((currentIndex + 1) / destinations.length) * 100}%` 
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </div>
          <p className="text-center text-sm text-gray-500 mt-2">
            Destination {currentIndex + 1} of {destinations.length}
          </p>
        </motion.div>

        {/* Destination counter */}
        <motion.div 
          className="text-center mt-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2 }}
        >
          <motion.div 
            className="inline-flex items-center space-x-3 bg-white rounded-full px-8 py-4 shadow-lg border border-gray-100"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
            }}
          >
            <motion.span 
              className="text-3xl"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              🌍
            </motion.span>
            <span className="font-semibold text-gray-700 text-lg">
              {destinations.length} Amazing Destinations
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TopDestinations;