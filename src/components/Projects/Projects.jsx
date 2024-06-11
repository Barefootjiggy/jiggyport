import { Button, Grid, Paper, Typography, Box } from '@mui/material';
import Connect4Image from '../../assets/Classic-Connect4-Mobile2.png';
import WOD4UImage from '../../assets/WOD4U-Mobile.png'
import DutchImage from '../../assets/Dutch-Mobile.png'
import CohortyImage from '../../assets/Cohorty-Desktop.png'


// Example project data
const projectsData = [
  { id: 1, title: "Connect 4", description: "Connect Four is a classic two-player connection game in which players choose a color and then take turns dropping colored discs into a grid. The objective is to be the first to form a horizontal, vertical, or diagonal line of four discs of your color. Players will be able to click through different themes that each have their own uniqueness to them.", url: "https://connect-4-hazel.vercel.app/", imageUrl: Connect4Image  },
  { id: 2, title: "WOD4U", description: "WOD4U is an app where users can get workouts of the day given to them as we all the ability to create, update, and delete their own workouts. Workouts that are created by users will be added to the preset database of workouts that the app comes with and users can only create workouts using the movements already listed in the 30 preset workouts the app comes with.", url: "https://wod4u.netlify.app/homepage.html", imageUrl: WOD4UImage },
  { id: 3, title: "Dutch", description: "Dutch is an app designed to simplify the management of shared expenses across diverse scenarios. Each of these we call a 'Divvy'. Whether organizing social events, managing household expenses, or coordinating group activities that involve shared costs, Dutch helps ensure that financial contributions are recorded, tracked, and balanced fairly and efficiently.", url: "https://frontend-dutch-by-wahgee.vercel.app/" , imageUrl: DutchImage },
  { id: 4, title: "Cohorty", description: "Cohorty is a modern web application designed to facilitate the tracking of courses, students, and assignments for General Assembly. This app streamlines administrative tasks, enhances staff and administrator visibility, and provides a centralized platform for managing academic data. By centralizing these processes, we aim to improve the efficiency of administrative operations and provide staff with a user-friendly interface to track student progress.", url: "https://cohorty-frontend.vercel.app/", imageUrl: CohortyImage },
];

function Projects() {
  return (
    <Grid container spacing={2}>
      {projectsData.map(project => (
        <Grid item xs={12} key={project.id}>
          <Paper elevation={3} style={{ padding: '20px', margin: '10px' }}>
            <Typography variant="h5">{project.title}</Typography>
            <img src={project.imageUrl} alt={project.title} style={{ maxWidth: '100%', height: 'auto', marginBottom: '10px' }} />

            <Typography>{project.description}</Typography>
            <Box display="flex" justifyContent="center" mt={2}>  {/* Added for centering the button */}
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

