import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Modal component
interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-bold mb-4">Contact Us</h2>
                <p>Here is the contact page content.</p>
                <button onClick={onClose} className="mt-4 px-4 py-2 bg-red-500 text-white rounded">
                    Close
                </button>
            </div>
        </div>
    );
};

export default function Contact() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleButtonClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <main>
            <motion.button
                className="px-4 sm:px-6 py-2 sm:py-3 bg-white text-black rounded-full text-base sm:text-lg font-semibold hover:bg-[#915EFF] hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                onClick={handleButtonClick}
            >
                Contact Us
            </motion.button>

            <ContactModal isOpen={isModalOpen} onClose={handleCloseModal} />
        </main>
    );
}
