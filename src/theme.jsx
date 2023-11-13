import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    common: {
      black: '#3A3A3A',
      white: '#fff',
    },
    primary: {
      main: '#00509d',
      dark: '#000000',
      light: '#494949',
      contrastText: '#fff',
    },
    secondary: {
      main: '#003F88', //dropdown bg
      dark: '#bd8800',
      light: '#ffe95a',
      contrastText: '#222222',
    },
    info: {
      main: '#2959b3',
    },
    text: {
      primary: '#222222',
      secondary: '#f4b721',
    },
  },
  typography: {
    fontFamily: 'Poppins',
    button: {
      fontWeight: 600,
    },
    allVariants: {
      fontSize: '14px',
    },
    h1: {
      fontWeight: 700,
      fontSize: '3rem',
    },
    h2: {
      fontWeight: 700,
      fontSize: '2.5rem',
    },
    h3: {
      fontWeight: 700,
      fontSize: '2rem',
    },
    h4: {
      fontWeight: 700,
      fontSize: '1.7rem',
    },
    h5: {
      fontWeight: 600,
      fontSize: '1.1rem',
    },
    h6: {
      fontWeight: 600,
      fontSize: '1rem',
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        color: 'primary',
        variant: 'contained',
      },
      styleOverrides: {
        containedSecondary: {
          fontWeight: 700,
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontWeight: '400',
          '&.Mui-error': {
            fontSize: '12px',
            
          },
        },
      },
    },
  },
});

export default theme;