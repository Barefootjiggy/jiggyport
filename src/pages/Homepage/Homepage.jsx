import { Grid, Typography, Avatar, Box, styled } from '@mui/material';
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
// import Profile from '../../assets/Profile.png';
import Profilenobg from '../../assets/Joshua_Pierrermbg.png'

const StyledAvatar = styled(Avatar)({
  width: 200, 
  height: 220,
  margin: '20px auto', 
});

const CenteredTypography = styled(Typography)({
  textAlign: 'center',
  color: '#FFFFFF',
  marginBottom: '20px', 
});

const StyledGridItem = styled(Grid)({
  textAlign: 'center'
});

const ProfileBox = styled(Box)({
  textAlign: 'center'
});

function Homepage() {
  return (
    <ProfileBox>
      <CenteredTypography variant="h4" component="h1" gutterBottom m= '20px auto'>
        Joshua Pierre
      </CenteredTypography>
      <StyledAvatar src={Profilenobg} alt="Joshua Pierre" />
      <CenteredTypography variant="h6" component="p" padding=" 0 20px" >
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
      {/* <CenteredTypography variant="h5" component="h2" gutterBottom m="40px auto">
        My Projects
      </CenteredTypography> */}
      <Projects />
    </ProfileBox>
  );
}

function createSkillItem(name, imageUrl) {
  return (
    <StyledGridItem item xs={4} md={2} style={{ textAlign: 'center' }}>
      <img src={imageUrl} alt={name} style={{ width: '50px', height: '50px', marginBottom: '10px' }} />
      <Typography variant="subtitle2" style={{ color: '#FFFFFF' }}>{name}</Typography>
    </StyledGridItem>
  );
}

export default Homepage;
