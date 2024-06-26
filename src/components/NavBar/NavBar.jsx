import { AppBar, Toolbar, IconButton, Box, Tooltip } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import MailIcon from '@mui/icons-material/Mail';
import DescriptionIcon from '@mui/icons-material/Description';

function Header() {
  const navigate = useNavigate();

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Box display="flex" flexGrow={1} justifyContent="center">
          <Tooltip title="Portfolio">
            <IconButton
              color="inherit"
              aria-label="home"
              onClick={() => navigate('/')}
            >
              <HomeIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Reach out">
            <IconButton
              color="inherit"
              aria-label="email"
              onClick={() => window.location.href = 'mailto:jpgiant@yahoo.com'}
            >
              <MailIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Resume View">
            <IconButton
              color="inherit"
              aria-label="resume"
              onClick={() => navigate('/resume')}
            >
              <DescriptionIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
