import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/Homepage/Homepage';
import AboutMe from './pages/AboutMe/AboutMe';
import Contact from './pages/Contact/Contact';
import Projects from './pages/Projects/Projects';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

function App() {
  return (
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Footer />
      </Router>
  );
}

export default App;
