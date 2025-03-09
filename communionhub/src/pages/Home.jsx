import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaUsers, FaPray, FaHandsHelping } from 'react-icons/fa';

const Home = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  const features = [
    {
      icon: <FaUsers className="text-4xl mb-4 text-indigo-400" />,
      title: "Connect",
      description: "Join a diverse community of individuals sharing experiences"
    },
    {
      icon: <FaPray className="text-4xl mb-4 text-indigo-400" />,
      title: "Share Faith",
      description: "Participate in multi-faith events and spiritual gatherings"
    },
    {
      icon: <FaHandsHelping className="text-4xl mb-4 text-indigo-400" />,
      title: "Support",
      description: "Find and offer community support across all faiths"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 relative overflow-hidden"
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

      <div className="container mx-auto px-4 py-16 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto"
        >
          <motion.div 
            variants={itemVariants}
            className="text-center mb-16 mt-20"
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
              whileHover={{ scale: 1.02 }}
            >
              Welcome to{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-300 to-indigo-300">
                CommunionHub
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto"
              variants={itemVariants}
            >
              Connecting people of all faiths through events and community support.
              Build meaningful relationships and share spiritual journeys together.
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center gap-4"
              variants={itemVariants}
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255,255,255,0.3)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/events')}
                className="px-8 py-4 bg-white text-indigo-600 rounded-full font-semibold 
                         hover:bg-opacity-95 transition-all duration-300 shadow-lg"
              >
                Explore Events
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/about')}
                className="px-8 py-4 bg-transparent border-2 border-white text-white 
                         rounded-full font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Learn More
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div 
              variants={containerVariants}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-16"
          >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -10, scale: 1.03 }}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center 
                            border border-white/20 hover:border-white/40 transition-all duration-300"
                >
                  <div className="flex flex-col items-center ">
                    <div className="text-4xl text-white">
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-white/80 text-sm">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
          </motion.div>


          <motion.div
            variants={containerVariants}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
          >
            {[
              { number: "1000+", label: "Members" },
              { number: "50+", label: "Events" },
              { number: "20+", label: "Communities" },
              { number: "10+", label: "Faiths" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white/5 rounded-xl p-6"
              >
                <h4 className="text-3xl font-bold text-white mb-2">
                  {stat.number}
                </h4>
                <p className="text-white/80">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;