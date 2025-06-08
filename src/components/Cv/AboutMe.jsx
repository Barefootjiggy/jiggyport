import { Typography, Box } from '@mui/material';

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
    </Box>
  );
}

export default AboutMe;
