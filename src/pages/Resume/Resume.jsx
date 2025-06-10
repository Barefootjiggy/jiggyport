import { lazy, Suspense } from 'react';
import { Box, Typography } from '@mui/material';
import { useSpring, animated } from '@react-spring/web';
import Loader from '../../components/Loader/Loader'
const AboutMe = lazy(() => import('../../components/Cv/AboutMe/AboutMe'));
const ClientProjects = lazy(() => import('../../components/Cv/CvProjects/ClientProjects'));
const TechProjects = lazy(() => import('../../components/Cv/CvProjects/TechProjects'));
const Experience = lazy(() => import('../../components/Cv/Experience/Experience'));
const Education = lazy(() => import('../../components/Cv/Education/Education'));

const AnimatedHeading = ({ children, variant = 'h5', component = 'h3', color }) => {
  const fade = useSpring({ from: { opacity: 0 }, to: { opacity: 1 }, config: { duration: 1000 } });
  return (
    <animated.div style={fade}>
      <Typography 
      variant={variant} 
      component={component}
      align="center" 
      gutterBottom 
      style={{ color }}
      >
      {children}
      </Typography>
    </animated.div>
  );
};

function Resume({ bgImage }) {
  const headingColor = bgImage === '/mountainsky.webp' ? '#000' : '#fff';

  return (
    <Box p={3} pt={10}>
  <AnimatedHeading variant="h4" color={headingColor}>More About Me</AnimatedHeading>

  <Suspense fallback={<Loader />}>
    <AboutMe bgImage={bgImage} />
  </Suspense>

  <AnimatedHeading color={headingColor}>CLIENT PROJECTS</AnimatedHeading>
  <Suspense fallback={<Loader />}>
    <ClientProjects bgImage={bgImage} />
  </Suspense>

  <AnimatedHeading color={headingColor}>TECH PROJECTS</AnimatedHeading>
  <Suspense fallback={<Loader />}>
    <TechProjects bgImage={bgImage} />
  </Suspense>

  <AnimatedHeading color={headingColor}>EXPERIENCE</AnimatedHeading>
  <Suspense fallback={<Loader />}>
    <Experience bgImage={bgImage} />
  </Suspense>

  <AnimatedHeading color={headingColor}>EDUCATION</AnimatedHeading>
  <Suspense fallback={<Loader />}>
    <Education bgImage={bgImage} />
  </Suspense>
</Box>
  );
}

export default Resume;
