import { Box, Typography, Paper } from '@mui/material';

function Resume() {
  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom align="center">Joshua Pierre</Typography>

      <Box mb={3}>
        <Paper elevation={3}>
          <Box p={2}>
            <Typography variant="h6" gutterBottom>Located: Brooklyn, NY</Typography>
            <Typography variant="h6" gutterBottom>Contact: 570-540-6871</Typography>
          </Box>
        </Paper>
      </Box>

      <Box mt={3} mb={3}>
        <Typography variant="h5" gutterBottom align="center">KEY STACK PROFICIENCIES</Typography>
        <Box mb={3}>
          <Paper elevation={3}>
            <Box p={3}>
              <Typography variant="body1">
                <strong>Languages:</strong> Python, JavaScript, HTML, CSS, SQL, Mongo, JSON<br />
                <strong>Libraries, Frameworks and Databases:</strong> React, Express.js, Django, MongoDB, RESTful Routing<br />
              </Typography>
            </Box>
          </Paper>
        </Box>
      </Box>

      <Box mt={3} mb={3}>
        <Typography variant="h5" gutterBottom align="center">CLIENT PROJECTS</Typography>
        <Box mb={3}>
          <Paper elevation={3}>
            <Box p={3}>
              <Typography variant="h6">Trainwithamandajane - <a href="https://trainwithamandajane.com/" target="_blank" rel="noopener noreferrer">App</a></Typography>
              <Typography variant="body1">
                Wordpress | <br />
                Train with Amanda Jane is a personalized fitness training website that offers a variety of workout plans, nutritional advice, and one-on-one coaching sessions to help clients achieve their fitness goals.<br />
                Designed and developed with wordpress ensuring a user-friendly interface.<br />
                Implemented a responsive design to provide a seamless experience across different devices.
              </Typography>
            </Box>
          </Paper>
        </Box>
      </Box>

      <Box mt={3} mb={3}>
        <Typography variant="h5" gutterBottom align="center">TECH PROJECTS</Typography>
        <Box mb={3}>
          <Paper elevation={3}>
            <Box p={3}>
              <Typography variant="h6">Cohorty - <a href="https://github.com/Barefootjiggy/cohorty-frontend/tree/dev" target="_blank" rel="noopener noreferrer">GitHub</a> | <a href="https://cohorty-frontend.vercel.app/" target="_blank" rel="noopener noreferrer">App</a></Typography>
              <Typography variant="body1">
                JavaScript | React, MUI<br />
                Enhance educational administration with Cohorty, a grading and attendance management app designed for academic staff efficiency.<br />
                Developed the user interface with React and MUI, providing a streamlined and accessible experience for educators.<br />
                Implemented features for real-time attendance tracking, grade input and improving data accuracy.
              </Typography>
            </Box>
          </Paper>
        </Box>
        <Box mb={3}>
          <Paper elevation={3}>
            <Box p={3}>
              <Typography variant="h6">Dutch - <a href="https://github.com/Barefootjiggy/Dutch-Frontend" target="_blank" rel="noopener noreferrer">GitHub</a> | <a href="https://frontend-dutch-by-wahgee.vercel.app/" target="_blank" rel="noopener noreferrer">App</a></Typography>
              <Typography variant="body1">
                JavaScript | React, Radix UI<br />
                A bill-splitting app that simplifies sharing expenses among friends, ensuring everyone pays their fair share.<br />
                Crafted the front-end using React and Radix UI, creating a responsive and intuitive user interface.<br />
                Collaborated on API integration to manage transactions, facilitating smooth and accurate financial interactions.
              </Typography>
            </Box>
          </Paper>
        </Box>
        <Box mb={3}>
          <Paper elevation={3}>
            <Box p={3}>
              <Typography variant="h6">WOD4U - <a href="https://github.com/Barefootjiggy/Connect-4" target="_blank" rel="noopener noreferrer">GitHub</a> | <a href="https://wod4u.netlify.app/" target="_blank" rel="noopener noreferrer">App</a></Typography>
              <Typography variant="body1">
                JavaScript | MongoDB, Node.js, Express<br />
                Elevate your fitness journey with WOD4U, an app that offers a comprehensive library of workouts with full customization options.<br />
                Architected a robust backend in Node.js to manage a large dataset of workouts, ensuring scalability and performance.<br />
                Implemented a user-friendly interface for creating, updating, and deleting workouts, empowering users to tailor their fitness plans.
              </Typography>
            </Box>
          </Paper>
        </Box>
        <Box mb={3}>
          <Paper elevation={3}>
            <Box p={3}>
              <Typography variant="h6">Connect 4 - <a href="https://github.com/Barefootjiggy/Connect-4" target="_blank" rel="noopener noreferrer">GitHub</a> | <a href="https://connect-4-hazel.vercel.app/" target="_blank" rel="noopener noreferrer">App</a></Typography>
              <Typography variant="body1">
                JavaScript | HTML, CSS<br />
                Engage in a strategic battle of wits with a Connect 4 game that allows players to choose from several visual themes.<br />
                Engineered a responsive game logic in JavaScript, achieving a smooth and error-free playing experience.<br />
                Customized the user interface with CSS, providing multiple themes that enhance user engagement and visual appeal.
              </Typography>
            </Box>
          </Paper>
        </Box>
      </Box>

      <Box mt={3} mb={3}>
        <Typography variant="h5" gutterBottom align="center">EXPERIENCE</Typography>
        <Box mb={3}>
          <Paper elevation={3}>
            <Box p={3}>
              <Typography variant="h6">General Assembly, Software Engineering Fellow</Typography>
              <Typography variant="body1">
                New York, NY, 03/2024 - 05/2024<br />
                Intensive training in software engineering concepts and practical applications across a broad range of technologies.<br />
                Learned and applied modern programming languages and development frameworks.<br />
                Engaged in collaborative projects, demonstrating the ability to deliver under tight deadlines.<br />
                Mastered agile software development methodologies, significantly improving team collaboration and project management skills.
              </Typography>
            </Box>
          </Paper>
        </Box>
        <Box mb={3}>
          <Paper elevation={3}>
            <Box p={3}>
              <Typography variant="h6">VNS Health, Authorization Coordinator</Typography>
              <Typography variant="body1">
                New York, NY, 04/2018 - 01/2024<br />
                Managed patient authorizations and supported medical management in a fast-paced healthcare environment.<br />
                Processed hundreds of medical authorizations monthly, ensuring timely patient access to required health services.<br />
                Expanded team efforts in managing patient data, supporting effectiveness and patient satisfaction.<br />
                Utilized advanced database systems such as Guiding Care and Salesforce for information retrieval and updates.
              </Typography>
            </Box>
          </Paper>
        </Box>
      </Box>

      <Box mt={3} mb={3}>
        <Typography variant="h5" gutterBottom align="center">EDUCATION</Typography>
        <Box mb={3}>
          <Paper elevation={3}>
            <Box p={3}>
              <Typography variant="h6">General Assembly</Typography>
              <Typography variant="body1">
                In-Person, Certificate Expected: 06/2024<br />
                Full-stack software engineering 500+ hour program focused on product development fundamentals, object-oriented programming, MVC frameworks, data modeling, and team collaboration strategies.
              </Typography>
            </Box>
          </Paper>
        </Box>
        <Box mb={3}>
          <Paper elevation={3}>
            <Box p={3}>
              <Typography variant="h6">Western New England, B.S.B.A - Management and Leadership</Typography>
              <Typography variant="body1">
                Springfield, MA, Graduated: 05/2017<br />
                Active in athletics and community service; Mentor in the United & Mutually Equal Program, Orientation Group Leader for Student Orientation and Registration, volunteer for Red Cross and local community projects.
              </Typography>
            </Box>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
}

export default Resume;
