import { Box, Typography } from '@mui/material';
import EducationCard from './EducationCard'; 

function Education() {
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
      <Typography variant="h5" align="center" gutterBottom sx={{ color: '#000' }}>
        EDUCATION
      </Typography>

      {education.map((edu, i) => (
        <EducationCard key={i} {...edu} />
      ))}
    </Box>
  );
}

export default Education;
