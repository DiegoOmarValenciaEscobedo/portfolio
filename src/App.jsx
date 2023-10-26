import React from 'react';
import Home from './components/Home';
import {useTheme} from "@mui/styles";
import About from './components/About';
import Navbar from './components/NavBar';
import { makeStyles } from '@mui/styles';
import MyWork from './components/MyWork';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Education from './components/Education';

export default function App() {

  const theme = useTheme();
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <div className={classes.content}>
        <Home id={'home'}/>
        <About id={'about'}/>
        <Skills id={'skills'}/>
        <Education id={'education'}/>
        <MyWork id={'work'}/>
        <Contact id={'contact'}/> 
      </div> 
    </>
  )

}

const useStyles = makeStyles((theme) => ({
  content: {
    display: 'flex',
    paddingTop: '4rem',
    textAlign: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  }
}));