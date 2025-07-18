import { createTheme } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#5B8DEF' },
    secondary: { main: '#FF7E6B' },
    success: { main: '#4CAF50' },
    error: { main: '#F44336' },
    grey,
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#5B8DEF' },
    secondary: { main: '#FF7E6B' },
    success: { main: '#4CAF50' },
    error: { main: '#F44336' },
    background: { default: '#121212' },
    text: { primary: '#ffffff' },
    grey,
  },
});
