import { Box, Typography, Paper } from '@mui/material';

function ClientProjects() {
  const textColor = '#000';

  const projects = [
    {
      title: 'MBTRT',
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
        <Box key={i} mb={3}>
          <Paper elevation={3}>
            <Box p={3}>
              <Typography variant="h6" sx={{ color: '#ab598b' }}>
                {project.title} - <a href={project.url} target="_blank" rel="noopener noreferrer"
                >App</a>
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

export default ClientProjects;
