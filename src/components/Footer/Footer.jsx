import React from 'react';
import { AppBar, Toolbar, BottomNavigation, BottomNavigationAction } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

function Footer() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    // Navigation logic based on icon click
    switch (newValue) {
      case 0: {
        // Open GitHub in a new tab
        window.open('https://github.com/Barefootjiggy', '_blank');
        break;
      }
      case 1: {
        // Download PDF resume
        const link = document.createElement('a');
        link.href = 'https://docs.google.com/document/d/1vQRjouMO8hj3-bxMZAhdh50PZOEU_vwuiRmx0lCePEs/export?format=pdf'; // Direct PDF download link
        link.download = 'Joshua_Pierre_Resume.pdf'; // The name for the downloaded file
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        break;
      }
      case 2: {
        // Open LinkedIn in a new tab
        window.open('https://www.linkedin.com/in/joshua-pierre-52209b91/', '_blank');
        break;
      }
      default:
        break;
    }
  };

  return (
    <AppBar position='static' color="primary" style={{ top: 'auto', bottom: 0 }}>
      <Toolbar style={{ justifyContent: 'center' }}>  {/* Center content within the toolbar */}
        <BottomNavigation
          value={value}
          onChange={handleChange}
          showLabels
        >
          <BottomNavigationAction label="" icon={<GitHubIcon />} />
          <BottomNavigationAction label="" icon={<PictureAsPdfIcon />} />
          <BottomNavigationAction label="" icon={<LinkedInIcon />} />
        </BottomNavigation>
      </Toolbar>
    </AppBar>
  );
}

export default Footer;
