import React, { useState, useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';
import { Calendar, MapPin, Phone, Mail, User, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    date: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        location: '',
        date: ''
      });
    }, 3000);
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

  const formVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const contactInfoVariants: Variants = {
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

  const inputVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  const contactItems = [
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (555) 123-4567",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Mail,
      title: "Email",
      value: "hello@wanderlust.com",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: MapPin,
      title: "Office",
      value: "123 Travel Street, Adventure City, AC 12345",
      color: "from-purple-500 to-pink-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-sky-50 to-blue-50 relative overflow-hidden" id="contact" ref={ref}>
      {/* Background Elements */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-sky-200/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
          x: [0, 30, 0],
          y: [0, -20, 0]
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
          x: [0, -20, 0],
          y: [0, 15, 0]
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
            Get In Touch
          </motion.h3>
          <motion.h2 
            variants={headerVariants}
            className="text-4xl lg:text-6xl font-bold text-gray-900 mb-4"
          >
            Contact{' '}
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              Us
            </motion.span>
          </motion.h2>
          <motion.p 
            variants={headerVariants}
            className="text-gray-600 text-lg max-w-2xl mx-auto"
          >
            Ready to start your adventure? Get in touch with our travel experts and let us plan your perfect getaway.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            variants={formVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative"
          >
            <motion.div 
              className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/20"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 25px 50px rgba(0,0,0,0.1)"
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.h3 
                className="text-3xl font-bold text-gray-900 mb-8 text-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Book Your Trip
              </motion.h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <motion.div
                  custom={0}
                  variants={inputVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <motion.div
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                      whileHover={{ scale: 1.1, color: "#0ea5e9" }}
                    >
                      <User className="w-5 h-5" />
                    </motion.div>
                    <motion.input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                      placeholder="Enter your full name"
                      required
                      whileFocus={{ scale: 1.02 }}
                    />
                  </div>
                </motion.div>

                {/* Email Input */}
                <motion.div
                  custom={1}
                  variants={inputVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <motion.div
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                      whileHover={{ scale: 1.1, color: "#0ea5e9" }}
                    >
                      <Mail className="w-5 h-5" />
                    </motion.div>
                    <motion.input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                      placeholder="Enter your email address"
                      required
                      whileFocus={{ scale: 1.02 }}
                    />
                  </div>
                </motion.div>

                {/* Phone Input */}
                <motion.div
                  custom={2}
                  variants={inputVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <motion.div
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                      whileHover={{ scale: 1.1, color: "#0ea5e9" }}
                    >
                      <Phone className="w-5 h-5" />
                    </motion.div>
                    <motion.input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                      placeholder="Enter your phone number"
                      required
                      whileFocus={{ scale: 1.02 }}
                    />
                  </div>
                </motion.div>

                {/* Location Input */}
                <motion.div
                  custom={3}
                  variants={inputVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Destination
                  </label>
                  <div className="relative">
                    <motion.div
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                      whileHover={{ scale: 1.1, color: "#0ea5e9" }}
                    >
                      <MapPin className="w-5 h-5" />
                    </motion.div>
                    <motion.input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                      placeholder="Where would you like to go?"
                      required
                      whileFocus={{ scale: 1.02 }}
                    />
                  </div>
                </motion.div>

                {/* Date Input */}
                <motion.div
                  custom={4}
                  variants={inputVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Travel Date
                  </label>
                  <div className="relative">
                    <motion.div
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                      whileHover={{ scale: 1.1, color: "#0ea5e9" }}
                    >
                      <Calendar className="w-5 h-5" />
                    </motion.div>
                    <motion.input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                      required
                      whileFocus={{ scale: 1.02 }}
                    />
                  </div>
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className="w-full bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  whileHover={{ 
                    scale: isSubmitting || isSubmitted ? 1 : 1.02,
                    boxShadow: "0 20px 40px rgba(14, 165, 233, 0.4)"
                  }}
                  whileTap={{ scale: isSubmitting || isSubmitted ? 1 : 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                      <span>Booking...</span>
                    </>
                  ) : isSubmitted ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      <span>Booked Successfully!</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Book A Trip</span>
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </motion.div>

          {/* Contact Information */}
          <motion.div 
            className="space-y-8"
            variants={contactInfoVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {/* Contact Image */}
            <motion.div 
              className="relative overflow-hidden rounded-3xl shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img
                src="https://images.pexels.com/photos/1591061/pexels-photo-1591061.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Contact us"
                className="w-full h-64 object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6 }}
              />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
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
                <h4 className="text-2xl font-bold mb-2">Let's Plan Your Adventure</h4>
                <p className="text-white/90 text-lg">Our experts are ready to help you create unforgettable memories.</p>
              </motion.div>
            </motion.div>

            {/* Contact Details */}
            <motion.div 
              className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/20"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 25px 50px rgba(0,0,0,0.1)"
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.h4 
                className="text-2xl font-bold text-gray-900 mb-8 text-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Get In Touch
              </motion.h4>
              
              <div className="space-y-6">
                {contactItems.map((item, index) => {
                  const IconComponent = item.icon;
                  
                  return (
                    <motion.div
                      key={index}
                      className="flex items-center group cursor-pointer"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      whileHover={{ x: 5 }}
                    >
                      <motion.div
                        className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mr-4 shadow-lg`}
                        whileHover={{ 
                          scale: 1.1,
                          rotate: 5,
                          boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <IconComponent className="w-8 h-8 text-white" />
                      </motion.div>
                      <div>
                        <p className="font-semibold text-gray-900 text-lg group-hover:text-sky-600 transition-colors duration-300">
                          {item.title}
                        </p>
                        <p className="text-gray-600">{item.value}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;