import React from 'react'
import { Link } from 'react-scroll';
import gif from '../assets/Gif.gif';
import {useTheme} from '@mui/styles';
import { makeStyles } from '@mui/styles';
import TypeWriterEffect from 'react-typewriter-effect';

export default function Home({ id }) {

  const theme = useTheme();
  const classes = useStyles();

  return (
    <div className={classes.container} id={id}>
        <img src={gif} alt="gif" className={classes.gif}/>
        <div>
          <TypeWriterEffect
            text={'Hi, I\'m Diego Valencia.'}
            textStyle={{color: theme.dark, fontFamily: theme.typography.fontFamily, fontSize: theme.typography.titleSize}}
            startDelay={100}
            cursorColor={'transparent'}
          />
          <TypeWriterEffect
            text={'& I\'m an awesome Full Stack Developer.'}
            textStyle={{color: theme.palette.primary.main, fontFamily: theme.typography.fontFamily, fontSize: theme.typography.fontSize}}
            startDelay={3000}
          />
        </div>
        <div className={classes.button}>
          <Link 
            to={'contact'} spy={true} activeClass="active"
            smooth={true} duration={1000} offset={-70}
          >
            Contact me
          </Link>
        </div>
    </div>
  )

}

const useStyles = makeStyles( theme => ( {
  container: {
    margin: 15,
    display: 'flex',
    minHeight: '100vh',
    alignItems: 'center',
    flexDirection: 'column',
  },
  gif:{
    width: '30rem',
    objectFit: 'contain',
    [theme.breakpoints.down('md')]:{
      width: '20rem',
    },
  },
  button:{
    padding: 10,
    '&:hover': {
      cursor: 'pointer',
      fontWeight: 'bold',
    },
    marginTop: 50,
    borderRadius: 10,
    fontSize: theme.typography.infoSize,
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
  }
}));