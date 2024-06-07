import { AppBar, Toolbar, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          size="large">
          <MenuIcon />
        </IconButton>
        <Button color="inherit">About me</Button>
        <Button color="inherit">Projects</Button>
        <Button color="inherit">Reach Out</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
