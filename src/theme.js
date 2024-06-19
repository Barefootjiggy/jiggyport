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
    allVariants: {
      color: '#482121',  // Use primary color for all typography variants
    },
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
    MuiSvgIcon: { 
      styleOverrides: {
        root: {
          color: 'inherit',  
          fontSize: '40px',  
        }
      }
    }
  }
});

export default theme;
