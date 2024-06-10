import { AppBar, Toolbar, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import PlantLogo from '../../assets/Plant.png';

function Header() {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          size="large"
          onClick={() => navigate('/')} // Add onClick handler to navigate to the homepage
        >
          <img src={PlantLogo} alt="Logo" style={{ width: '25px', height: 'auto' }} />
        </IconButton> 
      </Toolbar>
    </AppBar>
  );
}

export default Header;
