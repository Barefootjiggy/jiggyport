import React from 'react';
import { AppBar, Toolbar, BottomNavigation, BottomNavigationAction, Tooltip } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import { styled } from '@mui/system';

const StyledFooter = styled(AppBar)`
  background-color: #ab598b;
  box-shadow: none;
`;

function Footer() {
  const [value, setValue] = React.useState(0);

  const handleChange = (newValue) => {
    setValue(newValue);
    switch (newValue) {
      case 0: {
        window.open('https://github.com/Barefootjiggy', '_blank');
        break;
      }
      case 1: {
        const link = document.createElement('a');
        link.href = 'https://docs.google.com/document/d/1CAZCWLcd_seMeuuEGNM0peNzr2z9amrkydlaHED22Ss/export?format=pdf';
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
    <StyledFooter position="sticky" style={{ top: 'auto', bottom: 0, marginTop: '80px' }} className="footer">
      <Toolbar style={{ justifyContent: 'center' }}>
        <BottomNavigation
          value={value}
          onChange={(event, newValue) => handleChange(newValue)}
          showLabels
          style={{ background: 'transparent' }}
        >
          <BottomNavigationAction 
            label="" 
            icon={<GitHubIcon style={{ color: 'white' }} />} 
            onClick={() => handleChange(0)}
          />
          <Tooltip title="Resume Download" arrow>
            <BottomNavigationAction 
              label="" 
              icon={<PictureAsPdfIcon style={{ color: 'white' }} />} 
              onClick={() => handleChange(1)}
            />
          </Tooltip>
          <BottomNavigationAction 
            label="" 
            icon={<LinkedInIcon style={{ color: 'white' }} />} 
            onClick={() => handleChange(2)}
          />
        </BottomNavigation>
      </Toolbar>
    </StyledFooter>
  );
}

export default Footer;