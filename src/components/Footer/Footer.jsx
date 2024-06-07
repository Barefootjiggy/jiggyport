import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';


function Footer() {
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
    >
      <BottomNavigationAction label="Github" icon={<RestoreIcon />} />
      <BottomNavigationAction label="Resume" icon={<RestoreIcon />} />
      <BottomNavigationAction label="LinkedIn" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Contact" icon={<FavoriteIcon />} />
    </BottomNavigation>
    
  );
}
export default Footer;
