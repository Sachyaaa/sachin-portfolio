import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import roboto from '@fontsource/roboto'
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: 'Roboto',
    },
    h6:{
      fontFamily: 'Courgette'
    }
  },
  palette: {
    primary: {
      main: "#ffffff"
    },
    secondary: {
      main: "#FF6700" 
    },
    ter: {
      main: "#000000" 
    }
  },
  fontFamily: roboto
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
