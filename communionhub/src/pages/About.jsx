import { motion } from 'framer-motion';
import { FaHeart, FaGlobe, FaHandsHelping, FaUsers } from 'react-icons/fa';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const values = [
    { icon: <FaHeart />, text: "Inclusivity", description: "Welcoming all faiths and beliefs" },
    { icon: <FaGlobe />, text: "Respect", description: "Honoring diverse perspectives" },
    { icon: <FaHandsHelping />, text: "Understanding", description: "Fostering mutual growth" },
    { icon: <FaUsers />, text: "Community", description: "Building lasting connections" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 pt-20 pb-12"
    >
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto"
        >
          <motion.div 
            variants={itemVariants}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 mt-12">
              About Communion<span className="text-pink-300">Hub</span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Connecting hearts, bridging faiths, and building a more united world together.
            </p>
          </motion.div>
          <motion.section
            variants={itemVariants}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-8 mb-8 border border-white/20"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-white/80 text-lg leading-relaxed">
              CommunionHub is dedicated to creating a digital sanctuary where people of all faiths
              and cultures can come together, share their experiences, and build meaningful connections.
              We believe in the transformative power of community and understanding to create
              a more connected and harmonious world.
            </p>
          </motion.section>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20
                         hover:bg-white/20 transition-all duration-300"
              >
                <div className="text-3xl text-pink-300 mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{value.text}</h3>
                <p className="text-white/70">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.section
            variants={itemVariants}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-8 mb-12 border border-white/20"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">Our Vision</h2>
                <p className="text-white/80 text-lg leading-relaxed">
                  We envision a world where technology bridges the gaps between different
                  faiths and cultures, fostering understanding and creating lasting bonds
                  that transcend traditional boundaries.
                </p>
              </div>
              <div className="bg-white/5 rounded-xl p-6">
                <h3 className="text-2xl font-semibold text-white mb-4">Impact Numbers</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { number: "1000+", label: "Members" },
                    { number: "50+", label: "Communities" },
                    { number: "100+", label: "Events" },
                    { number: "20+", label: "Countries" }
                  ].map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-bold text-pink-300">{stat.number}</div>
                      <div className="text-white/70">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>

          <motion.section
            variants={itemVariants}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Join Our Growing Community
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Whether you're looking to connect with others, share your faith, or
              learn about different cultures, CommunionHub is your platform for
              meaningful connections.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-indigo-600 rounded-full text-lg font-semibold
                       hover:shadow-lg transition-all duration-300"
            >
              Get Started Today
            </motion.button>
          </motion.section>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;