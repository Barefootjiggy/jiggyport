import { Button, Grid, Paper, Typography, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Connect4Image from '../../assets/Classic-Connect4-Mobile2.png';
import WOD4UImage from '../../assets/WOD4U-Mobile.png';
import DutchImage from '../../assets/Dutch-Mobile.png';
import CohortyImage from '../../assets/Cohorty-Desktop.png';

// Example project data
const projectsData = [
  { id: 1, title: "Connect 4", description: "Connect Four is a classic two-player connection game in which players choose a color and then take turns dropping colored discs into a grid. The objective is to be the first to form a horizontal, vertical, or diagonal line of four discs of your color. In this version, players are able to click anywhere and it comes down to which way they decide to play. No matter what, first person to get 4 in a row horizontally, vertically, or diagonally will be the winner. Players will be able to click through different themes that each have their own uniqueness to them.", url: "https://connect-4-hazel.vercel.app/", imageUrl: Connect4Image  },
  { id: 2, title: "WOD4U", description: "WOD4U is an app where users can get workouts of the day given to them as well as the ability to create, update, and delete their own workouts. Users also have the ability to comment on workouts and share their expereince or encouragement to user that posted the workout. Workouts that are created by users will be added to the preset database of workouts that the app comes with.", url: "https://wod4u.netlify.app/", imageUrl: WOD4UImage },
  { id: 3, title: "Dutch(Under Construction)  ", description: "Dutch is an app designed to simplify the management of shared expenses across diverse scenarios. Each of these we call a 'Divvy'. Whether organizing social events, managing household expenses, or coordinating group activities that involve shared costs, Dutch helps ensure that financial contributions are recorded, tracked, and balanced fairly and efficiently. Currently working on getting the app into the app store using React Native, a version where users can log in to come. Here's the demo login for now Email: aris@demo.dutch Password: Demo!23. ", url: "https://frontend-dutch-by-wahgee.vercel.app/" , imageUrl: DutchImage },
  { id: 4, title: "Cohorty", description: "Cohorty is a modern web application designed to facilitate the tracking of courses, students, and assignments for General Assembly. This app streamlines administrative tasks, enhances staff and administrator visibility, and provides a centralized platform for managing academic data. By centralizing these processes, we aim to improve the efficiency of administrative operations and provide staff with a user-friendly interface to track student progress. Email Address: emre Password: doer6flatbed!RUMOR", url: "https://cohorty-frontend.vercel.app/", imageUrl: CohortyImage },
];

const useStyles = makeStyles((theme) => ({
  projectImage: {
    maxWidth: '100%',
    height: '300px',
    marginBottom: '10px',
    [theme.breakpoints.up('sm')]: {
      maxWidth: '50%',
    },
  },
  projectTitle: {
    color: theme.palette.primary.main,
  },
  projectDescription: {
    color: theme.palette.primary.main,
  },
  projectPaper: {
    padding: '20px',
    margin: '10px',
  },
}));

function Projects() {
  const classes = useStyles();

  return (
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
              >
                Deployed App
              </Button>
            </Box>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}

export default Projects;
