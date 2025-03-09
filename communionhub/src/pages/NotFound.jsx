import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaHome, FaSearch, FaExclamationTriangle } from 'react-icons/fa';

const NotFound = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen flex items-center justify-center 
                 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 
                 px-4 relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white/5 rounded-full"
            style={{
              width: Math.random() * 300 + 50,
              height: Math.random() * 300 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              scale: [1, 1.1, 1],
              rotate: [0, 360],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-lg w-full">
        <motion.div
          className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20
                     shadow-xl text-center"
        >
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-8xl md:text-9xl font-bold text-transparent bg-clip-text
                         bg-gradient-to-r from-pink-300 to-indigo-300 mb-6"
            >
              404
            </motion.div>
            <FaExclamationTriangle className="absolute top-1/2 -translate-y-1/2 right-4 
                                            text-pink-300 text-4xl animate-pulse" />
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-3xl font-bold text-white mb-4"
          >
            Page Not Found
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-white/80 mb-8 text-lg"
          >
            Oops! The page you're looking for seems to have vanished into the digital ether.
          </motion.p>


          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 py-3 bg-white text-indigo-600 rounded-full
                         font-semibold flex items-center justify-center gap-2
                         hover:shadow-lg transition-all duration-300"
              >
                <FaHome />
                Return Home
              </motion.button>
            </Link>

            <Link to="/events">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 py-3 bg-white/10 text-white rounded-full
                         font-semibold flex items-center justify-center gap-2
                         hover:bg-white/20 transition-all duration-300
                         border border-white/20"
              >
                <FaSearch />
                Browse Events
              </motion.button>
            </Link>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-8 pt-8 border-t border-white/10"
          >
            <p className="text-white/60">
              Need help? <Link to="/contact" className="text-pink-300 hover:text-pink-400 
                                                      transition-colors duration-300">
                Contact Support
              </Link>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default NotFound;