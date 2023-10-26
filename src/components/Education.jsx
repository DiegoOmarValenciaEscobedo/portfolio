import React from 'react';
import itm from '../assets/ITM.png';
import isc from '../assets/ISC.jpg';
import {useTheme} from '@mui/styles';
import { Chrono } from "react-chrono";
import { makeStyles } from '@mui/styles';
import { Typography } from '@mui/material';

const events = [
  { title: "2019 - Now" },
  { title: "2022 - Now" },
];

export default function Education({ id }) {

  const theme = useTheme();
  const classes = useStyles();

  const timeLineTheme = {
    secondary: theme.palette.primary.main,
    cardTitleColor: theme.palette.primary.main,
    primary: theme.palette.primary.contrastText,
    titleColor: theme.palette.primary.contrastText,
    titleColorActive: theme.palette.primary.contrastText,
  };

  return (
    <div className={classes.container} id={id}>
        <div className={classes.title}>
          My academic background
        </div>
        <div className={classes.timeline}>
          <Chrono 
            items={events} mode="VERTICAL_ALTERNATING" 
            hideControls={true} itemWidth={150} theme={timeLineTheme}
          >
            <div className={classes.card}>
              <Typography variant="h6" component="h1">
                Instituto Tecnológico de Morelia
              </Typography>
              <Typography>Engineering in Computer Systems</Typography>
              <img src={itm} alt="Instituto Tecnológico de Morelia" className={classes.image}/>
            </div>
            <div className={classes.card}>
              <Typography variant="h6" component="h1">
                Instituto Tecnológico de Morelia
              </Typography>
              <Typography>Software Engineering specialization</Typography>
              <img src={isc} alt="Ingenieria en sistemas computacionales" className={classes.image}/>
            </div>
          </Chrono>
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
    [theme.breakpoints.down('md')]: {
      minHeight: '30vh',
    },
    backgroundColor: theme.palette.primary.main,
  },
  title: {
    paddingTop: 20,
    fontSize: '3rem',
    fontWeight: 'bold',
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.primary.contrastText,
  },
  image:{
    width: 90,
    borderRadius: 50,
  },
  timeline:{
    padding: 20,
  },
  card:{
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  },
}));