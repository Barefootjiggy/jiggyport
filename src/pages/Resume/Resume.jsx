import { useSpring, animated } from 'react-spring';
import { Box, Typography, Paper, styled } from '@mui/material';

const HeaderBox = styled(Box)`
  text-align: center;
  margin-bottom: 20px;
`;

const FadeInText = styled(animated(Typography))`
  color: #ab598b; /* Set default text color */
`;

const FadeInBox = styled(animated(Box))``;

function Resume() {
  const fadeProps = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  return (
    <FadeInBox p={3} style={{ paddingTop: '80px', ...fadeProps }}>
      <HeaderBox style={{ marginTop: '20px' }}>
        <Typography variant="h4" gutterBottom style={{ color: '#FFFFFF' }}>Joshua Pierre</Typography>
        <Typography variant="h6" gutterBottom style={{ color: '#FFFFFF' }}>Full Stack Developer</Typography>
        <Typography variant="body1" gutterBottom style={{ color: '#FFFFFF' }}>
          Passionate about creating solutions that blend front-end aesthetics with back-end efficiency. Experienced in developing web applications and ensuring the protection of sensitive information in compliance with industry standards.
        </Typography>
        <Typography variant="body2" style={{ color: '#FFFFFF' }}>
          Location: Brooklyn, NY | Contact: 570-540-6871 | Email: jpgiant@yahoo.com
        </Typography>
      </HeaderBox>

      <Box mt={3} mb={3}>
        <FadeInText variant="h5" gutterBottom align="center" style={{ ...fadeProps, color: '#FFFFFF' }}>KEY STACK PROFICIENCIES</FadeInText>
        <Box mb={3}>
          <Paper elevation={3}>
            <Box p={3}>
              <FadeInText variant="body1" style={fadeProps}>
                <strong>Languages:</strong> Python, JavaScript, HTML, CSS, SQL, Mongo, JSON<br />
                <strong>Libraries, Frameworks and Databases:</strong> React, Express.js, Django, MongoDB, RESTful Routing<br />
              </FadeInText>
            </Box>
          </Paper>
        </Box>
      </Box>

      <Box mt={3} mb={3}>
        <FadeInText variant="h5" gutterBottom align="center" style={{ ...fadeProps, color: '#FFFFFF' }}>CLIENT PROJECTS</FadeInText>
        <Box mb={3}>
          <Paper elevation={3}>
            <Box p={3}>
              <Typography variant="h6" style={{ color: '#ab598b' }}>Trainwithamandajane - <a href="https://trainwithamandajane.com/" target="_blank" rel="noopener noreferrer">App</a></Typography>
              <FadeInText variant="body1" style={fadeProps}>
                Wordpress | <br />
                Train with Amanda Jane is a personalized fitness training website that offers a variety of workout plans, nutritional advice, and one-on-one coaching sessions to help clients achieve their fitness goals.<br />
                Designed and developed with wordpress ensuring a user-friendly interface.<br />
                Implemented a responsive design to provide a seamless experience across different devices.
              </FadeInText>
            </Box>
          </Paper>
        </Box>
      </Box>

      <Box mt={3} mb={3}>
        <FadeInText variant="h5" gutterBottom align="center" style={{ ...fadeProps, color: '#FFFFFF' }}>TECH PROJECTS</FadeInText>
        <Box mb={3}>
          <Paper elevation={3}>
            <Box p={3}>
              <Typography variant="h6" style={{ color: '#ab598b' }}>Cohorty - <a href="https://github.com/Barefootjiggy/cohorty-frontend/tree/dev" target="_blank" rel="noopener noreferrer">GitHub</a> | <a href="https://cohorty-frontend.vercel.app/" target="_blank" rel="noopener noreferrer">App</a></Typography>
              <FadeInText variant="body1" style={fadeProps}>
                JavaScript | React, MUI<br />
                Enhance educational administration with Cohorty, a grading and attendance management app designed for academic staff efficiency.<br />
                Developed the user interface with React and MUI, providing a streamlined and accessible experience for educators.<br />
                Implemented features for real-time attendance tracking, grade input and improving data accuracy.
              </FadeInText>
            </Box>
          </Paper>
        </Box>
        <Box mb={3}>
          <Paper elevation={3}>
            <Box p={3}>
              <Typography variant="h6" style={{ color: '#ab598b' }}>Dutch - <a href="https://github.com/Barefootjiggy/Dutch-Frontend" target="_blank" rel="noopener noreferrer">GitHub</a> | <a href="https://frontend-dutch-by-wahgee.vercel.app/" target="_blank" rel="noopener noreferrer">App</a></Typography>
              <FadeInText variant="body1" style={fadeProps}>
                JavaScript | React, Radix UI<br />
                A bill-splitting app that simplifies sharing expenses among friends, ensuring everyone pays their fair share.<br />
                Crafted the front-end using React and Radix UI, creating a responsive and intuitive user interface.<br />
                Collaborated on API integration to manage transactions, facilitating smooth and accurate financial interactions.
              </FadeInText>
            </Box>
          </Paper>
        </Box>
        <Box mb={3}>
          <Paper elevation={3}>
            <Box p={3}>
              <Typography variant="h6" style={{ color: '#ab598b' }}>WOD4U - <a href="https://github.com/Barefootjiggy/Connect-4" target="_blank" rel="noopener noreferrer">GitHub</a> | <a href="https://wod4u.netlify.app/" target="_blank" rel="noopener noreferrer">App</a></Typography>
              <FadeInText variant="body1" style={fadeProps}>
                JavaScript | MongoDB, Node.js, Express<br />
                Elevate your fitness journey with WOD4U, an app that offers a comprehensive library of workouts with full customization options.<br />
                Architected a robust backend in Node.js to manage a large dataset of workouts, ensuring scalability and performance.<br />
                Implemented a user-friendly interface for creating, updating, and deleting workouts, empowering users to tailor their fitness plans.
              </FadeInText>
            </Box>
          </Paper>
        </Box>
        <Box mb={3}>
          <Paper elevation={3}>
            <Box p={3}>
              <Typography variant="h6" style={{ color: '#ab598b' }}>Connect 4 - <a href="https://github.com/Barefootjiggy/Connect-4" target="_blank" rel="noopener noreferrer">GitHub</a> | <a href="https://connect-4-hazel.vercel.app/" target="_blank" rel="noopener noreferrer">App</a></Typography>
              <FadeInText variant="body1" style={fadeProps}>
                JavaScript | HTML, CSS<br />
                Engage in a strategic battle of wits with a Connect 4 game that allows players to choose from several visual themes.<br />
                Engineered a responsive game logic in JavaScript, achieving a smooth and error-free playing experience.<br />
                Customized the user interface with CSS, providing multiple themes that enhance user engagement and visual appeal.
              </FadeInText>
            </Box>
          </Paper>
        </Box>
      </Box>

      <Box mt={3} mb={3}>
        <FadeInText variant="h5" gutterBottom align="center" style={{ ...fadeProps, color: '#FFFFFF' }}>EXPERIENCE</FadeInText>
        <Box mb={3}>
          <Paper elevation={3}>
            <Box p={3}>
              <Typography variant="h6" style={{ color: '#ab598b' }}>General Assembly, Software Engineering Fellow</Typography>
              <FadeInText variant="body1" style={fadeProps}>
                New York, NY, 03/2024 - 05/2024<br />
                Intensive training in software engineering concepts and practical applications across a broad range of technologies.<br />
                Learned and applied modern programming languages and development frameworks.<br />
                Engaged in collaborative projects, demonstrating the ability to deliver under tight deadlines.<br />
                Mastered agile software development methodologies, significantly improving team collaboration and project management skills.
              </FadeInText>
            </Box>
          </Paper>
        </Box>
        <Box mb={3}>
          <Paper elevation={3}>
            <Box p={3}>
              <Typography variant="h6" style={{ color: '#ab598b' }}>VNS Health, Authorization Coordinator</Typography>
              <FadeInText variant="body1" style={fadeProps}>
                New York, NY, 04/2018 - 01/2024<br />
                Managed patient authorizations and supported medical management in a fast-paced healthcare environment.<br />
                Processed hundreds of medical authorizations monthly, ensuring timely patient access to required health services.<br />
                Expanded team efforts in managing patient data, supporting effectiveness and patient satisfaction.<br />
                Utilized advanced database systems such as Guiding Care and Salesforce for information retrieval and updates.
              </FadeInText>
            </Box>
          </Paper>
        </Box>
      </Box>

      <Box mt={3} mb={3}>
        <FadeInText variant="h5" gutterBottom align="center" style={{ ...fadeProps, color: '#FFFFFF' }}>EDUCATION</FadeInText>
        <Box mb={3}>
          <Paper elevation={3}>
            <Box p={3}>
              <Typography variant="h6" style={{ color: '#ab598b' }}>General Assembly</Typography>
              <FadeInText variant="body1" style={fadeProps}>
                In-Person, Certificate Expected: 06/2024<br />
                Full-stack software engineering 500+ hour program focused on product development fundamentals, object-oriented programming, MVC frameworks, data modeling, and team collaboration strategies.
              </FadeInText>
            </Box>
          </Paper>
        </Box>
        <Box mb={3}>
          <Paper elevation={3}>
            <Box p={3}>
              <Typography variant="h6" style={{ color: '#ab598b' }}>Western New England, B.S.B.A - Management and Leadership</Typography>
              <FadeInText variant="body1" style={fadeProps}>
                Springfield, MA, Graduated: 05/2017<br />
                Active in athletics and community service; Mentor in the United & Mutually Equal Program, Orientation Group Leader for Student Orientation and Registration, volunteer for Red Cross and local community projects.
              </FadeInText>
            </Box>
          </Paper>
        </Box>
      </Box>
    </FadeInBox>
  );
}

export default Resume;
