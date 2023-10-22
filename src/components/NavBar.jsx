import React from "react";
import { useState } from "react";
import Links from '../logic/Links';
import {useTheme} from "@mui/styles";
import { makeStyles } from '@mui/styles';
import logo from '../assets/logo_invert.jpg';
import MenuIcon from '@mui/icons-material/Menu';
import CancelIcon from '@mui/icons-material/Cancel';
import { animateScroll, Link } from "react-scroll";
import { AppBar, Toolbar, List, IconButton, Drawer, Divider, ListItem, ListItemIcon } from "@mui/material";


export default function Navbar() {

  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(true);

  return (
    <>
      <AppBar className={classes.section} >
        <Toolbar className={classes.toolbar}>
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
            <IconButton edge='end' className={classes.menuButton} onClick={()=>{setOpen(true)}}>
              <MenuIcon fontSize="large" sx={{color: theme.palette.primary.contrastText}} />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer 
        anchor="bottom" 
        open={open}
        onClose={() => setOpen(false)}
        className={classes.drawerLinks}
      >
        <IconButton edge='end' className={classes.menuButton} onClick={()=>{
          setOpen(false);
        }}>
          <CancelIcon fontSize="small"  />
        </IconButton>
       <Divider />
       {
          Links.map(({ id, text, icon }, index) => (
            <Link 
              key={index} to={id} spy={true} 
              smooth={true} duration={1000} offset={-70}
            >
              <ListItem>
                <span>
                  <ListItemIcon>
                    {icon}
                  </ListItemIcon>
                </span>
                {text}
              </ListItem>
            </Link>
          ))
       }
      </Drawer>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  section: {
    fontFamily: theme.typography.fontFamily,
    height: '4rem',
    justifyContent: 'center',
  },
  logo: {
    height: '3rem',
    objectFit: 'contain',
    '&:hover': {
      cursor: 'pointer'
    }
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  links:{
    [theme.breakpoints.down('md')]:{
      display: 'none',
    },
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '70%',
    '& a': {
      fontSize: theme.typography.fontSize,
      padding: 10,
      '&:hover': {
        cursor: 'pointer',
        color: theme.palette.primary.contrastText,
        borderBottom: '3px solid #ccc',
      }
    }
  },
  menuButton:{
    display: 'none',
    [theme.breakpoints.down('md')]:{
      display: 'block',
    },
  },
  drawerLinks: {
    '& a': {
      color: theme.palette.primary.contrastText,
      fontSize: theme.typography.fontSize,
      fontFamily: theme.typography.fontFamily,
      padding: 10,
      '&:hover': {
        cursor: 'pointer',
        color: theme.palette.primary.contrastText,
        fontWeight: 'bold',
      }
    }
  },
}));