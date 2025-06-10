import { Typography, Box, Paper } from '@mui/material';

function AboutMe({ bgImage }) {
  const textColor = bgImage === '/mountainsky.webp' ? '#000' : '#fff';

  return (
    <Box mb={4}>
      <Typography variant="h6"
      align="center" gutterBottom sx={{ color: textColor }}>
        Full Stack Developer
      </Typography>
      <Typography variant="body1" sx={{ color: textColor }}>
        I first explored coding in 2017, but it wasn’t until 2024 — feeling creatively stifled in my job — that I fully committed to it. I enrolled in General Assembly’s Software Engineering Immersive and, 12 weeks later, walked away with the tools and mindset to build full-stack applications from the ground up. Since then, I’ve rebuilt a personal training business website from a restrictive WordPress setup into a fully custom React app — improving performance, design, and usability. I also collaborate with clients to translate their vision into responsive, user-friendly experiences. Before tech, I spent over six years in healthcare and customer service, where I honed skills in communication, problem-solving, and handling sensitive information with care and compliance. Outside of coding, I’m passionate about fitness and enjoy activities that challenge my brain — like puzzles, board games, and poetry. I bring that same energy and curiosity to my work as a developer: thoughtful, strategic, and always learning.
      </Typography>
      <Typography variant="body2" sx={{ color: textColor, mt: 2 }}>
        Location: Brooklyn, NY | Contact: 570-540-6871 | Email: jpgiant@yahoo.com
      </Typography>
      <Box mt={4}>
  <Paper elevation={3}>
    <Box p={3}>
      <Typography variant="h6" sx={{ color: '#ab598b' }} gutterBottom>
        SKILLS SNAPSHOT
      </Typography>

      <Typography variant="body1" sx={{ color: '#000', mb: 1 }}>
        <strong>Languages:</strong> Python, JavaScript, TypeScript, HTML, CSS, SQL, JSON
      </Typography>

      <Typography variant="body1" sx={{ color: '#000', mb: 1 }}>
        <strong>Libraries, Frameworks and Databases:</strong> React, Express.js, Django, MongoDB, RESTful Routing, Flask, Mailchimp API, OpenAI API, Axios, BeautifulSoup, Selenium
      </Typography>

      <Typography variant="body1" sx={{ color: '#000', mb: 1 }}>
        <strong>Systems:</strong> Epic, Salesforce, Guiding Care, Facets
      </Typography>

      <Typography variant="body1" sx={{ color: '#000' }}>
        <strong>Projects:</strong> Project Scope, Third-Party API Integration, Vercel Deployment, Heroku Deployment, Postman, Git Workflow, Netlify Deployment
      </Typography>
    </Box>
  </Paper>
</Box>
</Box>
  );
}

export default AboutMe;
