import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/Layout';
import Home from './pages/Home';
import Events from './pages/Events';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import { EventProvider } from './context/EventContext';

const App = () => {
  const location = useLocation();

  return (
    <EventProvider>
      <Layout>
      <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
        </div>
      </Layout>
    </EventProvider>
  );
};

export default App;
