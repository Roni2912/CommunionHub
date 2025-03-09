
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useEvents } from '../context/EventContext';
import EventCard from '../components/EventCard';
import EventForm from '../components/EventForm';
import { FaPlus, FaCalendar } from 'react-icons/fa';

const Events = () => {
  const { events, addEvent } = useEvents(); 
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'religious', 'social', 'charity', 'cultural'];

  const filteredEvents = selectedCategory === 'all' 
    ? events 
    : events.filter(event => event.category === selectedCategory);

  const handleAddEvent = (newEvent) => {
    addEvent({
      ...newEvent,
      id: Date.now(),
      date: new Date(newEvent.date).toLocaleDateString(),
    });
    setIsFormOpen(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 pt-20 pb-12"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h1 
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            className="text-5xl font-bold text-white mb-4 mt-14"
          >
            Community Events
          </motion.h1>
          <p className="text-white/80 text-lg">
            Discover and join events that matter to you
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mb-8 space-y-4 md:space-y-0">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2.5 rounded-full text-base font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-white text-indigo-600'
                    : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </motion.button>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsFormOpen(true)}
            className="px-6 py-2.5 bg-white/10 text-white border border-white/20 
                     rounded-full text-base font-medium backdrop-blur-sm
                     hover:bg-white/20 transition-all duration-300 flex items-center"
          >
            <FaPlus className="mr-2" /> Add New Event
          </motion.button>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredEvents.map((event) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                layout
              >
                <EventCard event={event} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredEvents.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12 bg-white/10 backdrop-blur-sm rounded-xl"
          >
            <FaCalendar className="text-4xl text-white/60 mx-auto mb-4" />
            <p className="text-white/80">No events found in this category</p>
          </motion.div>
        )}

        <AnimatePresence>
          {isFormOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-2xl p-6 w-full max-w-md"
              >
                <EventForm 
                  onSubmit={handleAddEvent} 
                  onClose={() => setIsFormOpen(false)} 
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Events;


