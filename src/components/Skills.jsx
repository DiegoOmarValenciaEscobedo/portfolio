import React from 'react'
import Icons from '../logic/Icons';
import {useTheme} from '@mui/styles';
import { makeStyles } from '@mui/styles';

export default function Skills({ id }) {

  const theme = useTheme();
  const classes = useStyles();

  return (
    <div className={classes.container} id={id}>
      <div className={classes.title}>
        What are my skills?
      </div>
      <div className={classes.contentContainer}>
        I love to learn new things and experiment with new technologies.
        <br/>These are some of the major languages, technologies, tools and platforms I have worked with:
        <div className={classes.subtitle}>
          Languages
        </div>
        <div className={classes.items}>
          {
            Object.values(Icons.languages).map((language) => (
              <div className={classes.item} key={language.text}>
                <img src={language.img} alt={language.text} className={classes.img}/>
                {language.text}
              </div>
            ))
          }
        </div>
        <div className={classes.subtitle}>
          Databases & Cloud
        </div>
        <div className={classes.items}>
          {
            Object.values(Icons.databases).map((language) => (
              <div className={classes.item} key={language.text}>
                <img src={language.img} alt={language.text} className={classes.img}/>
                {language.text}
              </div>
            ))
          }
        </div>
        <div className={classes.subtitle}>
          Frameworks & technologies
        </div>
        <div className={classes.items}>
          {
            Object.values(Icons.frameworks).map((language) => (
              <div className={classes.item} key={language.text}>
                <img src={language.img} alt={language.text} className={classes.img}/>
                {language.text}
              </div>
            ))
          }
        </div>
        <div className={classes.subtitle}>
          Tools & Platforms
        </div>
        <div className={classes.items}>
          {
            Object.values(Icons.tools).map((language) => (
              <div className={classes.item} key={language.text}>
                <img src={language.img} alt={language.text} className={classes.img}/>
                {language.text}
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )

}

const useStyles = makeStyles( theme => ( {
  container: {
    margin: 15,
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'column',
  },
  contentContainer: {
    padding: 30,
    display: 'flex',
    textAlign: 'center',
    flexDirection: 'column',
    color: theme.palette.primary.main,
    fontSize: theme.typography.titleSize,
    fontFamily: theme.typography.fontFamily,
  },
  title:{
    paddingTop: 20,
    fontSize: '3rem',
    fontWeight: 'bold',
    color: theme.palette.primary.main,
    fontFamily: theme.typography.fontFamily,
  },
  img:{
    height: 50,
  },
  items:{
    padding: 10,
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  subtitle:{
    paddingTop: 20,
    fontWeight: 'bold',
  },
  item:{
    padding: 15,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    fontSize: theme.typography.fontSize,
  },
}));