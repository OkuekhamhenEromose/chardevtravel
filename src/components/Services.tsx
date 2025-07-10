import { useState, useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';
import { Play, Hotel, Map, Plane, Star, ArrowRight } from 'lucide-react';

const Services = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [playingVideo, setPlayingVideo] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
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

  const playButtonVariants: Variants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay: 0.5
      }
    }
  };

  const serviceVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.8 + i * 0.2,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  const services = [
    {
      icon: Hotel,
      title: "Luxury Accommodations",
      description: "Hand-picked luxury hotels and resorts for the ultimate comfort experience.",
      features: ["5-Star Hotels", "Private Villas", "Boutique Resorts", "Exclusive Access"],
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: Map,
      title: "Guided Tours",
      description: "Expert local guides who bring destinations to life with stories and insights.",
      features: ["Local Experts", "Cultural Tours", "Adventure Guides", "Private Groups"],
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Plane,
      title: "Travel Planning",
      description: "Complete travel planning from flights to activities, all tailored to you.",
      features: ["Flight Booking", "Itinerary Design", "Activity Planning", "24/7 Support"],
      color: "from-blue-500 to-cyan-600"
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden" ref={ref}>
      {/* Background Image with Parallax */}
      <motion.div 
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <img
          src="https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Beautiful landscape"
          className="w-full h-full object-cover"
        />
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-10 w-4 h-4 bg-white/30 rounded-full blur-sm"
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 0.8, 0.3]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-40 right-20 w-6 h-6 bg-sky-400/40 rounded-full blur-sm"
        animate={{
          y: [0, 15, 0],
          x: [0, 10, 0],
          opacity: [0.4, 0.9, 0.4]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center"
        >
          {/* Section Header */}
          <motion.div variants={headerVariants} className="mb-16">
            <motion.h3 
              className="text-sky-400 font-semibold text-lg mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Our Services
            </motion.h3>
            <motion.h2 
              className="text-4xl lg:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Experience The{' '}
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                Journey
              </motion.span>
            </motion.h2>
            <motion.p 
              className="text-gray-200 text-lg max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Watch how we create unforgettable travel experiences tailored to your dreams
            </motion.p>
          </motion.div>

          {/* Play Button */}
          <motion.div 
            className="flex justify-center mb-20"
            variants={playButtonVariants}
          >
            <motion.button
              className="group relative"
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
              onClick={() => setPlayingVideo(!playingVideo)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Animated Ripple Effect */}
              <motion.div 
                className="absolute inset-0 bg-white/10 rounded-full"
                animate={{ 
                  scale: isHovered ? [1, 1.5, 1] : 1,
                  opacity: isHovered ? [0.3, 0.1, 0.3] : 0.3
                }}
                transition={{ 
                  duration: 2,
                  repeat: isHovered ? Infinity : 0,
                  ease: "easeInOut"
                }}
              />
              
              {/* Outer Ring */}
              <motion.div
                className="relative bg-white/20 backdrop-blur-sm rounded-full p-8 border border-white/30"
                animate={{ 
                  rotate: playingVideo ? 360 : 0,
                  scale: isHovered ? 1.1 : 1
                }}
                transition={{ 
                  rotate: { duration: 2, ease: "linear", repeat: playingVideo ? Infinity : 0 },
                  scale: { duration: 0.3 }
                }}
              >
                {/* Inner Circle */}
                <motion.div
                  className="bg-white rounded-full p-6 shadow-2xl"
                  whileHover={{ 
                    boxShadow: "0 25px 50px rgba(255,255,255,0.3)"
                  }}
                >
                  <motion.div
                    animate={{ 
                      scale: playingVideo ? [1, 0.8, 1] : 1,
                      rotate: playingVideo ? [0, 180, 360] : 0
                    }}
                    transition={{ 
                      duration: 1,
                      repeat: playingVideo ? Infinity : 0
                    }}
                  >
                    <Play className="w-12 h-12 text-sky-500 ml-1" fill="currentColor" />
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Status Text */}
              <motion.div
                className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 text-white/80"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <span className="text-sm font-medium">
                  {playingVideo ? 'Playing Experience Video' : 'Click to Play Experience'}
                </span>
              </motion.div>
            </motion.button>
          </motion.div>

          {/* Services Grid */}
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            {services.map((service, index) => {
              const IconComponent = service.icon;
              
              return (
                <motion.div
                  key={index}
                  custom={index}
                  variants={serviceVariants}
                  className="group"
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div 
                    className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 hover:bg-white/20 transition-all duration-500 border border-white/20 h-full"
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: "0 25px 50px rgba(255,255,255,0.1)"
                    }}
                  >
                    {/* Icon */}
                    <motion.div
                      className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}
                      whileHover={{ 
                        rotate: 5,
                        scale: 1.1,
                        boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <IconComponent className="w-10 h-10 text-white" />
                    </motion.div>

                    {/* Content */}
                    <motion.h3 
                      className="text-2xl font-bold text-white mb-4 group-hover:text-sky-300 transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                    >
                      {service.title}
                    </motion.h3>
                    
                    <motion.p 
                      className="text-gray-200 mb-6 leading-relaxed"
                      initial={{ opacity: 0.8 }}
                      whileHover={{ opacity: 1 }}
                    >
                      {service.description}
                    </motion.p>

                    {/* Features */}
                    <motion.div 
                      className="space-y-3 mb-6"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      {service.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          className="flex items-center space-x-3"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.7 + featureIndex * 0.1 }}
                          whileHover={{ x: 5 }}
                        >
                          <Star className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </motion.div>
                      ))}
                    </motion.div>

                    {/* CTA Button */}
                    <motion.button
                      className="w-full bg-white/10 hover:bg-white/20 text-white py-3 px-6 rounded-full font-semibold transition-all duration-300 border border-white/20 flex items-center justify-center space-x-2"
                      whileHover={{ 
                        scale: 1.05,
                        backgroundColor: "rgba(255,255,255,0.25)"
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>Learn More</span>
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ArrowRight className="w-4 h-4" />
                      </motion.div>
                    </motion.button>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
          >
            <motion.button
              className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white px-10 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(14, 165, 233, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              Explore All Services
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;