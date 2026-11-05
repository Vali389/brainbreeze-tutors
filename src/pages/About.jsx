import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  BookOpen,
  Users,
  Target,
  Eye,
  Award,
  Globe,
  CheckCircle,
  Star,
  TrendingUp,
  Heart,
  Shield,
  Lightbulb,
  GraduationCap,
  MessageCircle,
  Mail,
  Phone
} from 'lucide-react';

// Framer Motion variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' }
  })
};

const About = () => {
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

  const stats = [
    { 
      icon: <Users className="w-8 h-8" />, 
      number: `${counts.students.toLocaleString()}+`, 
      label: 'Happy Students', 
      color: 'from-blue-500 to-cyan-600' 
    },
    { 
      icon: <GraduationCap className="w-8 h-8" />, 
      number: `${counts.tutors}+`, 
      label: 'Expert Tutors', 
      color: 'from-purple-500 to-pink-600' 
    },
    { 
      icon: <Globe className="w-8 h-8" />, 
      number: '50+', 
      label: 'Cities Covered', 
      color: 'from-green-500 to-emerald-600' 
    },
    { 
      icon: <Award className="w-8 h-8" />, 
      number: `${counts.successRate}%`, 
      label: 'Success Rate', 
      color: 'from-yellow-400 to-orange-500' 
    },
  ];

  const values = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Trust & Safety',
      description: "Every tutor is thoroughly background-verified and qualified to ensure your child's safety and learning excellence.",
      color: 'from-blue-500 to-cyan-600',
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Personalized Care',
      description: 'We understand each child is unique. Our tutors adapt their teaching methods to match individual learning styles.',
      color: 'from-red-500 to-pink-600',
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Innovation',
      description: 'Combining traditional teaching wisdom with modern technology to create engaging and effective learning experiences.',
      color: 'from-yellow-400 to-orange-500',
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Excellence',
      description: 'We strive for academic excellence and character development, helping students achieve their full potential.',
      color: 'from-green-500 to-emerald-600',
    },
  ];

  const achievements = [
    'First tutoring platform to offer 24/7 parent support',
    "Recognized as 'Best Home Tuition Service' in 2024",
    'Successfully matched 10,000+ student-tutor pairs',
    'Maintained 98% customer satisfaction rate',
    'Expanded to 50+ cities across India',
    'Launched innovative AI-powered tutor matching system',
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* WhatsApp Icon */}
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
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16">
    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
  </svg>
