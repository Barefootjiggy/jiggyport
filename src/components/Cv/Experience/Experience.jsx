import { Box } from '@mui/material';
import ExperienceCard from './ExperienceCard'; 

function Experience() {
  const roles = [
    {
      title: 'Independent Contractor, Uber Eats Delivery Driver',
      location: 'Brooklyn, NY',
      dates: '01/2025 - Present',
      points: [
        'Maintained Platinum Status via high customer ratings and reliability.',
        'Optimized time to complete multiple deliveries per shift.',
      ],
    },
    {
      title: 'Driver and Foreman, Hot Guys Moving',
      location: 'Brooklyn, NY',
      dates: '04/2021 - Present',
      points: [
        'Led moving operations, ensuring safety, speed, and customer satisfaction.',
        'Managed inventory and logistics on-site in a high-paced environment.',
      ],
    },
    {
      title: 'Software Engineering Fellow, General Assembly',
      location: 'New York, NY',
      dates: '03/2024 - 05/2024',
      points: [
        'Completed 500+ hour full-stack software engineering bootcamp.',
        'Built and deployed full-stack apps under tight deadlines.',
      ],
    },
    {
      title: 'Authorization Coordinator, VNS Health',
      location: 'New York, NY',
      dates: '09/2019 - 01/2024',
      points: [
        'Processed hundreds of authorizations monthly, ensuring timely care.',
        'Used Salesforce and Guiding Care for documentation and case management.',
      ],
    },
  ];

  return (
    <Box mt={4} mb={4}>

      {roles.map((role, i) => (
        <ExperienceCard key={i} {...role} />
      ))}
    </Box>
  );
}

export default Experience;
