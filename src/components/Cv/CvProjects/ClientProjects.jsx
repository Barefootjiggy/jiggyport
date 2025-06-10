import { Box } from '@mui/material';
import ProjectCard from '../CvProjects/ProjectCard';

function ClientProjects() {
  const projects = [
    {
      title: 'MBTRT',
      github: 'https://github.com/Barefootjiggy/MBTRT',
      url: 'https://mbtrt-c6f69d488d00.herokuapp.com',
      stack: 'Python | Flask, Selenium, OpenAI',
      description: [
        'MBTRT is a tool that automates responses to fitness client logs using GPT models and Selenium scraping.',
        'Built AI-driven workflow to parse logs into sections (meals, workouts, mindset, goals).',
        'Implemented Selenium to log in and scrape data from MyBodyTutor.',
        'Designed a dashboard with mock data mode for demo access.',
        'Enabled session-based login, dynamic routing, and secure credential handling.',
        'Supported real-time editing and regeneration of AI responses.',
      ],
    },
    {
      title: 'Trainwithamandajane',
      github: 'https://github.com/Barefootjiggy/TAJ-F',
      url: 'https://trainwithamandajane.com/',
      stack: 'WordPress → React Rebuild',
      description: [
        'Rebuilt original WordPress site as a React app using Materialize CSS.',
        'Created a modern, responsive design with faster load times.',
        'Reduced plugin reliance and improved SEO performance.',
        'Collaborated with the client to reflect her brand and optimize UX.',
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

export default ClientProjects;