</motion.a>
      

      {/* Hero Section */}
      <motion.div
        className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white py-24 px-4 sm:px-6 lg:py-32 lg:px-8 text-center overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
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
          
          {/* Additional Floating Elements */}
          <motion.div
            className="absolute top-20 right-20 w-16 h-16 bg-yellow-400/20 rounded-full"
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 180, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bottom-20 left-20 w-12 h-12 bg-green-400/20 rounded-full"
            animate={{ 
              y: [0, 15, 0],
              x: [0, 10, 0],
              scale: [1, 0.8, 1]
            }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          />
          <motion.div
            className="absolute top-1/3 right-1/3 w-8 h-8 bg-pink-400/30 rounded-full"
            animate={{ 
              y: [0, -10, 0],
              x: [0, -10, 0],
              rotate: [0, 90, 180]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          />
          
          {/* Floating Educational Icons */}
          <motion.div
            className="absolute top-1/4 left-1/4 text-white/20"
            animate={{ 
              y: [0, -15, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          >
            <BookOpen className="w-8 h-8" />
          </motion.div>
          <motion.div
            className="absolute bottom-1/4 right-1/4 text-white/20"
            animate={{ 
              y: [0, 15, 0],
              rotate: [0, -5, 5, 0]
            }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          >
            <GraduationCap className="w-8 h-8" />
          </motion.div>
          <motion.div
            className="absolute top-1/2 right-1/4 text-white/20"
            animate={{ 
              x: [0, 10, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          >
            <Target className="w-6 h-6" />
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div className="text-center" variants={fadeInUp}>
            <motion.div
              className="flex items-center justify-center mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="bg-white/20 p-3 rounded-full mr-4">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300">Brain Breeze Tutors</span>
              </h1>
            </motion.div>
            <motion.p
              className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-blue-100 mb-5"
              variants={fadeInUp}
            >
              Your trusted partner in personalized education, dedicated to unlocking every student's potential.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={fadeInUp}
            >
              <Link to="/register">
                <motion.button
                  className="bg-white text-blue-600 font-semibold px-8 py-4 rounded-full text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl border border-blue-600"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Enroll Now
                </motion.button>
              </Link>
              <Link to="/contact">
                <motion.button
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8 py-4 rounded-full text-lg transition-all transform hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Us
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Stats Section */}
      <motion.section
        className="py-16 sm:py-20 px-4 sm:px-6 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8" variants={fadeInUp}>
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2"
                variants={cardVariants}
                custom={index}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <div className="text-white">{stat.icon}</div>
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">{stat.number}</div>
                <div className="text-sm sm:text-base text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Mission Section */}
      <motion.section
        className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-r from-slate-50 to-blue-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div variants={fadeInUp}>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mr-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                At Brain Breeze Tutors, our mission is to make learning simple and accessible through quality home tuition and online tuition services. We are dedicated to helping students gain academic clarity and confidence by connecting them with expert, verified private tutors across all subjects and boards.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Our goal is to create meaningful teaching opportunities for passionate educators by offering flexible and rewarding tutor jobs. We strive to be the most trusted tutor consultancy for personalized learning across India & all over the world.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center text-green-600">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span className="font-bold text-base">Quality Education</span>
                </div>
                <div className="flex items-center text-blue-600">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span className="font-bold text-base">Verified Tutors</span>
                </div>
                <div className="flex items-center text-purple-600">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span className="font-bold text-base">Flexible Learning</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="bg-white rounded-2xl p-6 sm:p-8 text-center shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 border border-transparent hover:border-blue-200"
              variants={cardVariants}
              custom={1}
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">Connecting Minds</h3>
              <p className="text-gray-600 leading-relaxed text-base sm:text-lg">Bridging the gap between passionate educators and eager learners through our innovative platform.</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Vision Section */}
      <motion.section
        className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-r from-slate-50 to-blue-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div
              className="order-2 lg:order-1 bg-white rounded-2xl p-6 sm:p-8 text-center shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 border border-transparent hover:border-green-200"
              variants={cardVariants}
              custom={1}
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-r from-blue-800 to-purple-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">Future of Learning</h3>
              <p className="text-gray-600 leading-relaxed text-base sm:text-lg">Envisioning a world where every child has access to personalized, quality education.</p>
            </motion.div>
            <motion.div className="order-1 lg:order-2" variants={fadeInUp}>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Our vision is to build India's most reliable platform for online and home tutoring — where every parent finds the right tutor, and every teacher finds the right job. We aim to make private tuition services more efficient, transparent, and student-focused.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                By combining digital tools with a human-first approach, Brain Breeze Tutors envisions a future where academic excellence is within every child's reach, and teachers are empowered to grow their careers in a flexible, fulfilling way.
              </p>
              <Link to="/register">
                <motion.button
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 sm:px-8 py-3 rounded-full font-bold hover:from-green-600 hover:to-emerald-700 transition-all shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Join Our Vision
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Values Section */}
      <motion.section
        className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-r from-indigo-100 to-purple-100"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div className="text-center mb-12 sm:mb-16" variants={fadeInUp}>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4 sm:mb-6">Our Core Values</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              These fundamental principles guide everything we do and shape our commitment to educational excellence.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 border border-transparent hover:border-blue-200"
                variants={cardVariants}
                custom={index}
              >
                <div className={`w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r ${value.color} rounded-full flex items-center justify-center mb-4 sm:mb-6`}>
                  <div className="text-white">{value.icon}</div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed text-base sm:text-lg">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Achievements Section */}
      <motion.section
        className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-r from-slate-50 to-blue-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div className="text-center mb-12 sm:mb-16" variants={fadeInUp}>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4 sm:mb-6">Our Achievements</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Milestones that reflect our commitment to educational excellence and innovation.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 border border-transparent hover:border-blue-200"
                variants={cardVariants}
                custom={index}
              >
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Star className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                  </div>
                  <p className="text-gray-700 font-bold text-sm sm:text-base">{achievement}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-r from-blue-600 to-indigo-700 text-white relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-10 left-10 w-48 h-48 bg-white/5 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bottom-10 right-10 w-64 h-64 bg-purple-400/10 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          />
        </div>
        <div className="max-w-4xl mx-auto">
          <motion.div className="text-center relative z-10" variants={fadeInUp}>
            <motion.div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 sm:mb-8" variants={fadeInUp}>
              <MessageCircle className="w-8 h-8 text-white" />
            </motion.div>
            <motion.h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6" variants={fadeInUp}>
              Ready to Start Your Learning Journey?
            </motion.h2>
            <motion.p className="text-base sm:text-lg text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed" variants={fadeInUp}>
              Join thousands of satisfied parents and students who have found success with Brain Breeze Tutors. Let us help you find the perfect tutor today.
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" variants={fadeInUp}>
              <Link to="/register">
                <motion.button
                  className="bg-white text-gray-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:from-green-600 hover:to-emerald-700 transition-all shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Find a Tutor Now
                </motion.button>
              </Link>
              <a
                href="mailto:brainbreezetutors@gmail.com"
                className="bg-gradient-to-r from-yellow-400 to-orange-500 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:from-yellow-500 hover:to-orange-600 transition-all shadow-lg hover:shadow-xl"
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

export default About;