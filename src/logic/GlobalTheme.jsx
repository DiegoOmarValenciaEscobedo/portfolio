import { createTheme} from '@mui/material/styles';


const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
          main: '#343960',
        },
        secondary: {
          main: '#343960',
        },
        background: {
          default: '#d9d9d9',
          paper: '#343960',
        },
    },
    typography: {
      fontFamily: [
        'Montserrat',
        'sans-serif',
      ].join(','),
      fontSize: 13,
    },
});

export default theme;