import { motion, useInView, Variants } from 'framer-motion';
import { useRef } from 'react';
import { CheckCircle, Users, Award, Clock } from 'lucide-react';
import travelImage from '../assets/images/travel4.jpg';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  // Header animations - from top (matches Contact.tsx)
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

  // Content animations - from bottom (matches Contact.tsx)
  const contentVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 80,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.9,
        ease: "easeOut",
        delay: 0.4
      }
    }
  };

  const imageVariants: Variants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8, 
      rotateY: -15 
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.3
      }
    }
  };

  const badgeVariants: Variants = {
    hidden: { 
      scale: 0, 
      rotate: -180 
    },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay: 1
      }
    }
  };

  const featureVariants: Variants = {
    hidden: { 
      opacity: 0, 
      x: -30 
    },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.5 + i * 0.2,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  const features = [
    {
      icon: Users,
      title: "Expert Local Guides",
      description: "Our passionate local experts share hidden gems and authentic experiences."
    },
    {
      icon: Award,
      title: "Sustainable Tourism",
      description: "We're committed to responsible travel that benefits local communities."
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Our dedicated team is always here to ensure your journey is seamless."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden" id="about" ref={ref}>
      {/* Background Elements */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-sky-200/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 20, 0]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-40 h-40 bg-blue-200/30 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
          x: [0, -20, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Same animation pattern as Contact.tsx */}
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
            About Wanderlust
          </motion.h3>
          <motion.h2 
            variants={headerVariants}
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
          >
            Your Journey, Our{' '}
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              Passion
            </motion.span>
          </motion.h2>
          <motion.p 
            variants={headerVariants}
            className="text-gray-600 text-lg max-w-2xl mx-auto"
          >
            For over 15 years, Wanderlust has been crafting extraordinary travel experiences.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Section - Animate when in view */}
          <motion.div 
            variants={contentVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative"
          >
            <motion.div
              variants={imageVariants}
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={travelImage}
                alt="Happy man standing on cliff"
                className="w-full h-96 lg:h-[500px] object-cover rounded-3xl shadow-2xl"
              />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.5 }}
              />
            </motion.div>
            
            <motion.div
              variants={badgeVariants}
              className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-sky-400 to-sky-600 rounded-full flex items-center justify-center shadow-2xl"
              whileHover={{ 
                scale: 1.1,
                rotate: 5,
                boxShadow: "0 25px 50px rgba(14, 165, 233, 0.4)"
              }}
            >
              <div className="text-center text-white">
                <motion.span 
                  className="text-3xl font-bold block"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: 1.5, type: "spring" }}
                >
                  15+
                </motion.span>
                <span className="text-sm font-medium">Years</span>
              </div>
            </motion.div>

            {/* Floating Stats */}
            <motion.div
              className="absolute top-8 left-8 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg"
              initial={{ opacity: 0, scale: 0.8, y: -20 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: -20 }}
              transition={{ delay: 1.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500" />
                <div>
                  <p className="font-bold text-gray-900">Verified</p>
                  <p className="text-sm text-gray-600">Travel Agency</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Section - Animate when in view */}
          <motion.div 
            variants={contentVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <motion.p 
              className="text-gray-800 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3 }}
            >
              For over 15 years, Wanderlust has been crafting extraordinary travel experiences 
              that go beyond the ordinary. We believe that every journey should be a story worth 
              telling, filled with authentic moments and breathtaking discoveries.
            </motion.p>

            {/* Features Section */}
            <div className="space-y-4">
              <motion.h4 
                className="text-2xl font-bold text-gray-900"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.4 }}
              >
                Why Choose Us
              </motion.h4>
              
              <div className="space-y-4">
                {features.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <motion.div
                      key={index}
                      custom={index}
                      variants={featureVariants}
                      initial="hidden"
                      animate={isInView ? "visible" : "hidden"}
                      className="flex items-start space-x-4 group"
                      whileHover={{ x: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div
                        className="w-12 h-12 bg-gradient-to-br from-sky-100 to-sky-200 rounded-xl flex items-center justify-center group-hover:from-sky-200 group-hover:to-sky-300 transition-all duration-300"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <IconComponent className="w-6 h-6 text-sky-600" />
                      </motion.div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-lg group-hover:text-sky-600 transition-colors duration-300">
                          {feature.title}
                        </h4>
                        <p className="text-gray-800 leading-relaxed">{feature.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <motion.button 
              className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.6 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(14, 165, 233, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More About Us
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;