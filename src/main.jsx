import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme.js';
import CssBaseline from '@mui/material/CssBaseline';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CssBaseline>
      <ThemeProvider theme={theme}>
        <App /> 
      </ThemeProvider>
    </CssBaseline>
  </React.StrictMode>,
);


