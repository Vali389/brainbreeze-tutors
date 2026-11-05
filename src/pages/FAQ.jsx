import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { MessageCircle, Users, GraduationCap, Award, ChevronDown, HelpCircle } from 'lucide-react';
import whatsappIcon from '../assets/download.jpeg';
// import Footer from '../components/Footer';

// Custom SVG Icons
const ChevronDownIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
  </svg>
);

const ChevronUpIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
  </svg>
);

const AcademicCapIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
    <path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.711 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286a48.4 48.4 0 016.844 3.323 54.02 54.02 0 011.369.739z" />
    <path d="M12 18a54.353 54.353 0 01-1.369-.739c-.804-.441-1.612-.9-2.422-1.378a47.956 47.956 0 00-6.844-3.323c.04-.896.087-1.792.14-2.686a48.45 48.45 0 017.666 3.282 54.02 54.02 0 002.629 1.383 54.02 54.02 0 002.629-1.383 48.45 48.45 0 017.666-3.282c.053.894.1 1.79.14 2.686a47.956 47.956 0 00-6.844 3.323c-.81.478-1.618.937-2.422 1.378A54.353 54.353 0 0112 18z" />
  </svg>
);

const HomeIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
    <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.432z" />
  </svg>
);

const ComputerDesktopIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" d="M2.25 5.25a3 3 0 013-3h13.5a3 3 0 013 3V15a3 3 0 01-3 3h-3.844l.097.487a.75.75 0 01-.734.913H6.731a.75.75 0 01-.734-.913L6.094 18H5.25a3 3 0 01-3-3V5.25zm1.5 0v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5z" clipRule="evenodd" />
  </svg>
);

const CheckCircleIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
  </svg>
);

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(null);
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

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  // Framer Motion variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' }
    })
  };

  const faqData = [
    {
      question: "What is Brain Breeze Tutors and how does it work?",
      answer: "Brain Breeze Tutors is a trusted platform that connects parents with qualified home tutors and online tuition experts for school students across India. Parents can easily request a tutor, and teachers can register to find teaching jobs in their location or online.",
    },
    {
      question: "Do you offer both home tuition and online tuition services?",
      answer: "Yes! We provide personalized home tuition services in major cities and live online tuition classes for students from Class PP1 to 12, covering all boards like IB, Cambridge, ICSE, IGCSE, CBSE and State Boards.",
    },
    {
      question: "How can I find a private tutor near me?",
      answer: "Just fill out our Parent Registration Form and we'll connect you with verified, experienced private tutors near your location based on your subject and time preferences.",
    },
    {
      question: "Are your tutors background-verified and qualified?",
      answer: "Absolutely. Every home tutor and online tutor in our network is thoroughly verified, qualified, and often experienced in teaching students from top educational boards like IB, Cambridge, ICSE, IGCSE, CBSE & SSC.",
    },
    {
      question: "What subjects do you offer tuition for?",
      answer: "We provide tuition for all school subjects including Math, Science, English, Social Studies, Hindi, and more — from pre primary school to senior secondary levels. Specialized coaching for board exams and competitive tests is also available.",
    },
    {
      question: "How do I register as a teacher or tutor?",
      answer: "If you're looking for teaching jobs or home tuition opportunities, simply fill out our Teacher Registration Form. Once approved, you'll start receiving parent leads directly via WhatsApp or Email.",
    },
    {
      question: "Is there a fee to join as a tutor?",
      answer: "Yes, we do charge a registration fee for tutors to ensure commitment and quality in our network.",
    },
    {
      question: "Do you offer tuition for CBSE and ICSE board students?",
      answer: "Yes, we specialize in CBSE and ICSE tuition services for students from Class PP1 to Class 12. Whether you choose online classes or home tutoring, our tutors are trained to align with your school syllabus and exam patterns.",
    },
    {
      question: "How do I communicate with the assigned tutor?",
      answer: "Once your tutor is matched, you can connect directly through WhatsApp, phone, or email for scheduling sessions, discussing goals, and tracking your child's progress.",
    },
    {
      question: "Can I request a demo class before finalizing the tutor?",
      answer: "Yes, we encourage parents to request a free demo tuition class to assess the tutor's teaching style, communication, and compatibility before proceeding with regular sessions.",
    },
  ];

  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Tutors",
      description: "Background-verified and qualified tutors for all subjects",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Home Tuition",
      description: "Personalized learning at your doorstep",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: <ComputerDesktopIcon className="w-8 h-8" />,
      title: "Online Classes",
      description: "Interactive live sessions from anywhere",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "All Boards",
      description: "IB, Cambridge, ICSE, IGCSE, CBSE & State Boards",
      color: "from-yellow-400 to-orange-500"
    },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Helmet>
        <title>FAQ - Brain Breeze Tutors | Home & Online Tuition Services</title>
        <meta
          name="description"
          content="Get answers to frequently asked questions about Brain Breeze Tutors. Learn about our home tuition, online classes, tutor verification process, and more."
        />
        <meta
          name="keywords"
          content="tuition FAQ, home tutor questions, online tuition help, CBSE tuition, ICSE tutors, private tuition service"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://brainbreezetutors.com/faq" />
        <meta property="og:title" content="FAQ - Brain Breeze Tutors | Home & Online Tuition Services" />
        <meta property="og:description" content="Get answers to frequently asked questions about Brain Breeze Tutors." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://brainbreezetutors.com/faq" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="FAQ - Brain Breeze Tutors" />
        <meta name="twitter:description" content="Get answers to frequently asked questions about Brain Breeze Tutors." />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </Helmet>

      {/* Hero Section */}
      <motion.div
        className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 px-4 sm:px-6 lg:px-8 text-center overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <div className="absolute inset-0 bg-black opacity-20 z-0"></div>
        <motion.div
          className="relative z-10 max-w-3xl mx-auto"
          variants={fadeInUp}
        >
          <div className="flex justify-center items-center mb-4">
            <HelpCircle className="w-12 h-12 mr-4" />
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
              Frequently Asked Questions
            </h1>
          </div>
          <p className="mt-4 text-lg sm:text-xl text-blue-100">
            Find answers to common questions about our tutoring services.
          </p>
        </motion.div>
      </motion.div>

      {/* Features Section */}
      <motion.section
        className="py-12 md:py-16 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8" variants={fadeInUp}>
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2"
                variants={cardVariants}
                custom={index}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <div className="text-white">{feature.icon}</div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-sm sm:text-base text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        className="py-12 md:py-16 bg-gradient-to-r from-slate-50 to-blue-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12 md:mb-16" variants={fadeInUp}>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
              Common Questions
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about our tutoring services
            </p>
          </motion.div>

          <div className="space-y-4 sm:space-y-6">
            {faqData.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all"
                variants={cardVariants}
                custom={index}
              >
                <button
                  className="w-full px-6 py-4 sm:px-8 sm:py-6 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset rounded-2xl"
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-800 pr-4">
                      {faq.question}
                    </h3>
                    <div className="flex-shrink-0">
                      {openFAQ === index ? (
                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 transform rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      )}
                    </div>
                  </div>
                </button>
                {openFAQ === index && (
                  <motion.div
                    className="px-6 pb-4 sm:px-8 sm:pb-6"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        className="py-12 md:py-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div variants={fadeInUp}>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
              Still Have Questions?
            </h2>
            <p className="text-base sm:text-lg text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Can't find what you're looking for? Contact our support team and we'll get back to you as soon as possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <motion.button
                  className="bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all shadow-lg hover:shadow-xl border border-blue-600"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Enroll Now
                </motion.button>
              </Link>
              <a
                href="mailto:brainbreezetutors@gmail.com"
                className="bg-gradient-to-r from-yellow-400 to-orange-500 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:from-yellow-500 hover:to-orange-600 transition-all shadow-lg hover:shadow-xl"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* <Footer /> */}
    </div>
  );
};

export default FAQ;