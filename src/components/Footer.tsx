import { motion, Variants, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mountain, Facebook, Instagram, Twitter, Linkedin, MapPin, Phone, Mail, Heart, ArrowUp } from 'lucide-react';
import { HiArrowRight } from 'react-icons/hi';

const Footer = () => {
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: false, margin: "-100px" });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const containerVariants: Variants = {
    hidden: { 
      opacity: 0,
      y: 60
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const imageVariants: Variants = {
    hidden: { 
      opacity: 0, 
      x: 60, 
      rotateY: 15,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      scale: 1,
      transition: {
        duration: 0.9,
        ease: "easeOut",
        delay: 0.3
      }
    }
  };

  const socialVariants: Variants = {
    hover: {
      scale: 1.2,
      y: -8,
      rotate: 5,
      transition: { 
        duration: 0.3,
        type: "spring",
        stiffness: 300
      }
    }
  };

  const linkVariants: Variants = {
    hover: {
      x: 8,
      color: "#0ea5e9",
      transition: { duration: 0.3 }
    }
  };

  const newsletterVariants: Variants = {
    hidden: {
      opacity: 0,
      y: -30,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
        staggerChildren: 0.2
      }
    }
  };

  const fadeInUp = (delay = 0): Variants => ({
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay,
        ease: "easeOut"
      }
    }
  });

  const fadeInLeft = (delay = 0): Variants => ({
    hidden: {
      opacity: 0,
      x: -40
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        delay,
        ease: "easeOut"
      }
    }
  });

  const fadeInRight = (delay = 0): Variants => ({
    hidden: {
      opacity: 0,
      x: 40
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        delay,
        ease: "easeOut"
      }
    }
  });

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Our Team', href: '#team' },
    { name: 'Careers', href: '#careers' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    { name: 'Travel Planning', href: '#planning' },
    { name: 'Guided Tours', href: '#tours' },
    { name: 'Accommodations', href: '#hotels' },
    { name: 'Travel Insurance', href: '#insurance' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', color: 'hover:bg-blue-600' },
    { icon: Instagram, href: '#', color: 'hover:bg-pink-600' },
    { icon: Twitter, href: '#', color: 'hover:bg-sky-500' },
    { icon: Linkedin, href: '#', color: 'hover:bg-blue-700' }
  ];

  return (
    <motion.footer 
      ref={footerRef}
      className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {/* Background Elements */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl"
        variants={fadeInLeft(0.1)}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"
        variants={fadeInRight(0.2)}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.1, 0.2]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Newsletter Section */}
      <motion.div 
        variants={newsletterVariants}
        className="bg-blue-600 relative z-10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <motion.div 
            variants={containerVariants}
            className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12"
          >
            {/* Left Content */}
            <motion.div 
              variants={fadeInRight(0.2)}
              className="text-white max-w-lg text-center md:text-left"
            >
              <motion.h2 
                variants={fadeInUp(0.1)}
                className="text-2xl sm:text-3xl md:text-4xl font-medium mb-4"
              >
                Get Travel Updates
              </motion.h2>
              <motion.p 
                variants={fadeInUp(0.2)}
                className="text-blue-100 text-sm sm:text-base"
              >
                Subscribe to our newsletter for exclusive deals, travel tips, and inspiration for your next adventure.
              </motion.p>
            </motion.div>

            {/* Email Form */}
            <motion.div 
              variants={fadeInLeft(0.3)}
              className="w-full md:w-auto"
            >
              <motion.div 
                variants={containerVariants}
                className="flex flex-col sm:flex-row gap-4 sm:gap-0"
              >
                <motion.input
                  variants={fadeInRight(0.1)}
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full sm:w-auto md:w-80 px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-l-xl sm:rounded-r-none focus:outline-none focus:ring-2 focus:ring-sky-500 bg-white text-gray-900"
                />
                <motion.button 
                  variants={fadeInLeft(0.2)}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto cursor-pointer bg-sky-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-l-none sm:rounded-r-xl hover:bg-sky-600 transition-colors flex items-center justify-center sm:justify-start gap-2"
                >
                  <span>Subscribe</span>
                  <HiArrowRight className="w-5 h-5" />
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <motion.div
          variants={containerVariants}
          className="grid lg:grid-cols-2 gap-12"
        >
          {/* Left Side - Company Info */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Logo and Description */}
            <motion.div variants={fadeInUp(0.1)}>
              <motion.div 
                className="flex items-center space-x-3 mb-6"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  whileHover={{ 
                    rotate: 360,
                    scale: 1.1
                  }}
                  transition={{ duration: 0.8 }}
                >
                  <Mountain className="w-10 h-10 text-sky-400" />
                </motion.div>
                <motion.span 
                  className="text-3xl font-bold"
                  variants={fadeInLeft(0.2)}
                >
                  ChTravel
                </motion.span>
              </motion.div>
              <motion.p 
                className="text-gray-300 leading-relaxed max-w-md text-lg"
                variants={fadeInUp(0.3)}
              >
                Creating extraordinary travel experiences for over 15 years. We believe every journey should be a story worth telling, filled with authentic moments and breathtaking discoveries.
              </motion.p>
            </motion.div>

            {/* Contact Info */}
            <motion.div 
              className="space-y-4"
              variants={fadeInUp(0.4)}
            >
              <motion.h4 
                className="text-xl font-semibold mb-6 text-sky-400"
                variants={fadeInUp(0.1)}
              >
                Contact Information
              </motion.h4>
              
              {[
                { icon: MapPin, text: "123 Travel Street, Adventure City, AC 12345" },
                { icon: Phone, text: "+1 (555) 123-4567" },
                { icon: Mail, text: "hello@wanderlust.com" }
              ].map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={index}
                    variants={fadeInLeft(index * 0.1)}
                    className="flex items-center space-x-4 group cursor-pointer"
                    whileHover={{ 
                      x: 10,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <motion.div
                      className="w-12 h-12 bg-sky-500/20 rounded-lg flex items-center justify-center group-hover:bg-sky-500/30 transition-colors duration-300"
                      whileHover={{ 
                        scale: 1.15, 
                        rotate: 10,
                        boxShadow: "0 10px 25px rgba(14, 165, 233, 0.3)"
                      }}
                    >
                      <IconComponent className="w-6 h-6 text-sky-400 flex-shrink-0" />
                    </motion.div>
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                      {item.text}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Social Media */}
            <motion.div variants={fadeInUp(0.5)}>
              <motion.h4 
                className="text-xl font-semibold mb-6 text-sky-400"
                variants={fadeInUp(0.1)}
              >
                Follow Us
              </motion.h4>
              <motion.div 
                className="flex space-x-4"
                variants={containerVariants}
              >
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      className={`bg-gray-800 p-4 rounded-xl transition-all duration-300 ${social.color} border border-gray-700 hover:border-transparent`}
                      variants={fadeInUp(index * 0.1)}
                      whileHover={{
                        ...socialVariants.hover,
                        boxShadow: "0 15px 35px rgba(0,0,0,0.4)"
                      }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <IconComponent className="w-6 h-6" />
                    </motion.a>
                  );
                })}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Side - Image and Quick Links */}
          <motion.div 
            variants={imageVariants}
            className="flex flex-col"
          >
            {/* Image */}
            <motion.div 
              className="relative h-full min-h-[400px] lg:min-h-[500px]"
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.4 }
              }}
            >
              <motion.img
                src="https://images.pexels.com/photos/2265876/pexels-photo-2265876.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Travel inspiration"
                className="w-full h-full object-cover rounded-3xl shadow-2xl"
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.6 }
                }}
              />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-3xl"
                variants={fadeInUp(0.3)}
              />
              <motion.div 
                className="absolute bottom-6 left-6 text-white"
                variants={fadeInUp(0.5)}
              >
                <h4 className="text-2xl font-bold mb-2">Start Your Journey Today</h4>
                <p className="text-white/90 text-lg">The world is waiting for you.</p>
              </motion.div>
            </motion.div>

            {/* Quick Links below the image on mobile */}
            <motion.div 
              className="lg:hidden mt-8 grid grid-cols-2 gap-8"
              variants={containerVariants}
            >
              <motion.div variants={fadeInLeft(0.1)}>
                <h4 className="text-lg font-semibold mb-4 text-sky-400">Company</h4>
                <ul className="space-y-3">
                  {quickLinks.map((link, index) => (
                    <motion.li 
                      key={index}
                      variants={fadeInUp(index * 0.1)}
                    >
                      <motion.a
                        href={link.href}
                        className="text-gray-300 transition-colors duration-300 block"
                        variants={linkVariants}
                        whileHover="hover"
                      >
                        {link.name}
                      </motion.a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
              <motion.div variants={fadeInRight(0.2)}>
                <h4 className="text-lg font-semibold mb-4 text-sky-400">Services</h4>
                <ul className="space-y-3">
                  {services.map((service, index) => (
                    <motion.li 
                      key={index}
                      variants={fadeInUp(index * 0.1)}
                    >
                      <motion.a
                        href={service.href}
                        className="text-gray-300 transition-colors duration-300 block"
                        variants={linkVariants}
                        whileHover="hover"
                      >
                        {service.name}
                      </motion.a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-gray-800 mt-12 pt-8"
          variants={fadeInUp(0.6)}
        >
          <motion.div 
            className="flex flex-col md:flex-row justify-between items-center"
            variants={containerVariants}
          >
            <motion.p 
              className="text-gray-400 text-sm flex items-center"
              variants={fadeInLeft(0.1)}
              whileHover={{ 
                color: "#0ea5e9",
                transition: { duration: 0.3 }
              }}
            >
              © 2025 ChTravels Agency. Made with{' '}
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="mx-1"
              >
                <Heart className="w-4 h-4 text-red-500 fill-current" />
              </motion.span>
              {' '}from CharDev.
            </motion.p>
            <motion.div 
              className="flex space-x-6 mt-4 md:mt-0"
              variants={containerVariants}
            >
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((link, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="text-gray-400 hover:text-sky-400 text-sm transition-colors duration-300"
                  variants={fadeInRight(index * 0.1)}
                  whileHover={{ 
                    y: -3,
                    color: "#0ea5e9"
                  }}
                >
                  {link}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        className="fixed bottom-8 right-8 bg-gradient-to-r from-sky-500 to-blue-600 text-white p-4 rounded-full shadow-lg z-50"
        onClick={scrollToTop}
        variants={fadeInUp(0.8)}
        whileHover={{ 
          scale: 1.15,
          rotate: 5,
          boxShadow: "0 20px 40px rgba(14, 165, 233, 0.4)"
        }}
        whileTap={{ scale: 0.85 }}
      >
        <ArrowUp className="w-6 h-6" />
      </motion.button>
    </motion.footer>
  );
};

export default Footer;