import { createTheme} from '@mui/material/styles';
import { Timeline } from '@mui/lab';


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
        timeline: {
          main: '#343960',
        },
    },
    typography: {
      fontFamily: [
        'Montserrat',
      ].join(','),
      fontSize: 12,
      infoSize: 16,
      titleSize: 22,
      navbarSize: 15,
    },
});

export default theme;