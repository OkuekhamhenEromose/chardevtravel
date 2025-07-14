import { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, ArrowDown } from 'lucide-react';

const heroImages = [
  {
    url: 'https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080',
    title: 'Discover Amazing Places',
    subtitle: 'Let us take you on a journey of a lifetime',
    cta: 'Start Your Adventure'
  },
  {
    url: 'https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080',
    title: 'Explore Hidden Gems',
    subtitle: 'Find your next adventure with our expert guides',
    cta: 'Explore Now'
  },
  {
    url: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080',
    title: 'Create Lasting Memories',
    subtitle: 'Experience the world like never before',
    cta: 'Book Your Journey'
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  const slideVariants: Variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 1.1
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9
    })
  };

  const contentVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 100,
      scale: 0.8
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const buttonVariants: Variants = {
    hover: { 
      scale: 1.05,
      boxShadow: "0 20px 40px rgba(14, 165, 233, 0.4)",
      transition: { duration: 0.3 }
    },
    tap: { scale: 0.95 }
  };

  const floatingVariants: Variants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const parallaxVariants: Variants = {
    animate: {
      y: [0, -50, 0],
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  return (
    <section className="relative h-screen overflow-hidden" id="home">
      {/* Background Images with Parallax */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait" custom={currentSlide}>
          <motion.div
            key={currentSlide}
            custom={currentSlide}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.5 },
              scale: { duration: 0.8 }
            }}
            className="absolute inset-0"
          >
            <motion.img
              src={heroImages[currentSlide].url}
              alt={heroImages[currentSlide].title}
              className="w-full h-full object-cover"
              variants={parallaxVariants}
              animate="animate"
            />
            <motion.div 
              className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Floating Elements */}
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute top-20 left-10 w-4 h-4 bg-white/20 rounded-full blur-sm"
      />
      <motion.div
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: '1s' }}
        className="absolute top-40 right-20 w-6 h-6 bg-sky-400/30 rounded-full blur-sm"
      />
      <motion.div
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: '2s' }}
        className="absolute bottom-40 left-20 w-3 h-3 bg-white/25 rounded-full blur-sm"
      />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <motion.div 
          className="text-center text-white max-w-5xl mx-auto px-4"
          variants={contentVariants}
          initial="hidden"
          animate="visible"
          key={currentSlide}
        >
          <motion.div
            variants={itemVariants}
            className="mb-6"
          >
            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, rotateX: 90 }}
              animate={{ opacity: 1, rotateX: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <motion.span
                className="inline-block"
                whileHover={{ 
                  scale: 1.1,
                  textShadow: "0 0 20px rgba(255,255,255,0.8)"
                }}
                transition={{ duration: 0.3 }}
              >
                {heroImages[currentSlide].title}
              </motion.span>
            </motion.h1>
          </motion.div>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-3xl mb-12 opacity-90 font-light"
          >
            {heroImages[currentSlide].subtitle}
          </motion.p>
          
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.button 
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white px-10 py-4 rounded-full text-lg font-semibold shadow-2xl backdrop-blur-sm border border-white/20"
            >
              {heroImages[currentSlide].cta}
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-3 text-white/90 hover:text-white transition-colors duration-300 group"
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            >
              <motion.div
                className="bg-white/20 backdrop-blur-sm p-4 rounded-full border border-white/30"
                whileHover={{ 
                  backgroundColor: "rgba(255,255,255,0.3)",
                  scale: 1.1
                }}
              >
                <Play className="w-6 h-6" fill="currentColor" />
              </motion.div>
              <span className="font-medium">
                {isAutoPlaying ? 'Pause' : 'Play'} Experience
              </span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Navigation Arrows */}
      <motion.button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 hover:bg-white/20 text-white p-4 rounded-full backdrop-blur-sm transition-all duration-300 border border-white/20 cursor-pointer"
        whileHover={{ scale: 1.1, x: -5 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5 }}
      >
        <ChevronLeft className="w-6 h-6" />
      </motion.button>
      
      <motion.button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-4 rounded-full transition-all duration-300 border border-white/20"
        whileHover={{ scale: 1.1, x: 5 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5 }}
      >
        <ChevronRight className="w-6 h-6" />
      </motion.button>

      {/* Slide Indicators */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
      >
        {heroImages.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`relative overflow-hidden rounded-full transition-all duration-500 ${
              index === currentSlide ? 'w-12 h-3' : 'w-3 h-3'
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              className={`w-full h-full rounded-full ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
              layoutId="indicator"
            />
            {index === currentSlide && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 6, ease: "linear" }}
                key={currentSlide}
              />
            )}
          </motion.button>
        ))}
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 right-8 z-20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5 }}
      >
        <motion.div
          className="flex flex-col items-center text-white/80"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-sm mb-2 font-medium">Scroll</span>
          <ArrowDown className="w-5 h-5" />
        </motion.div>
      </motion.div>

      {/* Progress Bar */}
      <motion.div
        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-sky-400 to-blue-500 z-20"
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ 
          duration: 6, 
          ease: "linear",
          repeat: Infinity
        }}
        key={currentSlide}
      />
    </section>
  );
};

export default Hero;