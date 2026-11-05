import React from 'react';
import { motion } from 'framer-motion';
import tutor1 from '../assets/Teachers/WhatsApp Image 2025-06-22 at 19.33.41_3cf429b4.jpg';
import tutor2 from '../assets/Teachers/WhatsApp Image 2025-06-22 at 19.33.41_b81329a0.jpg';
import tutor3 from '../assets/Teachers/WhatsApp Image 2025-06-22 at 19.33.42_e2246325.jpg';
import tutor4 from '../assets/Teachers/WhatsApp Image 2025-06-22 at 19.33.42_f1b4f7ef.jpg';
import tutor5 from '../assets/Teachers/WhatsApp Image 2025-06-22 at 19.33.43_aaea5886.jpg';
import tutor6 from '../assets/Teachers/WhatsApp Image 2025-06-22 at 19.33.43_9408c0b4.jpg';
import tutor7 from '../assets/Teachers/WhatsApp Image 2025-06-22 at 19.33.44_37ec3125.jpg';
import tutor8 from '../assets/Teachers/WhatsApp Image 2025-06-22 at 19.33.44_2bb42fa8.jpg';
import tutor9 from '../assets/Teachers/WhatsApp Image 2025-06-22 at 19.33.45_d6ade1fe.jpg';
import tutor10 from '../assets/Teachers/WhatsApp Image 2025-06-22 at 19.33.46_31d981f8.jpg';
import tutor11 from '../assets/Teachers/WhatsApp Image 2025-06-22 at 19.33.46_42d2095f.jpg';
import tutor12 from '../assets/Teachers/WhatsApp Image 2025-06-22 at 19.33.47_89ab7efd.jpg';
import whatsappIcon from '../assets/download.jpeg';

const tutors = [
  { name: "Somnath Ghoshal", subject: "Visual Arts  Educator", image: tutor1 },
  { name: "Erick Mwema", subject: "French Educator", image: tutor2 },
  { name: "P.Girish", subject: "Biology Educator", image: tutor3 },
  { name: "Y.Manoj", subject: "English Educator", image: tutor4 },
  { name: "G. Gayatri", subject: "MYP Facilitator", image: tutor5 },
  // { name: "Ekwinder Kaur", subject: "PYP Facilitator", image: tutor6 },
  { name: "Manisha", subject: "PYP Facilitator", image: tutor7 },
  { name: "Sanjeev Kumar ", subject: "PGT PED", image: tutor8 },
  { name: "Kouadio Kouassi Saturnin", subject: "Spanish Educator", image: tutor9 },
  { name: "Anusha Ravuri", subject: "PYP Facilitator", image: tutor10 },
  // { name: "Rupali", subject: "MYP Facilitator", image: tutor11 },
  // { name: "Jasmine", subject: "EY  Facilitator", image: tutor12 }
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
};

const Tutors = () => (
  <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 pb-16">
    {/* WhatsApp Floating Icon */}
    <motion.a
      href="https://wa.me/+918367201137"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-4 bottom-20 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all transform hover:scale-110"
      aria-label="Contact us on WhatsApp"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5 }}
    >
      <img src={whatsappIcon} alt="WhatsApp" width="32" height="32" />
    </motion.a>
    {/* Hero Section */}
    <motion.div
      className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white py-24 px-4 sm:px-6 lg:py-32 lg:px-8 text-center overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
    >
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-10 left-5 w-32 h-32 sm:w-48 sm:h-48 bg-white/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-10 right-5 w-40 h-40 sm:w-64 sm:h-64 bg-purple-400/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-cyan-400/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.05, 0.08, 0.05] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
      </div>
      <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300">Tutors</span>
      </motion.h1>
      <motion.p
        className="text-lg sm:text-xl text-white font-bold max-w-2xl mx-auto mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Teaching with heart, guiding with passion—meet our awesome tutor squad!
      </motion.p>
    </motion.div>
    {/* Tutors Grid */}
    <motion.div
      className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4"
      initial="hidden"
      animate="visible"
      variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
    >
      {tutors.map((tutor, idx) => (
        <motion.div
          key={tutor.name}
          className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-transform duration-300 cursor-pointer flex flex-col items-center"
          whileHover={{ scale: 1.07 }}
          variants={fadeInUp}
        >
          <img
            src={tutor.image}
            alt={tutor.name}
            className="w-64 h-80 rounded-lg object-cover mb-4 border-4 border-blue-200"
            style={{ aspectRatio: '4/5' }}
          />
          <h3 className="text-xl font-bold text-red-700 mb-1">{tutor.name}</h3>
          <p className="text-blue-800 font-medium">{tutor.subject}</p>
        </motion.div>
      ))}
    </motion.div>
  </div>
);

export default Tutors; 