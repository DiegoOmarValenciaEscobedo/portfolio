import React from 'react';
import {useTheme} from '@mui/styles';
import { makeStyles } from '@mui/styles';
import profile from '../assets/Profile.jpg';

export default function About({ id }) {

  const theme = useTheme();
  const classes = useStyles();

  return (
    <div className={classes.container} id={id}>
        <div className={classes.title}>
          Who I am?
        </div>
        <div className={classes.itemContainer} >
          <img src={profile} alt="profile" className={classes.image} />
          <div className={classes.info}>
          <b>Hello there!</b> <br/> <br/> I am Diego, currently a ninth-semester student at the Instituto Tecnológico de Morelia, in Systems Engineering career and specializing in Software Engineering. My journey in the world of technology has been marked by a deep passion for programming. I am a self-taught enthusiast, always eager to explore new horizons in the vast realm of coding.
          <br/><br/>
          With a proactive approach and a natural inclination for taking risks, I find joy in unraveling complex problems and crafting innovative solutions. My expertise spans across various programming languages and frameworks, a testament to my versatility in the ever-evolving tech landscape.
          <br/><br/>
          I believe in the power of continuous learning and possess a keen interest in embracing cutting-edge technologies. My drive to excel, coupled with my determination to learn, fuels my ambition to create meaningful and impactful software solutions.
          <br/><br/>
          Thank you for visiting my portfolio, and I look forward to connecting and collaborating on exciting projects!
          </div>
        </div>
    </div>
  )

}

const useStyles = makeStyles( theme => ( {
  container: {
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 25,
    minHeight: '100vh',
    [theme.breakpoints.down('md')]: {
      minHeight: '30vh',
    },
    margin: 15,
  },
  title: {
    color: theme.palette.primary.contrastText,
    fontFamily: theme.typography.fontFamily,
    fontSize: '3rem',
    fontWeight: 'bold',
    paddingTop: 20,
  },
  itemContainer: {
    display: 'flex',
    flexDirection: 'row',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
    alignItems: 'center',
    justifyContent: 'center',
  },
  info:{
    color: theme.palette.primary.contrastText,
    textAlign: 'justify',
    justifyContent: 'justify',
    fontFamily: theme.typography.fontFamily,
    [theme.breakpoints.down('md')]: {
      fontSize: theme.typography.fontSize,
    },
    fontSize: theme.typography.infoSize,
    fontWeight: 'lighter',
    paddingInline: 50,
    paddingBottom: 20,

  },
  image: {
    width: '20rem',
    [theme.breakpoints.down('md')]: {
      width: '12rem',
      paddingTop: 20,
      paddingBottom: 20,
    },
    objectFit: 'contain',
    backgroundColor: theme.palette.primary.main,
    borderRadius: 10,
    paddingInline: 50,
  },
}));