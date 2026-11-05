import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Monitor, Home, Target, Users, BookOpen, Clock, Shield, Zap, CheckCircle, Award, Globe, HeartHandshake, MessageCircle } from 'lucide-react';

const Services = () => {
  const [counts, setCounts] = useState({
    students: 0,
    tutors: 0,
    successRate: 0
  });

  useEffect(() => {
    const animateCounts = () => {
      const targetCounts = {
        students: 10000,
        tutors: 500,
        successRate: 98
      };

      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepDuration = duration / steps;

      let currentStep = 0;
      const interval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;

        setCounts({
          students: Math.floor(targetCounts.students * progress),
          tutors: Math.floor(targetCounts.tutors * progress),
          successRate: Math.floor(targetCounts.successRate * progress)
        });

        if (currentStep >= steps) {
          clearInterval(interval);
          setCounts(targetCounts);
        }
      }, stepDuration);

      return () => clearInterval(interval);
    };

    // Start animation when component mounts
    const timer = setTimeout(animateCounts, 500);
    return () => clearTimeout(timer);
  }, []);

  // Framer Motion variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' }
    })
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* WhatsApp Floating Icon */}
      <motion.a
  href="https://wa.me/918367201137"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed right-4 bottom-20 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all transform hover:scale-110"
  aria-label="Contact us on WhatsApp"
  initial={{ opacity: 0, scale: 0 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ delay: 0.5 }}
>
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16">
    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
  </svg>
