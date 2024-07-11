import { AppBar, Toolbar, IconButton, Box, Tooltip } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import MailIcon from '@mui/icons-material/Mail';
import DescriptionIcon from '@mui/icons-material/Description';
import { styled } from '@mui/system';

const StyledAppBar = styled(AppBar)`
  background: transparent;
  box-shadow: none;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000; /* Ensure it stays on top of other elements */
`;

const StyledIconButton = styled(IconButton)`
  background-color: #ab598b;
  margin: 0px 10px;
  padding: 10px;
  &:hover {
    background-color: #925070;
  }
`;

function Header() {
  const navigate = useNavigate();

  return (
    <StyledAppBar className="navbar">
      <Toolbar>
        <Box display="flex" flexGrow={1} justifyContent="center">
          <Tooltip title="Portfolio">
            <StyledIconButton
              color="inherit"
              aria-label="home"
              onClick={() => navigate('/')}
            >
              <HomeIcon />
            </StyledIconButton>
          </Tooltip>
          <Tooltip title="Reach out">
            <StyledIconButton
              color="inherit"
              aria-label="email"
              onClick={() => window.location.href = 'mailto:jpgiant@yahoo.com'}
            >
              <MailIcon />
            </StyledIconButton>
          </Tooltip>
          <Tooltip title="Resume View">
            <StyledIconButton
              color="inherit"
              aria-label="resume"
              onClick={() => navigate('/resume')}
            >
              <DescriptionIcon />
            </StyledIconButton>
          </Tooltip>
        </Box>
      </Toolbar>
    </StyledAppBar>
  );
}

export default Header;
