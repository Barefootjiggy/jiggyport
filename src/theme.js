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
    MuiCssBaseline: {
      styleOverrides: `
        body {
          background-image: url('https://images.pexels.com/photos/2088172/pexels-photo-2088172.jpeg');
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          background-attachment: fixed;
        }
      `,
    },
    MuiSvgIcon: { // Applies to all SVG icons
      styleOverrides: {
        root: {
          color: 'inherit',  // Icons will inherit the color from their parent container
          fontSize: '40px',  // Standard size for icons, adjust as needed
        }
      }
    }
  }
});

export default theme;
