import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Homepage/Homepage';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Resume from './pages/Resume/Resume';

function App() {
  return (
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        <Footer />
      </Router>
  );
}

export default App;
