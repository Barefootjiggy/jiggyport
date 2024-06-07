import { AppBar, Toolbar, Button, IconButton } from '@mui/material';
import PlantLogo from '../../assets/Plant.png'

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          size="large">
          <img src={PlantLogo} alt="Logo" style={{ width: '25px', height: 'auto' }} />
        </IconButton>
        <Button color="inherit">About</Button>
        <Button color="inherit">Projects</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
