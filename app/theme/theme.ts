// app/theme/theme.ts
import { createTheme } from '@mui/material/styles';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Customize your primary color
    },
    secondary: {
      main: '#dc004e', // Customize your secondary color
    },
  },
  typography: {
    h1: {
      fontSize: '2.5rem', // Customize your typography
    },
  },
});

export default theme;