</motion.a>

      {/* Hero Section */}
      <motion.section
        className="relative py-24 px-4 sm:px-6 lg:px-8 text-white bg-gradient-to-r from-blue-600 to-purple-600 text-center overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.div
            className="flex justify-center items-center mb-4"
            variants={fadeInUp}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300">Services</span>
            </h1>
          </motion.div>
          <motion.p
            className="text-lg sm:text-xl text-blue-100 mt-4"
            variants={fadeInUp}
          >
            Tailored tutoring solutions designed to help every student succeed.
          </motion.p>
        </div>
      </motion.section>

      {/* Main Services Section */}
      <motion.section 
        className="py-12 md:py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-10 md:mb-12" variants={fadeInUp}>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 md:mb-3">Choose Your Learning Style</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Whether you prefer learning from home or having a tutor visit, we've got the perfect
              solution for you
            </p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 gap-6 md:gap-10 max-w-6xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Online Tuitions */}
            <motion.div variants={cardVariants}>
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 group">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 md:p-8 text-white relative overflow-hidden">
                  <div className="absolute inset-0 bg-white/10 transform -skew-y-1 group-hover:skew-y-1 transition-transform duration-500"></div>
                  <div className="relative z-10">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                        <Monitor className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold">Online Tuitions</h3>
                    </div>
                    <p className="text-blue-100 text-sm md:text-base leading-relaxed mb-4">
                      Learn from anywhere with our interactive online tutoring sessions. 
                      Real-time video calls, digital whiteboards, and screen sharing for an engaging learning experience.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-medium">Live Sessions</span>
                      <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-medium">Screen Sharing</span>
                      <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-medium">Digital Tools</span>
                    </div>
                  </div>
                </div>
                <motion.div 
                  className="p-6 md:p-8"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <motion.h4 className="text-lg md:text-xl font-bold text-gray-800 mb-3" variants={fadeInUp}>Key Features:</motion.h4>
                  <motion.ul className="space-y-2 text-sm md:text-base text-gray-600" variants={staggerContainer}>
                    <motion.li className="flex items-center" variants={fadeInUp}>
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      High-quality video and audio
                    </motion.li>
                    <motion.li className="flex items-center" variants={fadeInUp}>
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      Interactive whiteboard and tools
                    </motion.li>
                    <motion.li className="flex items-center" variants={fadeInUp}>
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      Screen sharing capabilities
                    </motion.li>
                    <motion.li className="flex items-center" variants={fadeInUp}>
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      Session recording available
                    </motion.li>
                    <motion.li className="flex items-center" variants={fadeInUp}>
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      Flexible scheduling
                    </motion.li>
                  </motion.ul>
                  <Link to="/register">
                    <motion.button
                      className="w-full mt-6 bg-gradient-to-r from-blue-500 to-cyan-600 text-white py-3 rounded-xl font-bold hover:from-blue-600 hover:to-cyan-700 transition-all transform hover:scale-105"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Start Online Learning
                    </motion.button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            {/* Home Tuitions */}
            <motion.div variants={cardVariants}>
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 group">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 md:p-8 text-white relative overflow-hidden">
                  <div className="absolute inset-0 bg-white/10 transform -skew-y-1 group-hover:skew-y-1 transition-transform duration-500"></div>
                  <div className="relative z-10">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                        <Home className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold">Home Tuitions</h3>
                    </div>
                    <p className="text-green-100 text-sm md:text-base leading-relaxed mb-4">
                      Get personalized attention in the comfort of your home. 
                      Our qualified tutors visit your location for face-to-face learning sessions.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-medium">Personal Attention</span>
                      <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-medium">Home Comfort</span>
                      <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-medium">Direct Interaction</span>
                    </div>
                  </div>
                </div>
                <motion.div 
                  className="p-6 md:p-8"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <motion.h4 className="text-lg md:text-xl font-bold text-gray-800 mb-3" variants={fadeInUp}>Key Features:</motion.h4>
                  <motion.ul className="space-y-2 text-sm md:text-base text-gray-600" variants={staggerContainer}>
                    <motion.li className="flex items-center" variants={fadeInUp}>
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      One-on-one personalized attention
                    </motion.li>
                    <motion.li className="flex items-center" variants={fadeInUp}>
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      Comfortable home environment
                    </motion.li>
                    <motion.li className="flex items-center" variants={fadeInUp}>
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      Direct face-to-face interaction
                    </motion.li>
                    <motion.li className="flex items-center" variants={fadeInUp}>
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      Physical learning materials
                    </motion.li>
                    <motion.li className="flex items-center" variants={fadeInUp}>
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      Flexible timing options
                    </motion.li>
                  </motion.ul>
                  <Link to="/register">
                    <motion.button
                      className="w-full mt-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-xl font-bold hover:from-green-600 hover:to-emerald-700 transition-all transform hover:scale-105"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Book a Home Tutor
                    </motion.button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section 
        className="py-12 md:py-16 bg-gradient-to-r from-slate-50 to-blue-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-10 md:mb-12" variants={fadeInUp}>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 md:mb-3">Why Choose Brain Breeze Tutors?</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive educational solutions with a focus on quality, safety, and results
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Verified Tutors",
                description: "All our tutors undergo thorough background verification and qualification checks.",
                color: "from-blue-500 to-cyan-600"
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: "Personalized Learning",
                description: "Customized teaching methods tailored to each student's learning style and pace.",
                color: "from-purple-500 to-pink-600"
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: "Flexible Scheduling",
                description: "Choose convenient time slots that fit your family's schedule and routine.",
                color: "from-green-500 to-emerald-600"
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "Proven Results",
                description: "Track record of improving student performance and academic confidence.",
                color: "from-yellow-400 to-orange-500"
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Wide Coverage",
                description: "Available across multiple cities with local and online tutoring options.",
                color: "from-indigo-500 to-purple-600"
              },
              {
                icon: <HeartHandshake className="w-8 h-8" />,
                title: "24/7 Support",
                description: "Round-the-clock customer support to address your queries and concerns.",
                color: "from-red-500 to-pink-600"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 border border-transparent hover:border-blue-200"
                variants={cardVariants}
                custom={index}
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-full flex items-center justify-center mb-4`}>
                  <div className="text-white">{feature.icon}</div>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section 
        className="py-12 md:py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.div 
            className="max-w-4xl mx-auto" 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6" variants={fadeInUp}>Ready to Start Your Learning Journey?</motion.h2>
            <motion.p className="text-base md:text-lg text-blue-100 mb-6 md:mb-8 max-w-2xl mx-auto" variants={fadeInUp}>
              Join thousands of satisfied parents and students who have found success with Brain Breeze Tutors.
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" variants={fadeInUp}>
              <Link to="/register">
                <motion.button
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg transform transition-all hover:scale-105"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Enroll Now
                </motion.button>
              </Link>
              <a
                href="mailto:brainbreezetutors@gmail.com"
                className="bg-gradient-to-r from-yellow-400 to-orange-500 px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold text-base md:text-lg hover:from-yellow-500 hover:to-orange-600 transition-all shadow-lg hover:shadow-xl"
              >
                Contact Us
              </a>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Services;