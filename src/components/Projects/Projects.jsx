import { Suspense, lazy, useState, useEffect } from 'react';
import { Typography, Container, useMediaQuery, useTheme } from '@mui/material';
import { useSpring, animated } from '@react-spring/web';
import { makeStyles } from '@mui/styles';
import { styled } from '@mui/system';

import Loader from '../Loader/Loader';
import { clientProjectsData, projectsData } from '../../Data/Projects'; 

const ClientProjectGrid = lazy(() => import('./ClientProjectGrid'));
const TechProjectGrid = lazy(() => import('./TechProjectGrid'));

const useStyles = makeStyles((theme) => ({
  sectionTitle: {
    margin: '20px 0',
    color: theme.palette.primary.main,
  },
  button: {
    padding: '10px 20px',
    margin: '10px',
    borderRadius: '5px',
    boxShadow: '0px 4px 10px rgba(171, 89, 139, 1)',
  },
}));

const FlickerText = styled(animated(Typography))({
  textAlign: 'center',
  marginBottom: '20px',
});

export default function Projects({ bgImage }) {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [slideshowStates, setSlideshowStates] = useState({});
  const [pausedStates] = useState({});
  const [slideshowStarted, setSlideshowStarted] = useState(false);

  const startSlideshow = (projectId) => {
    setSlideshowStates((prev) => ({
      ...prev,
      [projectId]: { showNewVersion: true, imageIndex: 0 }
    }));
    setSlideshowStarted(true);
  };

  const stopSlideshow = (projectId) => {
    setSlideshowStates((prev) => ({
      ...prev,
      [projectId]: { showNewVersion: false, imageIndex: 0 }
    }));
    setSlideshowStarted(false);
  };

  const incrementImageIndex = (projectId, length) => {
    setSlideshowStates((prev) => {
      const currentIndex = prev[projectId]?.imageIndex || 0;
      return {
        ...prev,
        [projectId]: {
          ...prev[projectId],
          imageIndex: (currentIndex + 1) % length
        }
      };
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      clientProjectsData.forEach(project => {
        if (
          slideshowStates[project.id]?.showNewVersion &&
          !pausedStates[project.id]
        ) {
          incrementImageIndex(project.id, project.afterImages.length);
        }
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [slideshowStates, pausedStates]);

  const smoothTransitionPropsClient = useSpring({
    from: { color: '#ffffff' },
    to: async (next) => {
      while (true) {
        await next({ color: '#ab598b' });
        await next({ color: '#f1b4bb' });
      }
    },
    config: { duration: 2000 },
  });

  const smoothTransitionPropsTech = useSpring({
    from: { color: '#ffffff' },
    to: async (next) => {
      while (true) {
        await next({ color: '#ab598b' });
        await next({ color: '#f1b4bb' });
      }
    },
    config: { duration: 2000 },
  });

  return (
    <Container>
      <FlickerText
        variant={isMobile ? "h4" : "h2"}
        className={classes.sectionTitle}
        style={{ ...smoothTransitionPropsClient }}
      >
        CLIENT PROJECTS
      </FlickerText>

      <Suspense fallback={<Loader />}>
        <ClientProjectGrid
          data={clientProjectsData}
          bgImage={bgImage}
          slideshowStates={slideshowStates}
          pausedStates={pausedStates}
          slideshowStarted={slideshowStarted}
          startSlideshow={startSlideshow}
          stopSlideshow={stopSlideshow}
        />
      </Suspense>

      <FlickerText
        variant={isMobile ? "h4" : "h2"}
        className={classes.sectionTitle}
        style={{ ...smoothTransitionPropsTech }}
      >
        TECH PROJECTS
      </FlickerText>

      <Suspense fallback={<Loader />}>
        <TechProjectGrid
          data={projectsData}
          bgImage={bgImage}
        />
      </Suspense>
    </Container>
  );
}
