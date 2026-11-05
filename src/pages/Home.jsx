import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowLeft, ArrowRight, Star, Phone, Mail, MessageCircle, GraduationCap,
  Home, Monitor, BookOpen, Users, Award, Clock, Shield, CheckCircle,
  Facebook, Twitter, Instagram, Linkedin
} from 'lucide-react';
import heroImage from '../assets/teacher-helping-her-daughter-study-home (1).jpg';
import forParentsImage from '../assets/parent.jpg';
import onlineTuitionImage from '../assets/WhatsApp Image 2025-06-22 at 16.24.59_caa6cfad.jpg';
import homeTuitionImage from '../assets/WhatsApp Image 2025-06-22 at 16.24.54_591e6f1e.jpg';


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

import testimonial1 from '../assets/students/s1.jpg';
import testimonial2 from '../assets/students/s2.jpg';
import testimonial3 from '../assets/students/s3.jpg';
import testimonial4 from '../assets/students/s4.jpg';
import testimonial5 from '../assets/students/s5.jpg';
import testimonial6 from '../assets/students/s6.jpg';
import testimonial7 from '../assets/students/s7.jpg';
import testimonial8 from '../assets/students/s8.jpg';
import testimonial9 from '../assets/students/s9.jpg';
import testimonial10 from '../assets/students/s10.jpg';
import testimonial11 from '../assets/students/s11.jpg';
import testimonial12 from '../assets/students/s12.jpg';


// Framer Motion variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.2, type: 'spring', stiffness: 100 }
  })
};

const listVariants = {
  visible: { transition: { staggerChildren: 0.15 } }
};

const listItem = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 120 } }
};

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

const testimonials = [
    {
      name: 'AARNA',
     
      text: "After joining Neha Ma'am's tuition, my daughter Aarna has improved remarkably in her studies. She now tackles difficult concepts with confidence in the supportive environment. Very grateful for Neha Ma'am's dedication and guidance Breeze Tutors made difficult subjects easy to understand. My grades improved significantly!",
      rating: 5,
      image: testimonial6
    },
    {
      name: 'LOUKHYA& LEKHYA',
      
      text: "Neha is an excellent teacher who makes learning fun and interactive. My daughters enjoy her classes and have improved academically. Very grateful for her support",
      rating: 5,
      image: testimonial4
    },
    {
      name: 'VISHUDH',
      
      text: "My son Vishudh was lagging in reading and writing after online classes, but Neha Madam helped him improve significantly in all subjects. She's patient, caring, and teaches interactively - we're very happy with the experience! - Preeti and Vishudh",
      rating: 5,
      image: testimonial5
    },
    {
      name: 'NOOREIN ',
     
      text: "Hi, this is Sakeena. I've enrolled my daughter Noorein (Grade 4) in Neha ma'am's tuition classes, and she's a wonderful teacher who understands each child's learning style. Noorein enjoys her fun, engaging classes and has improved significantly in academics - very thankful to Neha ma'am!",
      rating: 5,
      image: testimonial3
    },
    {
      name: 'SAIESHA',
    
      text: "I enrolled my daughter in Grade 6 with Brain Breeze Tutors, and the improvement has been incredible - her confidence in Math and English has grown significantly. Neha ma'am is patient, knowledgeable, and makes learning fun with personalized attention - highly recommended!",
      rating: 5,
      image: testimonial2
    }
    ,
    {
      name: 'AVIRAJ',
    
      text: "The tutor understands young children and tailors each session to match my child's mood and interest, balancing structure with fun to keep him engaged without pressure. His letter formation, counting, and vocabulary have all improved beautifully",
      rating: 5,
      image: testimonial1
    }
    ,
    {
      name: 'S.KHIZAR AHMED',
    
      text: "The tutor is kind, nurturing, and introduces new concepts with creativity using real-life examples, flashcards, and drawing. I've noticed steady improvement in his concentration, and now he enjoys learning rather than resisting it.",
      rating: 5,
      image: testimonial9
    }
    ,
    {
      name: 'S.KHALID AHMED',
    
      text: "We started home tuition for math, but it's benefited him in all subjects - the tutor is experienced, patient, and friendly, making my child feel at ease. He now completes assignments on time with improved problem-solving skills, and I truly believe this personalized teaching method is what every child needs",
      rating: 5,
      image: testimonial8
    }
    ,
    {
      name: 'FARYAL',
    
      text: "What I love most is how the Ms.Neha blends learning with creativity. My daughter actually looks forward to her sessions. Her confidence in reading and mental math has improved so much—we're beyond happy with the progress!",
      rating: 5,
      image: testimonial10
    }
    ,
    {
      name: 'AVIRAJ',
    
      text: "Ms. Neha has built a great rapport with my son. Sessions are interactive and calm, and she adjusts the pace based on his grasp of the topic. His comprehension and writing skills have grown remarkably in just a few months.",
      rating: 5,
      image: testimonial11
    },
    {
      name: 'M. ISHAAN',
    
      text: "Mr. Girish has a remarkable ability to connect with children - my son felt comfortable and eager to learn from the very first session. Each class blends fun with learning, and we've seen consistent growth in vocabulary, grammar, and confidence - he truly cares about his students' development",
      rating: 5,
      image: testimonial12
    }
];

