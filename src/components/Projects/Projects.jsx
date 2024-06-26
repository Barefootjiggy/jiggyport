import { Button, Grid, Paper, Typography, Box, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Connect4Image from '../../assets/Classic-Connect4-Mobile2.png';
import WOD4UImage from '../../assets/WOD4U-Mobile.png';
import DutchImage from '../../assets/Dutch-Mobile.png';
import CohortyImage from '../../assets/Cohorty-Desktop.png';
import AjImage from '../../assets/trainwithamandajane.png';

const clientProjectsData = [
  { id: 1, title: "Trainwithamandajane", description: "Train with Amanda Jane is a personalized fitness training website that offers a variety of workout plans, nutritional advice, and one-on-one coaching sessions to help clients achieve their fitness goals.", url: "https://trainwithamandajane.com/", githubUrl: "", imageUrl: AjImage },
];

const projectsData = [
  { id: 2, title: "Cohorty", description: "Cohorty is a modern web application designed to facilitate the tracking of courses, students, and assignments for General Assembly. This app streamlines administrative tasks, enhances staff and administrator visibility, and provides a centralized platform for managing academic data. By centralizing these processes, we aim to improve the efficiency of administrative operations and provide staff with a user-friendly interface to track student progress. Email Address: emre Password: doer6flatbed!RUMOR", url: "https://cohorty-frontend.vercel.app/", githubUrl: "https://github.com/Barefootjiggy/cohorty-frontend/tree/dev", imageUrl: CohortyImage },
  { id: 3, title: "Dutch", description: "Dutch is an app designed to simplify the management of shared expenses across diverse scenarios. Each of these we call a 'Divvy'. Whether organizing social events, managing household expenses, or coordinating group activities that involve shared costs, Dutch helps ensure that financial contributions are recorded, tracked, and balanced fairly and efficiently. Here's a demo login, Email: aris@demo.dutch Password: Demo!23. ", url: "https://frontend-dutch-by-wahgee.vercel.app/" , githubUrl: "https://github.com/Barefootjiggy/Dutch-Frontend", imageUrl: DutchImage },
  { id: 4, title: "WOD4U", description: "WOD4U is an app where users can get workouts of the day given to them as well as the ability to create, update, and delete their own workouts. Users also have the ability to comment on workouts and share their expereince or encouragement to user that posted the workout. Workouts that are created by users will be added to the preset database of workouts that the app comes with.", url: "https://wod4u.netlify.app/", githubUrl: "https://github.com/Barefootjiggy/WOD4U-frontend", imageUrl: WOD4UImage },
  { id: 5, title: "Connect 4", description: "Connect Four is a classic two-player connection game in which players choose a color and then take turns dropping colored discs into a grid. The objective is to be the first to form a horizontal, vertical, or diagonal line of four discs of your color. In this version, players are able to click anywhere and it comes down to which way they decide to play. No matter what, first person to get 4 in a row horizontally, vertically, or diagonally will be the winner. Players will be able to click through different themes that each have their own uniqueness to them.", url: "https://connect-4-hazel.vercel.app/", githubUrl: "https://github.com/Barefootjiggy/Connect-4", imageUrl: Connect4Image },
];

const useStyles = makeStyles((theme) => ({
  projectImage: {
    maxWidth: '100%',
    height: '300px',
    objectFit: 'contain',
    marginBottom: '10px',
    [theme.breakpoints.up('sm')]: {
      maxWidth: '50%',
    },
  },
  projectTitle: {
    color: theme.palette.primary.main,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  projectDescription: {
    color: theme.palette.primary.main,
  },
  projectPaper: {
    padding: '20px',
    margin: '10px',
  },
  sectionTitle: {
    margin: '20px 0',
    color: theme.palette.primary.main,
  },
  clientSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

function Projects() {
  const classes = useStyles();

  return (
    <Container>
      <Typography variant="h2" className={classes.sectionTitle} style={{ textAlign: 'center' }}>CLIENT PROJECTS</Typography>
      <Grid container spacing={2} className={classes.clientSection}>
        {clientProjectsData.map(project => (
          <Grid item xs={12} key={project.id}>
            <Paper elevation={3} className={classes.projectPaper}>
              <Typography variant="h3" className={classes.projectTitle}>{project.title}</Typography>
              <img src={project.imageUrl} alt={project.title} className={classes.projectImage} />
              <Typography className={classes.projectDescription}>{project.description}</Typography>
              <Box display="flex" justifyContent="center" mt={2}>
                <Button
                  variant="contained"
                  onClick={() => window.open(project.url, '_blank')}
                  style={{ marginRight: '10px' }}
                >
                  Deployed App
                </Button>
                {project.githubUrl && (
                  <Button
                    variant="contained"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    GitHub Link
                  </Button>
                )}
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
      <Typography variant="h2" className={classes.sectionTitle}>TECH PROJECTS</Typography>
      <Grid container spacing={2}>
        {projectsData.map(project => (
          <Grid item xs={12} key={project.id}>
            <Paper elevation={3} className={classes.projectPaper}>
              <Typography variant="h3" className={classes.projectTitle}>{project.title}</Typography>
              <img src={project.imageUrl} alt={project.title} className={classes.projectImage} />
              <Typography className={classes.projectDescription}>{project.description}</Typography>
              <Box display="flex" justifyContent="center" mt={2}>
                <Button
                  variant="contained"
                  onClick={() => window.open(project.url, '_blank')}
                  style={{ marginRight: '10px' }}
                >
                  Deployed App
                </Button>
                <Button
                  variant="contained"
                  onClick={() => window.open(project.githubUrl, '_blank')}
                >
                  GitHub Link
                </Button>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Projects;
