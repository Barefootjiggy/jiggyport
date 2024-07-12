import { useState, useEffect } from 'react';
import { Grid, Typography, Avatar, Box, styled } from '@mui/material';
import { useSpring, animated } from 'react-spring';
import Projects from '../../components/Projects/Projects';
import Django from '../../assets/Django.png'; 
import Express from '../../assets/Express.png'; 
import MongoDB from '../../assets/MongoDB.png'; 
import Mongoose from '../../assets/Mongoose.png'; 
import Mui from '../../assets/Mui.png'; 
import PostgreSQL from '../../assets/PostgreSQL.png'; 
import Python from '../../assets/Python.png'; 
import RadixUI from '../../assets/RadixUI.png'; 
import ReactLogo from '../../assets/React.png'; 
import Nodejs from '../../assets/Nodejs.png'; 
import Css from '../../assets/Css.png'; 
import Html from '../../assets/Html.png'; 
import Javascript from '../../assets/Javascript.png';
import Profilenobg from '../../assets/Joshua_Pierrermbg.png';

const StyledAvatar = styled(Avatar)({
  width: 200, 
  height: 220,
  margin: '20px auto', 
  cursor: 'pointer'
});

const CenteredTypography = styled(Typography)({
  textAlign: 'center',
  color: '#FFFFFF',
  marginBottom: '20px', 
});

const ProfileBox = styled(Box)({
  textAlign: 'center',
  paddingTop: '100px' 
});

const AnimatedGridItem = ({ name, imageUrl }) => {
  const [props, set] = useSpring(() => ({
    transform: 'scale(1)',
    boxShadow: '0px 0px 0px rgba(0,0,0,0)',
    config: { tension: 300, friction: 5 }
  }));

  return (
    <Grid item xs={4} md={2}
      onMouseEnter={() => set({ transform: 'scale(1.1)', boxShadow: '0px 4px 8px rgba(171,89,139,1)' })}
      onMouseLeave={() => set({ transform: 'scale(1)', boxShadow: '0px 0px 0px rgba(0,0,0,0)' })}
    >
      <animated.div style={props}>
        <img src={imageUrl} alt={name} style={{ width: '50px', height: '50px', marginBottom: '10px' }} />
        <Typography variant="subtitle2" style={{ color: '#FFFFFF' }}>{name}</Typography>
      </animated.div>
    </Grid>
  );
};

const FlickerText = styled(animated(Typography))({
  textAlign: 'center',
  marginBottom: '20px',
});

function Homepage() {
  const slideInProps = useSpring({
    from: { transform: 'translateX(-100%)' },
    to: { transform: 'translateX(0)' },
    config: { tension: 120, friction: 14 }
  });

  const [rotate, setRotate] = useState(false);
  const rotateProps = useSpring({
    transform: rotate ? 'rotate(360deg)' : 'rotate(0deg)',
    config: { duration: 500 }
  });

  useEffect(() => {
    // Trigger the initial rotation when the component mounts
    setRotate(true);

    // Reset the rotation state after the animation completes
    const timer = setTimeout(() => setRotate(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleAvatarClick = () => {
    setRotate(!rotate);
  };

  const flickerProps = useSpring({
    from: { color: '#FFFFFF' },
    to: async (next) => {
      // eslint-disable-next-line no-constant-condition
      while (true) {
        await next({ color: '#ed3804' });
        await next({ color: '#FFFFFF' });
      }
    },
    config: { duration: 500 }, // Adjust the duration for the flickering effect
  });

  return (
    <animated.div style={slideInProps}>
      <ProfileBox>
        <FlickerText variant="h2" component="h1" style={flickerProps}>
          Joshua Pierre
        </FlickerText>
        <animated.div style={rotateProps}>
          <StyledAvatar src={Profilenobg} alt="Joshua Pierre" onClick={handleAvatarClick} />
        </animated.div>
        <CenteredTypography variant="h6" component="p" padding="0 20px">
          I am a full stack developer specializing in crafting solutions that harmoniously blend front-end aesthetics with back-end efficiency, delivering intuitive user experiences that users find both accessible and enjoyable. With a background in the healthcare industry creating medical authorizations my role required meticulous adherence to stringent HIPAA guidelines, ensuring the protection of sensitive patient information from unauthorized access and ensuring compliance with legal standards. I excel as a top performer, generating over 300+ authorizations monthly, while upholding stringent compliance and security standards. My experience as a Software Engineer has sharpened my time-management skills, enabling me to meet strict deadlines and deliver on projects. I am driven to continue to apply these skills in a company environment, aiming to become a top contributor.
        </CenteredTypography>
        <Grid container spacing={2} alignItems="center" justifyContent="center">
          {createSkillItem("Django", Django)}
          {createSkillItem("Express", Express)}
          {createSkillItem("MongoDB", MongoDB)}
          {createSkillItem("Mongoose", Mongoose)}
          {createSkillItem("Material-UI", Mui)}
          {createSkillItem("PostgreSQL", PostgreSQL)}
          {createSkillItem("Python", Python)}
          {createSkillItem("Radix UI", RadixUI)}
          {createSkillItem("React", ReactLogo)} 
          {createSkillItem("Node.js", Nodejs)}
          {createSkillItem("CSS", Css)}
          {createSkillItem("HTML", Html)}
          {createSkillItem("JavaScript", Javascript)}
        </Grid>
        <Projects />
      </ProfileBox>
    </animated.div>
  );
}

function createSkillItem(name, imageUrl) {
  return <AnimatedGridItem key={name} name={name} imageUrl={imageUrl} />;
}

export default Homepage;
