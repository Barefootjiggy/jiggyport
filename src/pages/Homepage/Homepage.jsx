import { Grid, Typography } from '@mui/material';
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

function Homepage() {
  return (
    <>
      <Typography variant="h4" component="h1" gutterBottom style={{ color: '#482121', textAlign: 'center', marginBottom: '20px' }}>
        Joshua Pierre
      </Typography>
      <Typography variant="h6" component="p" style={{ color: '#482121', textAlign: 'center', marginBottom: '40px' }}>
        I'm a passionate developer skilled in a range of technologies, striving to build impactful software solutions.
      </Typography>
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
      </>
  );
}

function createSkillItem(name, imageUrl) {
  return (
    <Grid item xs={4} md={2} style={{ textAlign: 'center' }}>
      <img src={imageUrl} alt={name} style={{ width: '50px', height: '40px', marginBottom: '10px' }} />
      <Typography variant="subtitle2" style={{ color: '#482121' }}>{name}</Typography>
    </Grid>
  );
}

export default Homepage;
