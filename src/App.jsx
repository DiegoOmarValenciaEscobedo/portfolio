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
import Experience from './components/Experience';

export default function App() {

  const theme = useTheme();
  const classes = useStyles();
  console.log(theme.palette.background.default);
  return (
    <>
      <Navbar />
      <div className={classes.content}>
        <Home id={'home'} title={'Home'}/>
        <About id={'about'} title={'About me'}/>
        <Skills id={'skills'} title={'My Coding Journey'}/>
        <Education id={'education'} title={'Education'}/>
        <Experience id={'experience'} title={'Experience'}/>
        <MyWork id={'work'} title={'My Work'}/>
        <Contact id={'contact'} title={'Get in touch'}/> 
      </div> 
    </>
  )

}

const useStyles = makeStyles((theme) => ({
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    paddingTop: '4rem',
  }
}));