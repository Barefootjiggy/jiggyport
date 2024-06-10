import { AppBar, Toolbar, IconButton, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import PlantLogo from '../../assets/Plant.png';

function Header() {
  const navigate = useNavigate();

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Box display="flex" flexGrow={1} justifyContent="center">
          <IconButton
            color="inherit"
            aria-label="home"
            onClick={() => navigate('/')}
          >
            <img src={PlantLogo} alt="Logo" style={{ width: '25px', height: 'auto' }} />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
