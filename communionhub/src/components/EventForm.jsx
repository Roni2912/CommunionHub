import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { formatDate, validateEvent } from '../utils/eventHelper';
import { FaCalendar, FaMapMarkerAlt, FaTags, FaTimes, FaCheck } from 'react-icons/fa';

const EventForm = ({ onSubmit, onClose }) => {
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    location: '',
    category: 'social',
    description: ''
  });

  const [error, setError] = useState('');
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;

  const categories = [
    { value: 'religious', label: 'Religious', icon: '🕊️' },
    { value: 'social', label: 'Social', icon: '🎉' },
    { value: 'charity', label: 'Charity', icon: '❤️' },
    { value: 'cultural', label: 'Cultural', icon: '🎭' }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateEvent(formData)) {
      setError('Please fill in all required fields');
      return;
    }

    const newEvent = {
      ...formData,
      id: Date.now(),
      date: formatDate(formData.date)
    };

    onSubmit(newEvent);
    onClose();
  };

  const renderStep = () => {
    switch(currentStep) {
      case 1:
        return (
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -50, opacity: 0 }}
          >
            <div className="space-y-4">
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Event Title
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg
                           text-white placeholder-white/50 focus:outline-none focus:ring-2
                           focus:ring-pink-400 transition-all duration-300"
                  placeholder="Enter event title"
                  required
                />
              </div>

              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Category
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {categories.map((category) => (
                    <motion.button
                      key={category.value}
                      type="button"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setFormData({...formData, category: category.value})}
                      className={`p-3 rounded-lg flex items-center justify-center gap-2
                                transition-all duration-300 ${
                                  formData.category === category.value
                                    ? 'bg-white text-indigo-600'
                                    : 'bg-white/10 text-white hover:bg-white/20'
                                }`}
                    >
                      <span>{category.icon}</span>
                      <span>{category.label}</span>
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        );

      case 2:
        return (
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -50, opacity: 0 }}
            className="space-y-4"
          >
            <div>
              <label className="block text-white text-sm font-medium mb-2">
                <FaCalendar className="inline mr-2" />
                Date
              </label>
              <input
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({...formData, date: e.target.value})}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg
                         text-white focus:outline-none focus:ring-2
                         focus:ring-pink-400 transition-all duration-300"
                required
              />
            </div>

            <div>
              <label className="block text-white text-sm font-medium mb-2">
                <FaMapMarkerAlt className="inline mr-2" />
                Location
              </label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => setFormData({...formData, location: e.target.value})}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg
                         text-white placeholder-white/50 focus:outline-none focus:ring-2
                         focus:ring-pink-400 transition-all duration-300"
                placeholder="Enter event location"
                required
              />
            </div>
          </motion.div>
        );

      case 3:
        return (
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -50, opacity: 0 }}
          >
            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Description
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg
                         text-white placeholder-white/50 focus:outline-none focus:ring-2
                         focus:ring-pink-400 transition-all duration-300 resize-none"
                rows="6"
                placeholder="Describe your event..."
                required
              />
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600
                 rounded-2xl p-6 w-full max-w-md relative"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/70 hover:text-white
                   transition-colors duration-300"
        >
          <FaTimes className="text-xl" />
        </button>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-2">
              Add New Event
            </h2>
            <p className="text-white/70">
              Step {currentStep} of {totalSteps}
            </p>
          </div>

          <div className="w-full bg-white/10 rounded-full h-1 mb-6">
            <motion.div
              initial={{ width: '0%' }}
              animate={{ width: `${(currentStep / totalSteps) * 100}%` }}
              className="h-full bg-pink-400 rounded-full"
            />
          </div>

          <AnimatePresence>
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="bg-red-500/10 border border-red-500/20 text-white
                         rounded-lg p-3 text-sm"
              >
                {error}
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence mode="wait">
            {renderStep()}
          </AnimatePresence>

          <div className="flex gap-3 pt-4">
            {currentStep > 1 && (
              <motion.button
                type="button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setCurrentStep(currentStep - 1)}
                className="flex-1 py-3 bg-white/10 text-white rounded-lg
                         hover:bg-white/20 transition-all duration-300"
              >
                Previous
              </motion.button>
            )}

            {currentStep < totalSteps ? (
              <motion.button
                type="button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setCurrentStep(currentStep + 1)}
                className="flex-1 py-3 bg-white text-indigo-600 rounded-lg
                         hover:shadow-lg transition-all duration-300"
              >
                Next
              </motion.button>
            ) : (
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 py-3 bg-white text-indigo-600 rounded-lg
                         hover:shadow-lg transition-all duration-300
                         flex items-center justify-center gap-2"
              >
                <FaCheck />
                Create Event
              </motion.button>
            )}
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default EventForm;