import React from 'react';
import { AppBar, Toolbar, BottomNavigation, BottomNavigationAction } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import MessageIcon from '@mui/icons-material/Message';

function Footer() {
  const [value, setValue] = React.useState(0);

  return (
    <AppBar position="fixed" color="primary" style={{ top: 'auto', bottom: 0 }}>
      <Toolbar>
        <BottomNavigation
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
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
