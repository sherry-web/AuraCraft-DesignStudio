import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FDA521', // Main color (e.g., button background)
      light: '#FFC36E', // Lighter shade (e.g., hover effects)
      dark: '#C87D0A', // Darker shade (e.g., active state)
    },
    text: {
      primary: '#033043', // Default text color
      secondary: '#6B6B6B', // Subtle text
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    button: {
      textTransform: 'none', // Avoid uppercase button text
    },
  },
  shape: {
    borderRadius: 8, // Default border radius for components
  },
});

export default theme;
