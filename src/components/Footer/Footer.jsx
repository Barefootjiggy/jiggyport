import React from 'react';
import { AppBar, Toolbar, BottomNavigation, BottomNavigationAction, Tooltip } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

function Footer() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    switch (newValue) {
      case 0: {
        window.open('https://github.com/Barefootjiggy', '_blank');
        break;
      }
      case 1: {
        const link = document.createElement('a');
        link.href = 'https://docs.google.com/document/d/1vQRjouMO8hj3-bxMZAhdh50PZOEU_vwuiRmx0lCePEs/export?format=pdf'; 
        link.download = 'Joshua_Pierre_Resume.pdf'; 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        break;
      }
      case 2: {
        window.open('https://www.linkedin.com/in/joshua-pierre-52209b91/', '_blank');
        break;
      }
      default:
        break;
    }
  };

  return (
    <AppBar position='sticky' color="primary" style={{ top: 'auto', bottom: 0 }}>
      <Toolbar style={{ justifyContent: 'center' }}>  
        <BottomNavigation
          value={value}
          onChange={handleChange}
          showLabels
        >
          <BottomNavigationAction 
            label="GitHub" 
            icon={<GitHubIcon />} 
            onClick={() => handleChange(null, 0)}
          />
          <Tooltip title="View Resume" arrow>
            <BottomNavigationAction 
              label="Resume" 
              icon={<PictureAsPdfIcon />} 
              onClick={() => handleChange(null, 1)}
            />
          </Tooltip>
          <BottomNavigationAction 
            label="LinkedIn" 
            icon={<LinkedInIcon />} 
            onClick={() => handleChange(null, 2)}
          />
        </BottomNavigation>
      </Toolbar>
    </AppBar>
  );
}

export default Footer;
