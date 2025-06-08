import { Box, Typography, Paper, Fade } from '@mui/material';
import { useInView } from 'react-intersection-observer';

function EducationCard({ school, location, date, details }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div ref={ref}>
      <Fade in={inView} timeout={600}>
        <Box mb={3}>
          <Paper elevation={3}>
            <Box p={3}>
              <Typography variant="h6" sx={{ color: '#ab598b' }}>
                {school}
              </Typography>
              <Typography variant="body2" sx={{ color: '#000' }}>
                {location} | {date}
              </Typography>
              {details.map((line, i) => (
                <Typography key={i} variant="body1" sx={{ color: '#000' }}>
                  {line}
                </Typography>
              ))}
            </Box>
          </Paper>
        </Box>
      </Fade>
    </div>
  );
}

export default EducationCard;
