import React from 'react';
import {useTheme} from '@mui/styles';
import { Divider } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Projects from '../logic/Projects';

export default function MyWork({ id }) {

  const theme = useTheme();
  const classes = useStyles();

  return (
    <div className={classes.container} id={id}>
      <div className={classes.title}>
        My projects (This section is under construction)
      </div>
      <div className={classes.cardContainer} >
        {
          Projects.map((project) => {
            return (
              <div className={classes.card}>
                <img src={project.image} alt="profile" className={classes.cardImage}/>
                <div className={classes.cardTitle}>
                  {project.title}
                </div>
                <div className={classes.description}>
                  {project.description}
                </div>
                <Divider/>
                <div className={classes.description}>
                  Technologies used:
                </div>
                <div className={classes.technologies}>
                  {
                    project.technologies.map((tech) => {
                      return (
                        <div className={classes.pill}>
                          {tech}
                        </div>
                      )
                    })
                  }
                </div>
                <Divider/>
                <div className={classes.description}>
                  <b>I worked as a {project.rol}</b>
                </div>
                <div className={classes.description}>
                  you can see the code in:
                  <div className={classes.button}>
                    <a href={project.git} target="_blank" style={{textDecoration: 'none', color: theme.palette.primary.main}}>
                      Github
                    </a>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )

}

const useStyles = makeStyles( theme => ( {
  container: {
    margin: 15,
    width: '100%',
    display: 'flex',
    borderRadius: 25,
    minHeight: '100vh',
    flexDirection: 'column',
  },
  title:{
    paddingTop: 20,
    fontSize: '3rem',
    fontWeight: 'bold',
    color: theme.palette.primary.main,
    fontFamily: theme.typography.fontFamily,
  },
  cardContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  card: {
    margin: 10,
    width: 400,
    minHeight: 400,
    display: 'flex',
    borderRadius: 30,
    flexDirection: 'column',
    boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.5)',
    backgroundColor: theme.palette.background.default,
  },
  cardTitle: {
    padding: 10,
    fontSize: '1rem',
    fontWeight: 'bold',
    color: theme.palette.primary.main,
    fontFamily: theme.typography.fontFamily,
  },
  cardImage: {
    width: '100%',
    height: '40%',
    objectFit: 'cover',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  description: {
    padding: 10,
    display: 'flex',
    alignItems: 'center',
    fontWeight: 'lighter',
    flexDirection: 'column',
    justifyContent: 'center',
    color: theme.palette.primary.main,
    fontSize: theme.typography.fontSize,
    fontFamily: theme.typography.fontFamily,
  },
  pill:{
    margin: 5,
    padding: 5,
    borderRadius: 25,
    fontSize: '0.8rem',
    color: theme.palette.primary.main,
    fontFamily: theme.typography.fontFamily,
    backgroundColor: theme.palette.primary.contrastText,
  },
  button:{
    margin: 10,
    width: 100,
    borderRadius: 5,
    '&:hover': {
      fontWeight: 'bold',
    },
    fontFamily: theme.typography.fontFamily,
    backgroundColor: theme.palette.primary.contrastText,
  },
  technologies: {
    display: 'flex',
    flexWrap: 'wrap',
    paddingBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
}));