import { useSpring, animated } from 'react-spring';
import { Box, Typography, Paper, styled } from '@mui/material';

const HeaderBox = styled(Box)(({ bgImage }) => ({
  textAlign: 'center',
  marginBottom: '20px',
  '& h4, & h6, & p, & span': {
    color: bgImage === '/mountainsky.jpg' ? '#000000' : '#ffffff',
  }
}));

const FadeInText = styled(animated(Typography))`
  color: #000000;
`;

const FadeInBox = styled(animated(Box))``;

function Resume({ bgImage }) {
  const fadeProps = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  return (
    <FadeInBox p={3} style={{ paddingTop: '80px', ...fadeProps }}>
      <HeaderBox style={{ marginTop: '20px' }} bgImage={bgImage}>
        <Typography variant="h4" gutterBottom>More About Me</Typography>
        <Typography variant="h6" gutterBottom>Full Stack Developer</Typography>
        <Typography variant="body1" gutterBottom>
        I initially heard about coding back in 2017 and played around with it a little but I was really busy at the time. Fast forward to 2024 and I have been feeling burnt out and uninspired at my job just due to the lack of creativity which was something I had tapped more into over the years through workouts, poetry, drawing and just daily life. I remembered the bootcamp I did a free day with and signed up for the bootcamp and 12 weeks later I had a vast amount of knowledge on how to learn how to code. I am passionate about running, CrossFit, bike commuting, and engaging in puzzles and card/board games, which help me stay sharp and focused. Professionally, I create solutions that blend front-end aesthetics with back-end efficiency, with experience in developing web applications and ensuring the protection of sensitive information in compliance with industry standards.
        </Typography>
        <Typography variant="body2">
          Location: Brooklyn, NY | Contact: 570-540-6871 | Email: jpgiant@yahoo.com
        </Typography>
      </HeaderBox>

      <Box mt={3} mb={3}>
        <FadeInText variant="h5" gutterBottom align="center" style={{ ...fadeProps, color: bgImage === '/mountainsky.jpg' ? '#000000' : '#ffffff' }}>KEY STACK PROFICIENCIES</FadeInText>
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
        <FadeInText variant="h5" gutterBottom align="center" style={{ ...fadeProps, color: bgImage === '/mountainsky.jpg' ? '#000000' : '#ffffff' }}>CLIENT PROJECTS</FadeInText>
        <Box mb={3}>
          <Paper elevation={3}>
            <Box p={3}>
              <Typography variant="h6" style={{ color: '#ab598b' }}>Trainwithamandajane - <a href="https://trainwithamandajane.com/" target="_blank" rel="noopener noreferrer">App</a></Typography>
              <FadeInText variant="body1" style={fadeProps}>
                Wordpress | <br />
                Train with Amanda Jane is a personalized fitness training website that offers a variety of workout plans, nutritional advice, and one-on-one coaching sessions to help clients achieve their fitness goals.<br />
                <strong>Website Development</strong>: Designed and developed a comprehensive fitness training website using WordPress, providing personalized workout plans, nutritional advice, and coaching sessions.<br />
                <strong>User Interface Design</strong>: Created a user-friendly and visually appealing interface to enhance user engagement and improve overall user experience.<br />
                <strong>Responsive Design</strong>: Implemented a fully responsive design to ensure seamless usability across various devices, including desktops, tablets, and smartphones.<br />
                <strong>Content Management</strong>: Utilized WordPress's content management system to organize and manage various types of content, including blog posts, workout plans, and nutritional guides.<br />
                <strong>SEO Optimization</strong>: Applied SEO best practices to improve search engine rankings, increase website traffic, and attract more clients.<br />
                <strong>Customization</strong>: Customized themes and plugins to meet specific project requirements and enhance website functionality.<br />
                <strong>Client Collaboration</strong>: Worked closely with the client to understand their vision and requirements, delivering a tailored solution that aligns with their fitness training business goals.<br />
              </FadeInText>
            </Box>
          </Paper>
        </Box>
      </Box>

      <Box mt={3} mb={3}>
        <FadeInText variant="h5" gutterBottom align="center" style={{ ...fadeProps, color: bgImage === '/mountainsky.jpg' ? '#000000' : '#ffffff' }}>TECH PROJECTS</FadeInText>
        <Box mb={3}>
          <Paper elevation={3}>
            <Box p={3}>
              <Typography variant="h6" style={{ color: '#ab598b' }}>Cohorty - <a href="https://github.com/Barefootjiggy/cohorty-frontend/tree/dev" target="_blank" rel="noopener noreferrer">GitHub</a> | <a href="https://cohorty-frontend.vercel.app/" target="_blank" rel="noopener noreferrer">App</a></Typography>
              <FadeInText variant="body1" style={fadeProps}>
                JavaScript | React, MUI<br />
                <strong>Front-End Development</strong>: Played a crucial role as a front-end developer in a team of four, creating a web application to manage courses, students, and assignments using React and Material UI.<br />
                <strong>Component Design</strong>: Developed reusable components ensuring a modular and maintainable codebase.<br />
                <strong>Routing and Navigation</strong>: Implemented dynamic routing and navigation using React Router, enhancing user experience by providing seamless transitions between different sections of the app.<br />
                <strong>Authentication</strong>: Set up authentication and authorization using context and custom components, ensuring secure access to protected routes.
                <br />
                <strong>State Management</strong>: Managed application state effectively with React hooks and context, enabling real-time updates and synchronization across the app.
                <br />
                <strong>API Integration</strong>: Utilized Axios to integrate with backend APIs, handling data fetching, updating, and deletion operations efficiently.
                <br />
                <strong>User Interface</strong>: Designed a user-friendly interface with Material UI implementing images from Pexels, improving the usability and aesthetic appeal of the application.
                <br />
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
                <strong>Front-End Development</strong>: Collaborated as a key front-end developer on a team of four, building the Dutch app to simplify shared expense management using React.js and Radix UI.
                <br />
                <strong>Component Design</strong>: Developed and maintained reusable components enhancing code modularity and maintainability.
                <br />
                <strong>Routing Implementation</strong>: Managed app routing with React Router, ensuring seamless navigation between pages.
                <br />
                <strong>API Integration</strong>: Utilized Axios for efficient communication with backend APIs, handling data fetching, submission, and real-time updates.
                <br />
                <strong>User Interface</strong>: Leveraged Radix UI for creating accessible and user-friendly interfaces, improving user experience.
                <br />
                <strong>Testing and Debugging</strong>: Used Postman for API testing and debugging, ensuring robust and error-free backend integration.
                <br />
                <strong>Version Control</strong>: Collaborated using Git and GitHub, maintaining version control and managing code reviews effectively.
                <br />
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
                <strong>Full-Stack Development</strong>: Built a comprehensive fitness application using JavaScript, HTML, CSS, and MongoDB, showcasing proficiency in both front-end and back-end technologies.
                <br />
                <strong>Backend Integration</strong>: Developed robust server-side logic with Express.js and MongoDB, implementing secure authentication and authorization mechanisms, including password hashing and token management.
                <br />
                <strong>User Interface</strong>: Created a responsive and interactive front-end interface, including forms for user registration, login, and workout management, enhancing user experience and engagement.
                <br />
                <strong>Database Management</strong>: Engineered a scalable database schema and optimized data queries to handle user and workout information efficiently.
                <br />
                <strong>Deployment and Security</strong>: Successfully deployed the application on Heroku and Netlify, ensuring seamless access while maintaining data security and user privacy.
                <br />
                <strong>Project Management</strong>: Effectively planned and executed the project timeline, coordinating development tasks to achieve milestones and deliver a fully functional MVP within a week.
                <br />
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
                <strong>Designed and Developed</strong>: Created a Connect Four game using HTML, CSS, and JavaScript, showcasing strong front-end development skills.
                <br />
                <strong>Game Mechanics</strong>: Implemented game logic including initialization, move handling, win condition checks, and player turn management, ensuring a seamless and engaging user experience.
                <br />
                <strong>User Interaction</strong>: Added event listeners to handle player interactions and dynamically update the game board, enhancing interactivity.
                <br />
                <strong>Reset Functionality</strong>: Developed a reset function to restart the game, addressing challenges in event handling and state management.
                <br />
                <strong>Styling and Themes</strong>: Designed multiple color schemes and themes (e.g., Classic, Pac Man, Vice City) to enhance the game's visual appeal, demonstrating creativity and attention to detail.
                <br />
                <strong>Deployment</strong>: Successfully deployed the game, ensuring accessibility and usability for players.
                <br />
                <strong>Project Management</strong>: Planned and executed the project timeline, meeting milestones and delivering a functional game on schedule.
                <br />
              </FadeInText>
            </Box>
          </Paper>
        </Box>
      </Box>

      <Box mt={3} mb={3}>
        <FadeInText variant="h5" gutterBottom align="center" style={{ ...fadeProps, color: bgImage === '/mountainsky.jpg' ? '#000000' : '#ffffff' }}>EXPERIENCE</FadeInText>
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
        <FadeInText variant="h5" gutterBottom align="center" style={{ ...fadeProps, color: bgImage === '/mountainsky.jpg' ? '#000000' : '#ffffff' }}>EDUCATION</FadeInText>
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
