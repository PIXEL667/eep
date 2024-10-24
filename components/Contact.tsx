"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Contact: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => setModalOpen(!isModalOpen);

  return (
    <>
      <button
        onClick={toggleModal}
        aria-label="Open Contact Form"
        className="fixed bottom-10 right-10 bg-purple-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-purple-700 transition duration-300"
      >
        Contact Us
      </button>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: "spring", damping: 15, stiffness: 300 }}
            className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 backdrop-blur-sm"
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="bg-white rounded-xl p-10 max-w-lg w-full relative shadow-2xl"
            >
              <button
                onClick={toggleModal}
                aria-label="Close Contact Form"
                className="absolute top-3 right-3 text-gray-600 hover:text-gray-400 transition duration-300 text-2xl"
              >
                &times;
              </button>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Contact Us</h2>
              <form>
                <div className="mb-5">
                  <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                  <input type="text" id="name" className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600" required />
                </div>
                <div className="mb-5">
                  <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                  <input type="email" id="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600" required />
                </div>
                <div className="mb-5">
                  <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                  <textarea id="message" rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600" required></textarea>
                </div>
                <div className="flex justify-end">
                  <button type="submit" className="bg-purple-600 text-white px-5 py-3 rounded-lg hover:bg-purple-700 transition duration-300">Send</button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Contact;
