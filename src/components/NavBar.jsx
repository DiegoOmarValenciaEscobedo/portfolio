import React from "react";
import { useState } from "react";
import Links from '../logic/Links';
import BottomBar from "./BottomBar";
import {useTheme} from "@mui/styles";
import logo from '../assets/Logo.png';
import { makeStyles } from '@mui/styles';
import MenuIcon from '@mui/icons-material/Menu';
import { animateScroll, Link } from "react-scroll";
import { AppBar, Toolbar, List, IconButton } from "@mui/material";


export default function Navbar() {

  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <>
      <AppBar>
        <Toolbar className={classes.container}>
          <img src={logo} alt="logo" className={classes.logo} onClick={()=>{animateScroll.scrollToTop();}} />
          <List className={classes.links}>
            {
              Links.map(({ id, text }, index) => (
                <Link 
                  key={index} to={id} spy={true} activeClass="active"
                  smooth={true} duration={1000} offset={-70}
                >
                  {text}
                </Link>
              ))
            }
          </List>
          <div className={classes.menuButton}>
            <IconButton edge='end' onClick={()=>{setOpen(true)}}>
              <MenuIcon fontSize="large" sx={{color: theme.palette.primary.contrastText}} />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <BottomBar open={open} setOpen={setOpen} />
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    justifyContent: 'space-between',
    fontFamily: theme.typography.fontFamily,
  },
  logo: {
    height: '4rem',
    '&:hover': {
      cursor: 'pointer'
    },
    objectFit: 'contain',
  },
  links:{
    width: '70%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    [theme.breakpoints.down('md')]:{
      display: 'none',
    },
    '& a': {
      padding: 10,
      '&:hover': {
        cursor: 'pointer',
        borderBottom: '3px solid #ccc',
      },
      fontSize: theme.typography.navbarSize,
    }
  },
  menuButton:{
    display: 'none',
    [theme.breakpoints.down('md')]:{
      display: 'block',
    },
  },
}));