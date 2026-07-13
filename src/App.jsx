import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  WhyWorkWithMe,
  Certifications,
  Footer,
  SocialConnectShowcase
} from './components';

const HomeLayout = () => (
  <div className="relative z-0 bg-primary">
    {/* Hero with background pattern */}
    <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
      <Navbar />
      <Hero />
    </div>

    {/* Main content sections */}
    <About />
    <Experience />
    <Tech />
    <WhyWorkWithMe />
    <Works />
    <Certifications />

    {/* Contact + Stars background */}
    <div className="relative z-0">
      <Contact />
      <StarsCanvas />
    </div>

    {/* Footer */}
    <Footer />
  </div>
);

const App = () => {
  return (
    <BrowserRouter basename="/techportfolio/">
      <Routes>
        <Route path="/" element={<HomeLayout />} />
        <Route path="/project/socialconnect" element={<SocialConnectShowcase />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
