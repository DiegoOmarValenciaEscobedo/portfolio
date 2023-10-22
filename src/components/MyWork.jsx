import React from 'react'
import {useTheme} from '@mui/styles';
import { makeStyles } from '@mui/styles';
import { Typography } from '@mui/material';

export default function MyWork({ id, title}) {

  const theme = useTheme();
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.info} id={id}>
        <Typography variant="h3">{title}</Typography>
      </div>
    </div>
  )

}

const useStyles = makeStyles( theme => ( {
  container: {
    backgroundColor: theme.palette.background.default,
    borderRadius: 20,
    minHeight: '100vh',
    margin: 15,
  },
  info: {
    maxWidth: '80vw',
    margin: '0 auto',
  },
}));