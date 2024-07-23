import { createTheme } from '@mui/material';
import { cyan, yellow } from '@mui/material/colors';

export const DarkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#42B7Bc',
      dark: '#4689Bc',
      light: '#42B7Bc',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#F5F5F5',
      dark: '#F5F5F5',
      light: '#F5F5F5',
      contrastText: '#ffffff',
    },
    background: {
      paper: '#303134',
      default: '#000000',
    },
  },
  typography: {
    allVariants: {
      color: 'white',
    }
  }
});
