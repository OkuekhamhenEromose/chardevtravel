import { Calendar, ArrowRight } from 'lucide-react';
import { motion, useInView, Variants } from 'framer-motion';
import { useRef } from 'react';

const newsArticles = [
  {
    id: 1,
    title: 'Best Time to Visit Southeast Asia',
    image: 'https://images.pexels.com/photos/1134166/pexels-photo-1134166.jpeg?auto=compress&cs=tinysrgb&w=600',
    date: 'March 15, 2024',
    excerpt: 'Discover the perfect timing for your Southeast Asian adventure with our comprehensive seasonal guide.'
  },
  {
    id: 2,
    title: 'Sustainable Travel Tips for 2024',
    image: 'https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=600',
    date: 'March 12, 2024',
    excerpt: 'Learn how to travel responsibly while still having amazing experiences around the world.'
  },
  {
    id: 3,
    title: 'Hidden Gems of the Mediterranean',
    image: 'https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&w=600',
    date: 'March 10, 2024',
    excerpt: 'Explore lesser-known Mediterranean destinations that offer authentic cultural experiences.'
  },
  {
    id: 4,
    title: 'Adventure Travel Safety Guide',
    image: 'https://images.pexels.com/photos/618833/pexels-photo-618833.jpeg?auto=compress&cs=tinysrgb&w=600',
    date: 'March 8, 2024',
    excerpt: 'Essential safety tips for thrill-seekers planning their next adrenaline-pumping adventure.'
  },
  {
    id: 5,
    title: 'Digital Nomad Destinations 2024',
    image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=600',
    date: 'March 5, 2024',
    excerpt: 'Top destinations for remote workers seeking the perfect balance of work and wanderlust.'
  },
  {
    id: 6,
    title: 'Luxury Train Journeys Around the World',
    image: 'https://images.pexels.com/photos/1236701/pexels-photo-1236701.jpeg?auto=compress&cs=tinysrgb&w=600',
    date: 'March 3, 2024',
    excerpt: 'Experience the golden age of travel with these spectacular luxury train routes through the cities'
  }
];

const News = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  // Header animations - from top
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

  // Card animations - from right
  const cardVariants: Variants = {
    hidden: { 
      opacity: 0, 
      x: 100,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        delay: 0.3,
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: 1.2, // Appears after cards
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={headerContainerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-8"
        >
          <motion.h3 
            variants={headerVariants}
            className="text-sky-500 font-semibold text-lg mb-2"
          >
            Stay Informed
          </motion.h3>
          <motion.h2 
            variants={headerVariants}
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
          >
            News & Blog
          </motion.h2>
          <motion.p 
            variants={headerVariants}
            className="text-gray-600 text-lg max-w-2xl mx-auto"
          >
            Stay updated with the latest travel trends, tips, and destinations from our travel experts.
          </motion.p>
        </motion.div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsArticles.map((article, index) => (
            <motion.article
              key={article.id}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer"
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={index}
              whileHover={{ y: -10 }}
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="w-4 h-4 mr-1" />
                    {article.date}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-sky-500 transition-colors duration-300">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {article.excerpt}
                </p>
                <div className="flex items-center text-sky-500 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          className="text-center mt-12"
          variants={buttonVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.button 
            className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(14, 165, 233, 0.3)"
            }}
            whileTap={{ scale: 0.98 }}
          >
            View All Articles
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default News;