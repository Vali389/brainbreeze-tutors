import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import Services from "./pages/Services";
// import About from "./pages/About";
// import FAQs from "./pages/FAQs";
// import Testimonials from "./pages/Testimonials";
// import TeacherRegistration from "./pages/TeacherRegistration";
// import Contact from "./pages/Contact";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import Register from "./pages/Register"

import Homepage from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BrainBreezeRegistration from "./pages/Register";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Tutors from "./pages/Tutors";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<FAQ />} />
       
        <Route path="/register" element={<BrainBreezeRegistration />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/tutors" element={<Tutors />} /> */}
      </Routes>
      <Footer />
      {/* <ScrollToTopButton /> */}
    </Router>
  );
}

export default App;
