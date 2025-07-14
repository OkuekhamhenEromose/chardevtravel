import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView, Variants } from 'framer-motion';
import { Mountain, Waves, Camera, Utensils, Compass, Plane, ArrowRight, Star, Sun } from 'lucide-react';

const activities = [
  {
    id: 1,
    name: 'Adventure Sports',
    icon: Mountain,
    description: 'Get your adrenaline pumping with our thrilling adventure sports experiences. From bungee jumping and skydiving to rock climbing and white-water rafting, we offer heart-pounding activities for thrill-seekers who want to push their limits and create unforgettable memories.',
    image: 'https://images.pexels.com/photos/618833/pexels-photo-618833.jpeg?auto=compress&cs=tinysrgb&w=800',
    highlights: ['Bungee Jumping', 'Rock Climbing', 'White-water Rafting', 'Skydiving'],
    color: 'from-orange-500 to-red-600',
    bgColor: 'from-orange-50 to-red-50'
  },
  {
    id: 2,
    name: 'Water Activities',
    icon: Waves,
    description: 'Dive into crystal-clear waters and explore the underwater world with our comprehensive water activities. Whether you prefer snorkeling in coral reefs, surfing perfect waves, or enjoying peaceful kayaking adventures, our water experiences cater to all skill levels.',
    image: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=800',
    highlights: ['Scuba Diving', 'Snorkeling', 'Surfing', 'Kayaking'],
    color: 'from-blue-500 to-cyan-600',
    bgColor: 'from-blue-50 to-cyan-50'
  },
  {
    id: 3,
    name: 'Photography Tours',
    icon: Camera,
    description: 'Capture the world through your lens with our expert-guided photography tours. Learn professional techniques while exploring breathtaking landscapes, vibrant cultures, and hidden gems. Perfect for both amateur and professional photographers looking to enhance their skills.',
    image: 'https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=800',
    highlights: ['Landscape Photography', 'Wildlife Photography', 'Cultural Portraits', 'Night Photography'],
    color: 'from-purple-500 to-pink-600',
    bgColor: 'from-purple-50 to-pink-50'
  },
  {
    id: 4,
    name: 'Culinary Experiences',
    icon: Utensils,
    description: 'Embark on a gastronomic journey that tantalizes your taste buds and introduces you to authentic local flavors. From cooking classes with renowned chefs to food market tours and wine tastings, discover the heart of each destination through its cuisine.',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
    highlights: ['Cooking Classes', 'Food Market Tours', 'Wine Tastings', 'Street Food Adventures'],
    color: 'from-green-500 to-emerald-600',
    bgColor: 'from-green-50 to-emerald-50'
  },
  {
    id: 5,
    name: 'Cultural Immersion',
    icon: Compass,
    description: 'Immerse yourself in local traditions and customs with our authentic cultural experiences. Meet local artisans, participate in traditional ceremonies, visit historical sites with expert guides, and gain deep insights into the rich heritage of each destination.',
    image: 'https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&w=800',
    highlights: ['Traditional Ceremonies', 'Artisan Workshops', 'Historical Tours', 'Local Festivals'],
    color: 'from-amber-500 to-orange-600',
    bgColor: 'from-amber-50 to-orange-50'
  },
  {
    id: 6,
    name: 'Luxury Experiences',
    icon: Plane,
    description: 'Indulge in the finest luxury experiences with our premium offerings. From private yacht charters and helicopter tours to exclusive spa retreats and VIP access to world-class events, enjoy unparalleled comfort and sophistication.',
    image: 'https://images.pexels.com/photos/1591061/pexels-photo-1591061.jpeg?auto=compress&cs=tinysrgb&w=800',
    highlights: ['Private Yacht Charters', 'Helicopter Tours', 'Luxury Spa Retreats', 'VIP Experiences'],
    color: 'from-indigo-500 to-purple-600',
    bgColor: 'from-indigo-50 to-purple-50'
  },
  {
    id: 6,
    name: 'Luxury Experiences',
    icon: Sun,
    description: 'Indulge in the finest luxury experiences with our premium offerings. From private yacht charters and helicopter tours to exclusive spa retreats and VIP access to world-class events, enjoy unparalleled comfort and sophistication.',
    image: 'https://images.pexels.com/photos/1591061/pexels-photo-1591061.jpeg?auto=compress&cs=tinysrgb&w=800',
    highlights: ['Private Yacht Charters', 'Helicopter Tours', 'Luxury Spa Retreats', 'VIP Experiences'],
    color: 'from-yellow-500 to-red-600',
    bgColor: 'from-yellow-50 to-red-50'
  },
];

