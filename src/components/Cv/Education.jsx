import { Box, Typography, Paper } from '@mui/material';

function Education() {
  const textColor = '#000';

  const education = [
    {
      school: 'General Assembly',
      location: 'In-Person',
      date: 'Certificate Expected: 06/2024',
      details: [
        '500+ hour full-stack engineering program covering OOP, MVC, REST, and Agile.',
        'Built collaborative projects and deployed full-stack applications.',
      ],
    },
    {
      school: 'Western New England, B.S.B.A - Management and Leadership',
      location: 'Springfield, MA',
      date: 'Graduated: 05/2017',
      details: [
        'Mentored students, led orientation programs, and volunteered with Red Cross.',
        'Combined academics with leadership and community service.',
      ],
    },
  ];

  return (
    <Box mt={4} mb={4}>

      {education.map((edu, i) => (
        <Box key={i} mb={3}>
          <Paper elevation={3}>
            <Box p={3}>
              <Typography variant="h6" sx={{ color: '#ab598b' }}>
                {edu.school}
              </Typography>
              <Typography variant="body2" sx={{ color: textColor }}>
                {edu.location} | {edu.date}
              </Typography>
              {edu.details.map((line, j) => (
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

export default Education;
