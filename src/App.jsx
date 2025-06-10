import { lazy, Suspense, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Loader from './components/Loader/Loader'
import BackgroundCycler from './components/BackgroundCycler/BackgroundCycler';

const HomePage = lazy(() => import('./pages/Homepage/Homepage'));
const Resume = lazy(() => import('./pages/Resume/Resume'));
const Footer = lazy(() => import('./components/Footer/Footer'));


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
          <Route path="/" element={
    <Suspense fallback={<Loader />}>
      <HomePage bgImage={bgImage} />
    </Suspense>
    } />
    <Route path="/resume" element={
    <Suspense fallback={<Loader />}>
      <Resume bgImage={bgImage} />
    </Suspense>
    } />
        </Routes>
      </Suspense>
      <Suspense fallback={<Loader />}>
      <Footer />
      </Suspense>
    </Router>
  );
}

export default App;
