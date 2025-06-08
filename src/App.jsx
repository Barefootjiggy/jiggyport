import { lazy, Suspense, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Loader from './components/Loader/Loader'
import BackgroundCycler from './components/BackgroundCycler/BackgroundCycler';

const HomePage = lazy(() => import('./pages/Homepage/Homepage'));
const Resume = lazy(() => import('./pages/Resume/Resume'));

function App() {
  const [bgImage, setBgImage] = useState('/deepsky.webp');

  const handleToggleBackground = () => {
    setBgImage(prev => prev === '/deepsky.webp' ? '/mountainsky.webp' : '/deepsky.webp');
  };

  return (
    <Router>
      <BackgroundCycler bgImage={bgImage} />
      <NavBar onToggleBackground={handleToggleBackground} />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage bgImage={bgImage} />} />
          <Route path="/resume" element={<Resume bgImage={bgImage} />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default App;
