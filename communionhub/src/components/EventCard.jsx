
import { motion, AnimatePresence } from 'framer-motion';
import { FaTrash, FaCalendar, FaMapMarkerAlt } from 'react-icons/fa';
import { useEvents } from '../context/EventContext';
import DeleteConfirmModal from "./DeleteConfirmModal"
import { useState } from 'react';

const EventCard = ({ event }) => {
  const { deleteEvent } = useEvents();
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleDelete = () => {
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    deleteEvent(event.id);
    setShowDeleteModal(false);
  };
  return (
    <>
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 relative group  transition-all duration-300"
    >
      {/* Delete Button - Updated Styling */}
      <button
        onClick={handleDelete}
        className="absolute top-3 right-3 p-1.5 
                 bg-red-500/30 hover:bg-red-500/50 
                 rounded-full text-white"
        aria-label="Delete event"
      >
        <FaTrash className="w-3.5 h-3.5" />
      </button>

      <div className="text-white">
        <h3 className="text-xl font-semibold mb-3">{event.title}</h3>
        
        <div className="flex items-center mb-2 text-white/80">
          <FaCalendar className="mr-2" />
          <p>{event.date}</p>
        </div>

        <div className="flex items-center mb-4 text-white/80">
          <FaMapMarkerAlt className="mr-2" />
          <p>{event.location}</p>
        </div>

        <p className="text-white/70 mb-4">{event.description}</p>

        <div className="flex justify-between items-center">
          <span className="px-3 py-1 bg-white/20 rounded-full text-sm">
            {event.category}
          </span>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 bg-white text-indigo-600 rounded-full 
                     text-sm font-medium hover:shadow-lg transition-all duration-300"
          >
            Join Event
          </motion.button>
        </div>
      </div>
    </motion.div>

    <AnimatePresence>
      {showDeleteModal && (
        <DeleteConfirmModal
          isOpen={showDeleteModal}
          onClose={() => setShowDeleteModal(false)}
          onConfirm={confirmDelete}
        />
      )}
  </AnimatePresence>
  </>
  );
};

export default EventCard;