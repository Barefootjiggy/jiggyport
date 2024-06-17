import { Grid, Typography, Avatar, Box, styled } from '@mui/material';
import Projects from '../../components/Projects/Projects'
import Django from '../../assets/Django.png'; 
import Express from '../../assets/Express.png'; 
import MongoDB from '../../assets/MongoDB.png'; 
import Mongoose from '../../assets/Mongoose.png'; 
import Mui from '../../assets/Mui.png'; 
import PostgreSQL from '../../assets/PostgreSQL.png'; 
import Python from '../../assets/Python.png'; 
import RadixUI from '../../assets/RadixUI.png'; 
import React from '../../assets/React.png'; 
import Nodejs from '../../assets/Nodejs.png'; 
import Css from '../../assets/Css.png'; 
import Html from '../../assets/Html.png'; 
import Javascript from '../../assets/Javascript.png';
import Profile from '../../assets/Profile.png'

// Styled components
const StyledAvatar = styled(Avatar)({
  width: 200, 
  height: 220,
  margin: '20px auto', 
  
});

const CenteredTypography = styled(Typography)({
  textAlign: 'center',
  color: '#482121',
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
    <StyledAvatar src={Profile} alt="Joshua Pierre" />
    <CenteredTypography variant="h6" component="p" padding=" 0 20px" >
    I am a Software Engineer with expertise in both front-end and back-end technologies. With a background in the healthcare industry creating medical authorizations, I excelled as a top performer, generating over 300+ authorizations monthly, while upholding stringent compliance and security standards. My experience at General Assembly's 12-week software-engineering bootcamp sharpened my time-management skills, enabling me to meet strict deadlines and deliver labs and projects. I am driven to apply these skills in a professional tech environment, aiming to become a top contributor.
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
        {createSkillItem("React", React)}
        {createSkillItem("Node.js", Nodejs)}
        {createSkillItem("CSS", Css)}
        {createSkillItem("HTML", Html)}
        {createSkillItem("JavaScript", Javascript)}
      </Grid>
      <Projects />
      </ProfileBox>
      
  );
}

function createSkillItem(name, imageUrl) {
  return (
    <StyledGridItem item xs={4} md={2} style={{ textAlign: 'center' }}>
      <img src={imageUrl} alt={name} style={{ width: '50px', height: '50px', marginBottom: '10px' }} />
      <Typography variant="subtitle2" style={{ color: '#482121' }}>{name}</Typography>
    </StyledGridItem>
  );
}

export default Homepage;
