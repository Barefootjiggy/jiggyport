import { useState, useEffect, useRef } from 'react';
import { Button, Grid, Card, CardActions, CardContent, CardMedia, Typography, Box, Container, useMediaQuery, useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useSpring, animated } from 'react-spring';
import { styled } from '@mui/system';

import Connect4Image from '../../assets/Classic-Connect4-Mobile2.png';
import WOD4UImage from '../../assets/WOD4U-Mobile.png';
import DutchImage from '../../assets/Dutch-Mobile.png';
import CohortyImage from '../../assets/Cohorty-Desktop.png';

import TAJbefore from '../../assets/TAJbefore.png';
import TAJafter from '../../assets/TAJafter.png';
import TAJafter2 from '../../assets/TAJafter2.png';
import TAJafter3 from '../../assets/TAJafter3.png';
import TAJafter4 from '../../assets/TAJafter4.png';
import TAJafter5 from '../../assets/TAJafter5.png';
import MBTRTmockdash from '../../assets/MBTRTmockdash.png';
import MBTRTlanding from '../../assets/MBTRTlanding.png';
import MBTRTclientfeedbacks from '../../assets/MBTRTclientfeedbacks.png';

const clientProjectsData = [
  {
    id: 1,
    title: "Trainwithamandajane",
    description: "'Trainwithamandajane' is a personal training website originally built with WordPress. The initial version was limited in customization and visual appeal, relying heavily on static templates and plugins. For the updated version, I collaborated with the client to rebuild the entire site from scratch using React and Materialize. The new site is fully responsive, visually cleaner, faster-loading, and designed to better reflect her brand. It includes smooth animations, improved mobile usability, and a more modern, engaging user experience that sets it apart from the original.",
    beforeImageUrl: TAJbefore,
    afterImages: [TAJafter, TAJafter2, TAJafter3, TAJafter4, TAJafter5],
    url: "https://trainwithamandajane.com/",
    deployedUrl: "https://trainwithamandajane.com/",
    githubUrl: "https://github.com/Barefootjiggy/TAJ-F",
  },
  {
    id: 6,
    title: "MBTRT",
    description: "MBT Response Tool is a web application designed to help fitness coaches on the MyBodyTutor platform streamline their client feedback process. The app scrapes submitted client logs using Selenium, parses them into labeled sections (e.g., meals, workouts, mindset, and goals), and uses the OpenAI API to generate personalized, empathetic responses for each section. Coaches can selectively regenerate AI responses, toggle between models (GPT-3.5 and GPT-4), and view client feedback in a clean, organized layout. The app includes a demo mode with mock client data to showcase its core features without needing a real login.",
    beforeImageUrl: MBTRTlanding,
    afterImages: [MBTRTmockdash, MBTRTclientfeedbacks],
    url: "https://mbtrt-c6f69d488d00.herokuapp.com",
    deployedUrl: "https://mbtrt-c6f69d488d00.herokuapp.com",
    githubUrl: "https://github.com/Barefootjiggy/MBTRT",
  }
];

const projectsData = [
  {
    id: 2,
    title: "Cohorty",
    description: "Cohorty is a modern web application designed to facilitate the tracking of courses, students, and assignments for General Assembly. This app streamlines administrative tasks, enhances staff and administrator visibility, and provides a centralized platform for managing academic data. Email Address: emre Password: doer6flatbed!RUMOR",
    url: "https://cohorty.webdevstuff.ninja/",
    githubUrl: "https://github.com/Barefootjiggy/cohorty-frontend/tree/dev",
    imageUrl: CohortyImage,
  },
  {
    id: 3,
    title: "Dutch",
    description: "Dutch is an app designed to simplify the management of shared expenses across diverse scenarios. Each of these we call a 'Divvy'. Whether organizing social events, managing household expenses, or coordinating group activities that involve shared costs, Dutch helps ensure that financial contributions are recorded, tracked, and balanced fairly and efficiently. Here's a demo login, Email: aris@demo.dutch Password: Demo!23.",
    url: "https://dutch.webdevstuff.ninja/",
    githubUrl: "https://github.com/Barefootjiggy/Dutch-Frontend",
    imageUrl: DutchImage,
  },
  {
    id: 4,
    title: "WOD4U",
    description: "WOD4U is an app where users can get workouts of the day given to them as well as the ability to create, update, and delete their own workouts. Users also have the ability to comment on workouts and share their experience or encouragement to users that posted the workout. Workouts that are created by users will be added to the preset database of workouts that the app comes with.",
    url: "https://wod4u.netlify.app/",
    githubUrl: "https://github.com/Barefootjiggy/WOD4U-frontend",
    imageUrl: WOD4UImage,
  },
  {
    id: 5,
    title: "Connect 4",
    description: "Connect Four is a classic two-player connection game in which players choose a color and then take turns dropping colored discs into a grid. The objective is to be the first to form a horizontal, vertical, or diagonal line of four discs of your color.",
    url: "https://connect-4-hazel.vercel.app/",
    githubUrl: "https://github.com/Barefootjiggy/Connect-4",
    imageUrl: Connect4Image,
  },
];

