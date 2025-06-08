import { Box, Typography, Paper } from '@mui/material';

function TechProjects() {
  const textColor = '#000';

  const projects = [
    {
      title: 'Cohorty',
      github: 'https://github.com/Barefootjiggy/cohorty-frontend/tree/dev',
      app: 'https://cohorty.webdevstuff.ninja/',
      stack: 'JavaScript | React, MUI',
      description: [
        'Created a school tracking app with dynamic routing and reusable components.',
        'Handled auth, protected routes, and API integration with Axios.',
        'Built with MUI and React hooks for a seamless UI/UX.',
      ],
    },
    {
      title: 'Dutch',
      github: 'https://github.com/Barefootjiggy/Dutch-Frontend',
      app: 'https://dutch.webdevstuff.ninja/',
      stack: 'JavaScript | React, Radix UI',
      description: [
        'Bill-splitting app with a sleek interface using Radix UI.',
        'Handled shared expense logic, routing, and API communication.',
        'Collaborated in a team of 4 with full GitHub version control.',
      ],
    },
    {
      title: 'WOD4U',
      github: 'https://github.com/Barefootjiggy/WOD4U-frontend',
      app: 'https://wod4u.netlify.app/',
      stack: 'TypeScript | MongoDB, Node.js, Express',
      description: [
        'Full-stack fitness app with customizable workouts and secure auth.',
        'Back end built in Express and MongoDB with hashed passwords and token auth.',
        'Deployed to Heroku and Netlify with clean UI.',
      ],
    },
    {
      title: 'Connect 4',
      github: 'https://github.com/Barefootjiggy/Connect-4',
      app: 'https://connect-4-hazel.vercel.app/',
      stack: 'TypeScript | HTML, CSS',
      description: [
        'Themeable Connect 4 game with strong JS logic and visual design.',
        'Multiple board themes, dynamic turn handling, and animations.',
        'Fully deployed and mobile responsive.',
      ],
    },
  ];

  return (
    <Box mt={4} mb={4}>

      {projects.map((project, i) => (
        <Box key={i} mb={3}>
          <Paper elevation={3}>
            <Box p={3}>
              <Typography variant="h6" sx={{ color: '#ab598b' }}>
                {project.title} - 
                <a href={project.github} target="_blank" rel="noopener noreferrer"> GitHub</a> | 
                <a href={project.app} target="_blank" rel="noopener noreferrer"> App</a>
              </Typography>
              <Typography variant="body2" sx={{ color: textColor }}>{project.stack}</Typography>
              {project.description.map((line, j) => (
                <Typography key={j} variant="body1" sx={{ color: textColor }}>
                  {line}
                </Typography>
              ))}
            </Box>
          </Paper>
        </Box>
      ))}
    </Box>
  );
}

export default TechProjects;
