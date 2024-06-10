import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Homepage/Homepage';
import Contact from './pages/Contact/Contact';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

function App() {
  return (
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
  );
}

export default App;
