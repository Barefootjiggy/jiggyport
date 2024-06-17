import { AppBar, Toolbar, IconButton, Box } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// import HomeIcon from '@mui/icons-material/Home';
import MailIcon from '@mui/icons-material/Mail';

function Header() {
  // const navigate = useNavigate();

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Box display="flex" flexGrow={1} justifyContent="center">
          {/* <IconButton
            color="inherit"
            aria-label="home"
            onClick={() => navigate('/')}
          >
            <HomeIcon />
          </IconButton> */}
          <IconButton
            color="inherit"
            aria-label="email"
            onClick={() => window.location.href = 'mailto:jpgiant@yahoo.com'}
          >
            <MailIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
