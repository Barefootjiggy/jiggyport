import React from 'react';
import { AppBar, Toolbar, BottomNavigation, BottomNavigationAction } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import MessageIcon from '@mui/icons-material/Message';

function Footer() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    // Navigation logic based on icon click
    switch (newValue) {
      case 0:
        // Open GitHub in a new tab
        window.open('https://github.com/Barefootjiggy', '_blank');
        break;
      case 1:
        // Open Resume (Google Docs) in a new tab
        window.open('https://docs.google.com/document/d/1vQRjouMO8hj3-bxMZAhdh50PZOEU_vwuiRmx0lCePEs/edit', '_blank');
        break;
      case 2:
        // Open LinkedIn in a new tab
        window.open('https://www.linkedin.com/in/joshua-pierre-52209b91/', '_blank');
        break;
      case 3:
        // Direct navigation to Contact page
        navigate('/contact');
        break;
      default:
        break;
    }
  };

  return (
    <AppBar position="fixed" color="primary" style={{ top: 'auto', bottom: 0 }}>
      <Toolbar>
        <BottomNavigation
          value={value}
          onChange={handleChange}
          showLabels
        >
          <BottomNavigationAction label="Github" icon={<GitHubIcon />} />
          <BottomNavigationAction label="Resume" icon={<PictureAsPdfIcon />} />
          <BottomNavigationAction label="LinkedIn" icon={<LinkedInIcon />} />
          <BottomNavigationAction label="Contact" icon={<MessageIcon />} />
        </BottomNavigation>
      </Toolbar>
    </AppBar>
  );
}

export default Footer;