const Activities = () => {
  const [selectedActivity, setSelectedActivity] = useState(activities[0]);
  const [hoveredActivity, setHoveredActivity] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants: Variants = {
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

  const activityVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  const contentVariants: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className={`py-20 bg-gradient-to-br ${selectedActivity.bgColor} relative overflow-hidden transition-all duration-1000`} ref={ref}>
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.6, 0.3],
          x: [0, 50, 0],
          y: [0, -30, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
          x: [0, -30, 0],
          y: [0, 20, 0]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-8"
        >
          <motion.h3 
            variants={headerVariants}
            className="text-sky-500 font-semibold text-lg mb-2"
          >
            What We Offer
          </motion.h3>
          <motion.h2 
            variants={headerVariants}
            className="text-4xl lg:text-6xl font-bold text-gray-900 mb-4"
          >
            Amazing{' '}
            <motion.span
              className={`text-transparent bg-clip-text bg-gradient-to-r ${selectedActivity.color}`}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              Activities
            </motion.span>
          </motion.h2>
          <motion.p 
            variants={headerVariants}
            className="text-gray-600 text-lg max-w-2xl mx-auto"
          >
            Choose from our wide range of exciting activities and experiences designed to make your journey unforgettable.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Activity Options */}
          <motion.div 
            className="space-y-4"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {activities.map((activity, index) => {
              const IconComponent = activity.icon;
              const isSelected = selectedActivity.id === activity.id;
              const isHovered = hoveredActivity === activity.id;
              
              return (
                <motion.button
                  key={activity.id}
                  custom={index}
                  variants={activityVariants}
                  onClick={() => setSelectedActivity(activity)}
                  onHoverStart={() => setHoveredActivity(activity.id)}
                  onHoverEnd={() => setHoveredActivity(null)}
                  className={`w-full text-left p-6 rounded-2xl transition-all duration-500 transform relative overflow-hidden ${
                    isSelected
                      ? `bg-gradient-to-r ${activity.color} text-white shadow-2xl scale-105`
                      : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white shadow-lg hover:shadow-xl'
                  }`}
                  whileHover={{ scale: isSelected ? 1.05 : 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Background Pattern */}
                  <motion.div
                    className="absolute inset-0 opacity-10"
                    initial={{ scale: 0, rotate: 0 }}
                    animate={{ 
                      scale: isSelected ? 1 : 0,
                      rotate: isSelected ? 360 : 0
                    }}
                    transition={{ duration: 0.8 }}
                  >
                    <div className="w-full h-auto bg-white/20 rounded-full blur-3xl" />
                  </motion.div>

                  <div className="flex items-center space-x-4 relative z-10">
                    <motion.div
                      className={`p-4 rounded-xl transition-all duration-300 ${
                        isSelected ? 'bg-white/20' : `bg-gradient-to-br ${activity.color.replace('to-', 'to-opacity-20 to-')} from-opacity-10`
                      }`}
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      animate={{ 
                        rotate: isHovered ? [0, 5, -5, 0] : 0,
                        scale: isSelected ? 1.1 : 1
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <IconComponent className={`w-8 h-8 ${
                        isSelected ? 'text-white' : 'text-gray-700'
                      }`} />
                    </motion.div>
                    <div className="flex-1">
                      <motion.h3 
                        className={`text-xl font-bold mb-1 ${
                          isSelected ? 'text-white' : 'text-gray-900'
                        }`}
                        animate={{ x: isHovered ? 5 : 0 }}
                      >
                        {activity.name}
                      </motion.h3>
                      <motion.p 
                        className={`text-sm text-gray-950 font-semibold ${
                          isSelected ? 'text-white/80' : 'text-gray-600'
                        }`}
                        initial={{ opacity: 0.7 }}
                        animate={{ opacity: isHovered ? 1 : 0.7 }}
                      >
                        Click to explore this activity
                      </motion.p>
                    </div>
                    <motion.div
                      animate={{ x: isSelected ? 0 : -10, opacity: isSelected ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ArrowRight className="w-5 h-5 text-white" />
                    </motion.div>
                  </div>

                  {/* Selection Indicator */}
                  <motion.div
                    className="absolute left-0 top-0 bottom-0 w-1 bg-white rounded-r-full"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: isSelected ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              );
            })}
          </motion.div>

          {/* Right Side - Description and Image */}
          <motion.div 
            className="space-y-2"
            variants={contentVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedActivity.id}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -50, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/20"
              >
                <div className="flex items-center space-x-4 mb-2">
                  <motion.div
                    className={`p-3 rounded-xl bg-gradient-to-br ${selectedActivity.color}`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    {React.createElement(selectedActivity.icon, {
                      className: "w-8 h-8 text-white"
                    })}
                  </motion.div>
                  <motion.h3 
                    className="text-3xl font-bold text-gray-900"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    {selectedActivity.name}
                  </motion.h3>
                </div>
                
                <motion.p 
                  className="text-gray-600 leading-relaxed mb-8 text-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {selectedActivity.description}
                </motion.p>

                {/* Highlights */}
                <motion.div 
                  className="space-y-2 mb-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <h4 className="font-semibold text-gray-900 text-xl">What's Included:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {selectedActivity.highlights.map((highlight, index) => (
                      <motion.div 
                        key={index}
                        className="flex items-center space-x-3 bg-gray-50 rounded-xl"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        whileHover={{ scale: 1.02, backgroundColor: "#f0f9ff" }}
                      >
                        <motion.div 
                          className={`w-3 h-3 rounded-full bg-gradient-to-r ${selectedActivity.color}`}
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                        />
                        <span className="text-gray-700 font-medium">{highlight}</span>
                        <Star className="w-4 h-4 text-yellow-400 ml-auto" />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                <motion.button 
                  className={`bg-gradient-to-r ${selectedActivity.color} text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto`}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  Book This Activity
                </motion.button>
              </motion.div>
            </AnimatePresence>

            {/* Activity Image */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedActivity.id}
                initial={{ opacity: 0, scale: 0.8, rotateY: 15 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 0.8, rotateY: -15 }}
                transition={{ duration: 0.6 }}
                className="relative overflow-hidden rounded-3xl shadow-2xl group"
                whileHover={{ scale: 1.02 }}
              >
                <motion.img
                  src={selectedActivity.image}
                  alt={selectedActivity.name}
                  className="w-full h-80 object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                />
                <motion.div 
                  className="absolute bottom-6 left-6 text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <h4 className="text-2xl font-bold mb-2">{selectedActivity.name}</h4>
                  <p className="text-white/90 text-lg">Experience the adventure of a lifetime</p>
                </motion.div>

                {/* Floating Elements */}
                <motion.div
                  className={`absolute top-6 right-6 w-16 h-16 bg-gradient-to-br ${selectedActivity.color} rounded-full flex items-center justify-center`}
                  animate={{ 
                    rotate: 360,
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                    scale: { duration: 2, repeat: Infinity }
                  }}
                >
                  {React.createElement(selectedActivity.icon, {
                    className: "w-8 h-8 text-white"
                  })}
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Activities;