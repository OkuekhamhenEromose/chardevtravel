import { motion, Variants } from 'framer-motion';
import { Mountain, Facebook, Instagram, Twitter, Linkedin, MapPin, Phone, Mail, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const socialVariants: Variants = {
    hover: {
      scale: 1.2,
      y: -5,
      transition: { duration: 0.3 }
    }
  };

  const linkVariants: Variants = {
    hover: {
      x: 5,
      color: "#0ea5e9",
      transition: { duration: 0.3 }
    }
  };

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
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl"
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-2 gap-12"
        >
          {/* Left Side - Company Info */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Logo and Description */}
            <div>
              <motion.div 
                className="flex items-center space-x-3 mb-6"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  <Mountain className="w-10 h-10 text-sky-400" />
                </motion.div>
                <span className="text-3xl font-bold">Wanderlust</span>
              </motion.div>
              <motion.p 
                className="text-gray-300 leading-relaxed max-w-md text-lg"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Creating extraordinary travel experiences for over 15 years. We believe every journey should be a story worth telling, filled with authentic moments and breathtaking discoveries.
              </motion.p>
            </div>

            {/* Contact Info */}
            <motion.div 
              className="space-y-4"
              variants={containerVariants}
            >
              <h4 className="text-xl font-semibold mb-6 text-sky-400">Contact Information</h4>
              
              {[
                { icon: MapPin, text: "123 Travel Street, Adventure City, AC 12345" },
                { icon: Phone, text: "+1 (555) 123-4567" },
                { icon: Mail, text: "hello@wanderlust.com" }
              ].map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-center space-x-4 group cursor-pointer"
                    whileHover={{ x: 5 }}
                  >
                    <motion.div
                      className="w-12 h-12 bg-sky-500/20 rounded-lg flex items-center justify-center group-hover:bg-sky-500/30 transition-colors duration-300"
                      whileHover={{ scale: 1.1, rotate: 5 }}
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
            <motion.div variants={itemVariants}>
              <h4 className="text-xl font-semibold mb-6 text-sky-400">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      className={`bg-gray-800 p-4 rounded-xl transition-all duration-300 ${social.color} border border-gray-700 hover:border-transparent`}
                      variants={socialVariants}
                      whileHover="hover"
                      whileTap={{ scale: 0.95 }}
                    >
                      <IconComponent className="w-6 h-6" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div 
              className="grid grid-cols-2 gap-8"
              variants={containerVariants}
            >
              <div>
                <motion.h4 
                  className="text-lg font-semibold mb-4 text-sky-400"
                  variants={itemVariants}
                >
                  Company
                </motion.h4>
                <ul className="space-y-3">
                  {quickLinks.map((link, index) => (
                    <motion.li key={index} variants={itemVariants}>
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
              </div>
              <div>
                <motion.h4 
                  className="text-lg font-semibold mb-4 text-sky-400"
                  variants={itemVariants}
                >
                  Services
                </motion.h4>
                <ul className="space-y-3">
                  {services.map((service, index) => (
                    <motion.li key={index} variants={itemVariants}>
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
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div 
            variants={itemVariants}
            className="flex justify-end"
          >
            <motion.div 
              className="relative max-w-md w-full"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img
                src="https://images.pexels.com/photos/2265876/pexels-photo-2265876.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Travel inspiration"
                className="w-full h-80 object-cover rounded-3xl shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
              />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-3xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              />
              <motion.div 
                className="absolute bottom-6 left-6 text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <h4 className="text-2xl font-bold mb-2">Start Your Journey Today</h4>
                <p className="text-white/90 text-lg">The world is waiting for you.</p>
              </motion.div>

              {/* Floating CTA */}
              <motion.button
                className="absolute top-6 right-6 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full border border-white/30"
                whileHover={{ 
                  scale: 1.1,
                  backgroundColor: "rgba(255,255,255,0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToTop}
              >
                <ArrowUp className="w-6 h-6" />
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-gray-800 mt-12 pt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.p 
              className="text-gray-400 text-sm flex items-center"
              whileHover={{ color: "#0ea5e9" }}
            >
              © 2024 Wanderlust Travel Agency. Made with{' '}
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="mx-1"
              >
                <Heart className="w-4 h-4 text-red-500 fill-current" />
              </motion.span>
              {' '}for travelers.
            </motion.p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((link, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="text-gray-400 hover:text-sky-400 text-sm transition-colors duration-300"
                  whileHover={{ y: -2 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        className="fixed bottom-8 right-8 bg-gradient-to-r from-sky-500 to-blue-600 text-white p-4 rounded-full shadow-lg z-50"
        onClick={scrollToTop}
        whileHover={{ 
          scale: 1.1,
          boxShadow: "0 20px 40px rgba(14, 165, 233, 0.4)"
        }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
      >
        <ArrowUp className="w-6 h-6" />
      </motion.button>
    </footer>
  );
};

export default Footer;