const useStyles = makeStyles((theme) => ({
  projectTitle: {
    color: theme.palette.primary.main,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
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
  const [pausedStates, setPausedStates] = useState({});
  const lastTouchTimeRef = useRef(0);
  const [slideshowStarted, setSlideshowStarted] = useState(false);

  const startSlideshow = (projectId) => {
    setSlideshowStates((prev) => ({
      ...prev,
      [projectId]: { showNewVersion: true, imageIndex: 0 }
    }));
  };

  const stopSlideshow = (projectId) => {
    setSlideshowStates((prev) => ({
      ...prev,
      [projectId]: { showNewVersion: false, imageIndex: 0 }
    }));
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
        await next({ color: '#ffffff' });
      }
    },
    config: { duration: 2000, easing: t => t * t * (3 - 2 * t) },
  });

  const smoothTransitionPropsTech = useSpring({
    from: { color: '#ffffff' },
    to: async (next) => {
      while (true) {
        await next({ color: '#ab598b' });
        await next({ color: '#ffffff' });
      }
    },
    config: { duration: 2000, easing: t => t * t * (3 - 2 * t) },
  });

return (
    <Container>
      <FlickerText variant={isMobile ? "h4" : "h2"} className={classes.sectionTitle} style={{ textAlign: 'center', margin: '20px', ...smoothTransitionPropsClient }}>
        CLIENT PROJECTS
      </FlickerText>

      <Grid container spacing={2} justifyContent="center">
        {clientProjectsData.map((project) => {
          const current = slideshowStates[project.id] || {};
          const currentIndex = current.imageIndex || 0;

          return (
            <Grid item xs={12} sm={6} md={4} key={project.id}>
              <Card style={{ backgroundColor: bgImage === '/mountainsky.jpg' ? '#000000' : 'transparent', boxShadow: bgImage === '/mountainsky.jpg' ? '0px 4px 15px 5px rgba(171, 89, 139, 1)' : '0px 4px 15px 5px rgba(255, 255, 255, 1)' }}>
                <Box p={2}>
                  <a href={project.url} target="_blank" rel="noopener noreferrer">
                    <CardMedia
                      component="img"
                      alt={project.title}
                      image={current.showNewVersion ? project.afterImages[currentIndex] : project.beforeImageUrl}
                      title={project.title}
                      onMouseEnter={() => {
                        if (slideshowStarted) {
                          setPausedStates(prev => ({ ...prev, [project.id]: true }));
                        }
                      }}
                      onMouseLeave={() => {
                        if (slideshowStarted) {
                          setPausedStates(prev => ({ ...prev, [project.id]: false }));
                        }
                      }}
                      onTouchStart={(e) => {
                        if (!slideshowStarted) return;
                        e.stopPropagation();
                        const now = Date.now();
                        if (now - lastTouchTimeRef.current < 500) {
                          setPausedStates(prev => ({ ...prev, [project.id]: false }));
                        } else {
                          setPausedStates(prev => ({ ...prev, [project.id]: true }));
                        }
                        lastTouchTimeRef.current = now;
                      }}
                    
                      style={{ objectFit: 'contain', maxHeight: '300px', marginTop: '50px' }}
                    />
                  </a>

                  {pausedStates[project.id] && slideshowStarted && (
                    <Typography
                      variant="caption"
                      align="center"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '6px',
                        color: '#fff',
                        backgroundColor: '#ab598b',
                        padding: '6px 12px',
                        borderRadius: '4px',
                        marginTop: '8px',
                        animation: 'fadeOut 3s ease-out forwards',
                        maxWidth: '80%',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                      }}
                    >
                      <span role="img" aria-label="paused">⏸️</span>
                      {isMobile
                        ? "Slideshow paused — tap here to resume"
                        : "Slideshow paused — remove cursor to resume"}
                    </Typography>
                  )}

                  {!current.showNewVersion && (
                    <Box display="flex" justifyContent="center" mt={2}>
                      <Button
                        variant="contained"
                        color="secondary"
                        onClick={(e) => {
                          e.stopPropagation();
                          startSlideshow(project.id);
                          setSlideshowStarted(true);
                        }}
                        style={{ backgroundColor: '#ab598b', color: '#fff' }}
                      >
                        {project.id === 6 ? 'Click for Slideshow' : 'Click to View After'}
                      </Button>
                    </Box>
                  )}

                  {current.showNewVersion && project.id !== 6 && (
                    <Box display="flex" flexDirection="column" alignItems="center" mt={2}>
                      <Typography align="center" style={{ color: '#ab598b', marginBottom: '10px' }}>
                        After: Custom Build (Slide {currentIndex + 1}/{project.afterImages.length})
                      </Typography>
                      <Button
                        variant="contained"
                        color="secondary"
                        onClick={(e) => {
                          e.stopPropagation();
                          stopSlideshow(project.id);
                          setSlideshowStarted(false);
                          setIsPaused(false);
                          setShowPausedMessage(false);
                        }}
                        style={{ backgroundColor: '#ab598b', color: '#fff' }}
                      >
                        Back to WordPress Version
                      </Button>
                    </Box>
                  )}
                </Box>

                <CardContent>
                  <Typography gutterBottom variant={isMobile ? "h5" : "h2"} component={isMobile ? "h3" : "h2"} style={{ color: '#ab598b', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {project.title}
                  </Typography>
                  <Typography variant={isMobile ? "body1" : "body1"} component="p" style={{ color: bgImage === '/mountainsky.jpg' ? '#ffffff' : '#ffffff' }}>
                    {project.description}
                  </Typography>
                </CardContent>

                <CardActions style={{ justifyContent: 'center' }}>
                  <Button className={classes.button} href={project.deployedUrl} target="_blank">
                    Deployed App
                  </Button>
                  <Button className={classes.button} href={project.githubUrl} target="_blank">
                    GitHub Link
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>

      <FlickerText variant={isMobile ? "h4" : "h2"} className={classes.sectionTitle} style={{ textAlign: 'center', margin: '20px', ...smoothTransitionPropsTech }}>
        TECH PROJECTS
      </FlickerText>

      <Grid container spacing={2} justifyContent="center">
        {projectsData.map((project) => (
          <Grid item xs={12} sm={6} md={4} key={project.id}>
            <Card style={{ backgroundColor: bgImage === '/mountainsky.jpg' ? '#000000' : 'transparent', boxShadow: bgImage === '/mountainsky.jpg' ? '0px 4px 15px 5px rgba(171, 89, 139, 1)' : '0px 4px 15px 5px rgba(255, 255, 255, 1)' }}>
              <Box p={2}>
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  <CardMedia
                    component="img"
                    alt={project.title}
                    image={project.imageUrl}
                    title={project.title}
                    style={{ objectFit: 'contain', maxHeight: '300px', marginTop: '50px' }}
                  />
                </a>
              </Box>
              <CardContent>
                <Typography gutterBottom variant={isMobile ? "h5" : "h2"} component={isMobile ? "h3" : "h2"} style={{ color: '#ab598b', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {project.title}
                </Typography>
                <Typography variant={isMobile ? "body1" : "body1"} component="p" style={{ color: bgImage === '/mountainsky.jpg' ? '#ffffff' : '#ffffff' }}>
                  {project.description}
                </Typography>
              </CardContent>
              <CardActions style={{ justifyContent: 'center' }}>
                <Button className={classes.button} href={project.url} target="_blank">
                  Deployed App
                </Button>
                <Button className={classes.button} href={project.githubUrl} target="_blank">
                  GitHub Link
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
