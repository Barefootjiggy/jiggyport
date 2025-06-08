import { lazy, Suspense } from 'react';
import { Box, Typography } from '@mui/material';
import { useSpring, animated } from 'react-spring';
import Loader from '../../components/Loader/Loader'
const AboutMe = lazy(() => import('../../components/Cv/AboutMe'));
const ClientProjects = lazy(() => import('../../components/Cv/ClientProjects'));
const TechProjects = lazy(() => import('../../components/Cv/TechProjects'));
const Experience = lazy(() => import('../../components/Cv/Experience'));
const Education = lazy(() => import('../../components/Cv/Education'));

const AnimatedHeading = ({ children, variant = 'h5', color }) => {
  const fade = useSpring({ from: { opacity: 0 }, to: { opacity: 1 }, config: { duration: 1000 } });
  return (
    <animated.div style={fade}>
      <Typography variant={variant} align="center" gutterBottom style={{ color }}>{children}</Typography>
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
        <AnimatedHeading color={headingColor}>CLIENT PROJECTS</AnimatedHeading>
        <ClientProjects bgImage={bgImage} />
        <AnimatedHeading color={headingColor}>TECH PROJECTS</AnimatedHeading>
        <TechProjects bgImage={bgImage} />
        <AnimatedHeading color={headingColor}>EXPERIENCE</AnimatedHeading>
        <Experience bgImage={bgImage} />
        <AnimatedHeading color={headingColor}>EDUCATION</AnimatedHeading>
        <Education bgImage={bgImage} />
      </Suspense>
    </Box>
  );
}

export default Resume;
