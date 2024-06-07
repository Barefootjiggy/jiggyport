import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#482121', 
    },
    secondary: {
      main: '#CEE6F3', 
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
  components: {
    MuiSvgIcon: {  // Applies to all SVG icons
      styleOverrides: {
        root: {
          color: 'inherit',  // Icons will inherit the color from their parent container
          fontSize: '24px',  // Standard size for icons, adjust as needed
        }
      }
    }
  }
});

export default theme;
