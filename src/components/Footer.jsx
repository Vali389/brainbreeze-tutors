import React, { useState, useEffect } from 'react';
import {
  Facebook as FacebookIcon,
  Instagram as InstagramIcon,
  Linkedin as LinkedInIcon,
  Mail,
  MapPin as LocationIcon,
  Phone as PhoneIcon,
  GraduationCap as SchoolIcon,
  Home as HomeIcon,
  Monitor as ComputerIcon,
} from 'lucide-react';

// Add YouTube SVG icon
const YouTubeIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em" {...props}>
    <path d="M23.498 6.186a2.994 2.994 0 0 0-2.112-2.12C19.204 3.5 12 3.5 12 3.5s-7.204 0-9.386.566a2.994 2.994 0 0 0-2.112 2.12A31.13 31.13 0 0 0 0 12a31.13 31.13 0 0 0 .502 5.814 2.994 2.994 0 0 0 2.112 2.12C4.796 20.5 12 20.5 12 20.5s7.204 0 9.386-.566a2.994 2.994 0 0 0 2.112-2.12A31.13 31.13 0 0 0 24 12a31.13 31.13 0 0 0-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentYear(new Date().getFullYear());
    }, 1000 * 60 * 60);
    return () => clearInterval(interval);
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email && /^\S+@\S+\.\S+$/.test(email)) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-gradient-to-br from-indigo-950 to-gray-900 text-white overflow-hidden relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500"></div>
      <div className="absolute top-12 left-1/4 w-24 h-24 bg-cyan-400 rounded-full opacity-10 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-1/3 w-36 h-36 bg-purple-500 rounded-full opacity-10 blur-3xl animate-pulse"></div>
      
      <div className="container mx-auto px-4 pt-16 pb-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="animate-fadeIn">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-cyan-400 to-purple-500 w-10 h-10 rounded-lg flex items-center justify-center">
                <SchoolIcon className="text-white w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold ml-3 bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent">
                Brain Breeze Tutors
              </h3>
            </div>
            <p className="mb-6 text-gray-300 leading-relaxed">
              Get clarity, Achieve Easy Learning. Quality home and online tuition services for all boards - IB, Cambridge, ICSE, IGCSE, CBSE & SSC.
            </p>
            <div className="flex items-center mb-4 group">
              <div className="w-8 h-8 rounded-full bg-indigo-900 flex items-center justify-center mr-3 group-hover:bg-cyan-500 transition-all duration-300">
                <Mail className="w-4 h-4 text-cyan-300 group-hover:text-white" />
              </div>
              <a 
                href="mailto:brainbreezetutors@gmail.com" 
                className="text-gray-400 group-hover:text-cyan-300 group-hover:underline transition-all duration-300"
              >
                info@brainbreezetutors.com
              </a>
            </div>
            <div className="flex items-center mb-4 group">
              <div className="w-8 h-8 rounded-full bg-indigo-900 flex items-center justify-center mr-3 group-hover:bg-cyan-500 transition-all duration-300">
                <PhoneIcon className="w-4 h-4 text-cyan-300 group-hover:text-white" />
              </div>
              <a 
                href="tel:+918367201137" 
                className="text-gray-400 group-hover:text-cyan-300 group-hover:underline transition-all duration-300"
              >
                +91 8367201137
              </a>
            </div>
            <div className="flex items-center group">
              <div className="w-8 h-8 rounded-full bg-indigo-900 flex items-center justify-center mr-3 group-hover:bg-cyan-500 transition-all duration-300">
                <LocationIcon className="w-4 h-4 text-cyan-300 group-hover:text-white" />
              </div>
              <span className="text-gray-400 group-hover:text-cyan-300 transition-all duration-300">
                Hyderabad, India
              </span>
            </div>
          </div>

          {/* Services */}
          <div className="animate-fadeIn" style={{ animationDelay: "100ms" }}>
            <h3 className="text-xl font-bold mb-6 relative inline-block after:absolute after:left-0 after:bottom-0 after:w-12 after:h-0.5 after:bg-gradient-to-r after:from-cyan-400 after:to-purple-500">
              Our Services
            </h3>
            <ul className="space-y-3">
              <li className="transform hover:translate-x-1 transition-transform duration-300 group">
                <div className="text-gray-400 hover:text-cyan-300 flex items-center">
                  <HomeIcon className="w-4 h-4 mr-3 text-cyan-400" />
                  <div>
                    <div className="font-medium">Home Tuitions</div>
                    <div className="text-sm text-gray-500">Personal tutoring at your doorstep</div>
                  </div>
                </div>
              </li>
              <li className="transform hover:translate-x-1 transition-transform duration-300 group">
                <div className="text-gray-400 hover:text-cyan-300 flex items-center">
                  <ComputerIcon className="w-4 h-4 mr-3 text-purple-400" />
                  <div>
                    <div className="font-medium">Online Tuitions</div>
                    <div className="text-sm text-gray-500">Live interactive sessions</div>
                  </div>
                </div>
              </li>
              <li className="transform hover:translate-x-1 transition-transform duration-300 group">
                <div className="text-gray-400 hover:text-cyan-300 flex items-center">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3 opacity-75"></span>
                  All Boards (IB, Cambridge, ICSE, IGCSE, CBSE, SSC)
                </div>
              </li>
              <li className="transform hover:translate-x-1 transition-transform duration-300 group">
                <div className="text-gray-400 hover:text-cyan-300 flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 opacity-75"></span>
                  Class PP1 to 12
                </div>
              </li>
              <li className="transform hover:translate-x-1 transition-transform duration-300 group">
                <div className="text-gray-400 hover:text-cyan-300 flex items-center">
                  <span className="w-2 h-2 bg-pink-400 rounded-full mr-3 opacity-75"></span>
                  All Subjects Available
                </div>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="animate-fadeIn" style={{ animationDelay: "200ms" }}>
            <h3 className="text-xl font-bold mb-6 relative inline-block after:absolute after:left-0 after:bottom-0 after:w-12 after:h-0.5 after:bg-gradient-to-r after:from-cyan-400 after:to-purple-500">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'Services', path: '/services' },
                { name: 'About Us', path: '/about' },
                // { name: 'Tutors', path: '/tutors' },
                { name: 'Contact', path: '/contact' },
                { name: 'FAQ', path: '/faq' }
              ].map((link, index) => (
                <li key={index} className="transform hover:translate-x-1 transition-transform duration-300 group">
                  <a 
                    href={link.path} 
                    className="text-gray-400 hover:text-cyan-300 hover:underline flex items-center"
                  >
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div className="animate-fadeIn" style={{ animationDelay: "300ms" }}>
            <h3 className="text-xl font-bold mb-6 relative inline-block after:absolute after:left-0 after:bottom-0 after:w-12 after:h-0.5 after:bg-gradient-to-r after:from-cyan-400 after:to-purple-500">
              Stay Connected
            </h3>
            <p className="text-gray-400 mb-4">
              Subscribe for updates on new tutors and educational tips.
            </p>
            <div onSubmit={handleSubscribe} className="relative mb-6">
              <input 
                type="email" 
                placeholder="Your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-indigo-900 border border-indigo-700 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                required
              />
              <button 
                onClick={handleSubscribe}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-medium px-4 py-1 rounded-lg transition-all duration-300"
              >
                Join
              </button>
            </div>
            
            {subscribed && (
              <div className="mt-3 p-3 bg-green-900/30 border border-green-500/50 rounded-lg text-green-300 text-sm mb-6">
                Thank you for subscribing!
              </div>
            )}
            
            <div>
              <h4 className="text-gray-300 mb-3">Follow Us</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://www.facebook.com/profile.php?id=61577265298425" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-indigo-900 flex items-center justify-center hover:bg-blue-600 transition-all duration-300 group hover:scale-110"
                >
                  <FacebookIcon className="text-gray-400 group-hover:text-white transition-colors duration-300" />
                </a>
                <a 
                  href="https://www.instagram.com/accounts/onetap/?next=%2F" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-indigo-900 flex items-center justify-center hover:bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 transition-all duration-300 group hover:scale-110"
                >
                  <InstagramIcon className="text-gray-400 group-hover:text-white transition-colors duration-300" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/brain-breeze-tutors-65800736b/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-indigo-900 flex items-center justify-center hover:bg-blue-700 transition-all duration-300 group hover:scale-110"
                >
                  <LinkedInIcon className="text-gray-400 group-hover:text-white transition-colors duration-300" />
                </a>
                <a
                  href="https://www.youtube.com/@BrainBreezeTutors"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-indigo-900 flex items-center justify-center hover:bg-red-600 transition-all duration-300 group hover:scale-110"
                >
                  <YouTubeIcon className="text-gray-400 group-hover:text-white transition-colors duration-300 w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-indigo-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Brain Breeze Tutors. All rights reserved.
            </div>
            <div className="text-gray-400 text-sm">
              Crafted with ❤️ by <span className="text-cyan-300 font-medium">Meeravali Shaik</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave animation at the top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <svg 
          className="relative block w-full h-12" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path 
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
            className="fill-current text-indigo-950"
          ></path>
        </svg>
      </div>
      
      {/* Floating elements */}
      <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-cyan-500/10 blur-3xl"></div>
      <div className="absolute -bottom-40 left-1/4 w-48 h-48 rounded-full bg-purple-500/10 blur-3xl"></div>
    </footer>
  );
};

export default Footer;