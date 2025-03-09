import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaFacebook, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedin,
  FaHeart,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt
} from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    quickLinks: [
      { name: 'Home', path: '/' },
      { name: 'About', path: '/about' },
      { name: 'Events', path: '/events' },
      { name: 'Contact', path: '/contact' },
    ],
    community: [
      { name: 'Join Community', path: '/' },
      { name: 'Create Event', path: '/' },
      { name: 'Newsletter', path: '/*' },
      { name: 'Support', path: '/' },
    ],
    legal: [
      { name: 'Privacy Policy', path: '/*' },
      { name: 'Terms of Service', path: '/*' },
      { name: 'Cookie Policy', path: '/*' },
      { name: 'FAQ', path: '/*' },
    ]
  };

  const socialLinks = [
    { icon: <FaFacebook />, path: '/', name: 'Facebook' },
    { icon: <FaTwitter />, path: '/', name: 'Twitter' },
    { icon: <FaInstagram />, path: '/', name: 'Instagram' },
    { icon: <FaLinkedin />, path: '/', name: 'LinkedIn' },
  ];

  return (
    <footer className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="block">
              <motion.h2 
                whileHover={{ scale: 1.05 }}
                className="text-2xl font-bold text-white"
              >
                Communion<span className="text-pink-400">Hub</span>
              </motion.h2>
            </Link>
            <p className="text-white/70">
              Connecting people across faiths and cultures, building bridges for a better tomorrow.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-white/70">
                <FaEnvelope className="mr-2" />
                <a href="mailto:contact@communionhub.com" className="hover:text-pink-400 transition-colors">
                  contact@communionhub.com
                </a>
              </div>
              <div className="flex items-center text-white/70">
                <FaPhone className="mr-2" />
                <a href="tel:+1234567890" className="hover:text-pink-400 transition-colors">
                  +1 (234) 567-890
                </a>
              </div>
              <div className="flex items-center text-white/70">
                <FaMapMarkerAlt className="mr-2" />
                <span>123 Community St, City</span>
              </div>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="space-y-4">
              <h3 className="text-lg font-semibold text-white capitalize">
                {title.replace(/([A-Z])/g, ' $1').trim()}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-white/70 hover:text-pink-400 transition-colors duration-300 block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 py-8 border-t border-white/10">
          <div className="max-w-xl mx-auto text-center">
            <h3 className="text-xl font-semibold text-white mb-4">
              Subscribe to Our Newsletter
            </h3>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-white/20
                         text-white placeholder-white/50 focus:outline-none focus:ring-2
                         focus:ring-pink-400 transition-all duration-300"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600
                         transition-colors duration-300"
              >
                Subscribe
              </motion.button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/70 text-center md:text-left">
              © {currentYear} CommunionHub. Made with{' '}
              <FaHeart className="inline-block text-purple-500" /> by Ronish Dudhat
            </div>

            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.path}
                  whileHover={{ scale: 1.2, y: -2 }}
                  className="text-white/70 hover:text-pink-400 transition-colors duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className=" bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />
    </footer>
  );
};

export default Footer;