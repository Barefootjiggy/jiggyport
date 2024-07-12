import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Homepage/Homepage';
import Resume from './pages/Resume/Resume'
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import BackgroundCycler from './components/BackgroundCycler/BackgroundCycler'; 
import { useState } from 'react';

function App() {
  const [bgImage, setBgImage] = useState('/deepsky.jpg');

  const handleToggleBackground = () => {
    setBgImage(prevImage =>
      prevImage === '/deepsky.jpg' ? '/redorangesolarflare.jpg' : '/deepsky.jpg'
    );
  };

  return (
    <>
    <Router>
      <BackgroundCycler bgImage={bgImage} />
      <NavBar onToggleBackground={handleToggleBackground} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      <Footer />
    </Router>
    </>
  );
}

export default App;