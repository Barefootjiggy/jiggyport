import { Box } from '@mui/material';
import ProjectCard from '../CvProjects/ProjectCard'; // Adjust path if needed

function TechProjects() {
  const projects = [
    {
      title: 'Cohorty',
      github: 'https://github.com/Barefootjiggy/cohorty-frontend/tree/dev',
      url: 'https://cohorty.webdevstuff.ninja/',
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
      url: 'https://dutch.webdevstuff.ninja/',
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
      url: 'https://wod4u.netlify.app/',
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
      url: 'https://connect-4-hazel.vercel.app/',
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
        <ProjectCard key={i} project={project} showGithub={true} showURL={true} />
      ))}
    </Box>
  );
}

export default TechProjects;
