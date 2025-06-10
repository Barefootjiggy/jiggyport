import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: { main: '#ab598b' },
    secondary: { main: '#FF204E' },
  },
  typography: {
    fontFamily: 'Zen Dots, Roboto, Arial, sans-serif',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        body {
          /* Avoid fixed background on mobile */
          background-color: #fff;
          @media (min-width: 768px) {
            background-attachment: fixed;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
          }
        }
      `,
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: 'inherit',
          fontSize: '2.5rem', // responsive unit
        }
      }
    }
  }
});

export default theme;
