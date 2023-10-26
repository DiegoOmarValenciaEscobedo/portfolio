import React from 'react';
import cvu from '../assets/CVU.pdf';
import git from '../assets/Git.png';
import {useTheme} from '@mui/styles';
import mail from '../assets/Mail.png';
import Gif from '../assets/CallMe.gif';
import { makeStyles } from '@mui/styles';
import linkedin from '../assets/Linkedin.png';
import whatsapp from '../assets/Whatsapp.png';
import facebook from '../assets/Facebook.png';

export default function Contact({ id }) {

  const theme = useTheme();
  const classes = useStyles();

  return (
    <div className={classes.container} id={id}>
        <img src={Gif} alt="CallMe" className={classes.gif} />
        <div className={classes.title}>
          Contact me
        </div>
        <div className={classes.contactContainer}>
          <div className={classes.description}>
            There is my CV you can download it and contact me.
          </div>
          <div className={classes.button}>
            <a href={cvu} target='blank' style={{textDecoration:'none'}} >Download CV</a>
          </div>
          <div className={classes.description}>
            Or you can contact me by:
          </div>
          <div className={classes.itemContact} >
            <a href='https://github.com/DiegoOmarValenciaEscobedo' target='blank' style={{textDecoration:'none'}} >
              <img src={git} alt="git" className={classes.item} />
            </a>
            <a href='https://www.linkedin.com/in/diego-omar-valencia-escobedo-7b6046265/' target='blank' style={{textDecoration:'none'}} >
              <img src={linkedin} alt="linkedin" className={classes.item} />
            </a>
            <a href='mailto:dv26143@gmail.com' target='blank' style={{textDecoration:'none'}} >
              <img src={mail} alt="mail" className={classes.item} />
            </a>
            <a href='https://wa.me/524341555469' target='blank' style={{textDecoration:'none'}} >
              <img src={whatsapp} alt="whatsapp" className={classes.item} />
            </a>
            <a href='https://www.facebook.com/profile.php?id=100010754568618' target='blank' style={{textDecoration:'none'}} >
              <img src={facebook} alt="facebook" className={classes.item} />
            </a>
          </div>
        </div>
        <div className={classes.footer}>
          Derechos reservados  Diego Dev &copy; 2023 
        </div>
    </div>
  )

}

const useStyles = makeStyles( theme => ( {
  container: {
    margin: 15,
    padding: 15,
    width: '90%',
    display: 'flex',
    borderRadius: 25,
    minHeight: '100vh',
    alignItems: 'center',
    flexDirection: 'column',
    [theme.breakpoints.down('md')]: {
      minHeight: '30vh',
    },
    justifyContent: 'space-between',
    fontSize: theme.typography.titleSize,
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
  },
  title: {
    paddingTop: 20,
    fontSize: '3rem',
    fontWeight: 'bold',
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.primary.contrastText,
  },
  gif:{
    width: '10rem',
    objectFit: 'contain',
    [theme.breakpoints.down('md')]: {
      width: '7rem',
      paddingTop: 20,
      paddingBottom: 20,
    },
  },
  description:{
    padding: 20,
  },
  button:{
    margin: 15,
    padding: 15,
    borderRadius: 5,
    textDecoration: 'none',
    fontSize: '0.8rem',
    '&:hover': {
      fontWeight: 'bold',
    },
    color: theme.palette.primary.main,
    fontFamily: theme.typography.fontFamily,
    backgroundColor: theme.palette.primary.contrastText,
  },
  contactContainer:{
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  item:{
    margin: 10,
    width: '3rem',
    objectFit: 'contain',
    [theme.breakpoints.down('md')]: {
      width: '3rem',
      paddingTop: 20,
      paddingBottom: 20,
    },
    '&:hover': {
      width: '4rem',

    },
  },
  footer:{
    width: '100%',
    height: '10vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: theme.typography.fontSize,
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.primary.contrastText,
  },
  itemContact:{
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
}));