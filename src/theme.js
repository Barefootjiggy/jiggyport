import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ab598b', 
    },
    secondary: {
      main: '#FF204E', 
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        body {
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