const TutorCard = ({ tutor }) => (
  <motion.div
    className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300 flex-shrink-0  mx-4"
    whileHover={{ y: -5 }}
  >
    <img
      src={tutor.image}
      alt={tutor.name}
      className="w-32 h-32 rounded-full mx-auto mb-4 object-cover ring-4 ring-offset-2 ring-blue-200"
    />
    <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-black to-blue-600">{tutor.name}</h3>
    <p className="text-blue-600">{tutor.subject}</p>
    {/* {tutor.company && <p className="text-gray-500 font-medium">{tutor.subject}</p>} */}
  </motion.div>
);

const Homepage = () => {
  const [showForm, setShowForm] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const duplicatedTutors = [...tutors, ...tutors];
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <motion.a
        href="https://wa.me/+918367201137"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-6 bottom-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all transform hover:scale-110 flex items-center justify-center"
        aria-label="Contact us on WhatsApp"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16">
          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
        </svg>
      </motion.a>

      {/* Hero Section */}
      <motion.section
        className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-800 to-purple-800 text-white overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
          <div className="absolute inset-0 opacity-10">
           <motion.div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full animate-pulse" initial={{ scale: 0 }} animate={{ scale: 1, transition: {delay: 0.2, duration: 0.5}}}></motion.div>
           <motion.div className="absolute top-40 right-20 w-16 h-16 bg-white rounded-full animate-bounce" initial={{ scale: 0 }} animate={{ scale: 1, transition: {delay: 0.4, duration: 0.5}}}></motion.div>
           <motion.div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white rounded-full animate-ping" initial={{ scale: 0 }} animate={{ scale: 1, transition: {delay: 0.6, duration: 0.5}}}></motion.div>
         </div>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div variants={fadeInUp}>
          <h1 className="text-3xl sm:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight text-yellow-500">
  Brain Breeze Tutors <br/>
  <span className="text-white text-3xl">
    Get Clarity, Achieve Easy Learning
    <br/>
  </span>
</h1> 
{/* <p className="text-xl sm:text-2xl text-blue-200 mb-8 max-w-2xl font-bold">Personalized Learning, Real Progress</p> */}
            <p className="text-xl sm:text-2xl text-blue-200 mb-8 max-w-2xl">
             <span className="text-white font-bold mb-4">Personalized Learning, Real Progress</span>  <br/>
            Connect with expert home and online tutors who tailor every session to your child's needs — helping them build confidence and excel academically.            </p>
            {/* <Link to="/register">
              <motion.button
                className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-bold px-8 py-4 rounded-full text-lg shadow-lg transform transition-all hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Enroll Now
              </motion.button>
            </Link> */}
          </motion.div>
          <motion.div
            className="relative"
            variants={fadeInUp}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <img
              src={heroImage}
              alt="Tutor helping student"
              className="rounded-2xl shadow-2xl w-full"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* For Parents Section */}
      <motion.section
        className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInUp}>
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full mr-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-4xl sm:text-4xl font-bold text-blue-500">🎓 For Parents</h2>
              </div>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                We understand that every child learns differently. That's why we connect you with carefully selected, qualified tutors who cater to your child's specific academic needs — whether it's in math, science, languages, or overall learning support covering all academic curriculum <strong>IB, Cambridge, ICSE, IGCSE, CBSE & SSC</strong>.
              </p>
              <motion.div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: Shield, text: 'Background Verified Tutors' },
                  { icon: Award, text: 'Subject Matter Experts' },
                  { icon: Clock, text: 'Flexible Scheduling' },
                  { icon: CheckCircle, text: 'All Boards Covered' },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center p-3 bg-white rounded-lg shadow-sm"
                    custom={index}
                    variants={cardVariants}
                    whileHover={{ scale: 1.05 }}
                  >
                    <item.icon className="w-6 h-6 text-blue-500 mr-3" />
                    <span className="text-sm font-medium text-gray-700">{item.text}</span>
                  </motion.div>
                ))}
              </motion.div>
              <Link to="/register">
                <motion.button
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold px-8 py-4 rounded-full text-lg shadow-lg transform transition-all hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Enroll Now
                </motion.button>
              </Link>
            </motion.div>
            <motion.div className="relative" variants={fadeInUp}>
              <img
                src={forParentsImage}
                alt="Parent and child learning together"
                className="rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Online Tuitions Section */}
      <motion.section
        className="py-20 bg-white px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-4xl sm:text-5xl font-bold text-blue-400 mb-4">Online Tuitions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quality education delivered through interactive online sessions
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInUp}>
              <img
                src={onlineTuitionImage}
                alt="Online Tuition"
                className="rounded-2xl shadow-xl"
              />
            </motion.div>
            <motion.div
              className="relative bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl shadow-lg"
              variants={fadeInUp}
            >
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-4 rounded-full mr-4">
                  <Monitor className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">💻 Flexible & Convenient</h3>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Experience quality learning from the comfort of your home with our expert online tutors. We offer live, one-on-one sessions tailored to your child's pace, covering all school subjects and boards.
              </p>
              <motion.ul className="space-y-2 mb-6" variants={listVariants}>
                {[
                  'Live, interactive one-on-one sessions',
                  'Flexible schedules to fit your routine',
                  'Secure platforms with real-time doubt solving',
                  'Perfect for busy parents and students',
                ].map((item, index) => (
                  <motion.li key={index} className="flex items-start" custom={index} variants={listItem}>
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Home Tuitions Section */}
      <motion.section
        className="py-20 bg-white px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-4xl sm:text-5xl font-bold text-blue-800 mb-4">Home Tuitions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Personalized one-on-one mentoring at your doorstep
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="relative bg-gradient-to-br from-purple-200 to-violet-300 p-8 rounded-2xl shadow-lg"
              variants={fadeInUp}
            >
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-purple-500 to-emerald-600 p-4 rounded-full mr-4">
                  <Home className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-purple-800">🏠 Personalized Attention</h3>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Looking for personal attention and focused learning? Our home tuition service connects you with trusted, background-verified tutors who teach at your doorstep. Each tutor is carefully matched to meet your child's academic goals.
              </p>
              <motion.ul className="space-y-2 mb-6" variants={listVariants}>
                {[
                  'Background-verified, trusted tutors',
                  'Personalized one-on-one mentoring',
                  'Distraction-free home environment',
                  'Regular subject help and exam preparation',
                ].map((item, index) => (
                  <motion.li key={index} className="flex items-start" custom={index} variants={listItem}>
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <img
                src={homeTuitionImage}
                alt="Home Tuition"
                className="rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Our Tutors Section */}
      {/* <motion.section
        className="py-20 bg-white overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-4xl sm:text-5xl font-bold text-blue-900 mb-4">
              From Struggling to Thriving
            </h2>
            <p className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 max-w-3xl mx-auto animate-pulse">
              Watch your child grow with customized guidance & Tailored Management
            </p>
          </motion.div>
        </div>
        <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] overflow-hidden">
          <motion.div
            className="flex gap-8"
            animate={{
              x: ['0%', '-50%'],
            }}
            transition={{
              ease: 'linear',
              duration: 10,
              repeat: Infinity,
              repeatType: 'loop'
            }}
          >
            {tutors.map((tutor, index) => (
              <TutorCard key={index} tutor={tutor} />
            ))}
          </motion.div>
        </div>
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mt-16" variants={fadeInUp}>
            <Link to="/register">
              <motion.button
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold px-8 py-4 rounded-full text-lg shadow-lg transform transition-all hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Find a Tutor
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </motion.section> */}

      {/* Testimonials Section */}
      <motion.section
        className="py-20 bg-gradient-to-br from-indigo-100 to-purple-100 p-4 sm:p-6 lg:p-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Testimonials </h2>
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400 max-w-3xl mx-auto mb-4">
            Our Success Stories
            </h3>
            <p className="text-xl text-black-600">
              Hear from students who transformed with Brain Breeze Tutors
            </p>
          </motion.div>
          <div className="relative overflow-hidden">
             <motion.div
              className="flex"
              animate={{
                x: `-${currentTestimonial * (100 / 3)}%`,
              }}
              transition={{ type: 'spring', stiffness: 50 }}
            >
              {duplicatedTestimonials.map((testimonial, index) => (
                <div key={index} className="flex-shrink-0 w-full md:w-1/3 p-4">
                  <div className="bg-white rounded-2xl p-8 shadow-lg text-center h-full flex flex-col justify-between">
                    <div>
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-indigo-200"
                        />
                        <h4 className="text-xl font-bold text-blue-900 mb-1">{testimonial.name}</h4>
                        {/* <p className="text-indigo-600 mb-6">{testimonial.role}</p> */}
                        <p className="text-gray-700 text-lg italic whitespace-pre-line">"{testimonial.text}"</p>
                    </div>
                    <div className="flex justify-center items-center mt-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          size={24}
                          className='text-yellow-400 fill-yellow-400'
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Homepage;
