import React from "react";
import Links from '../logic/Links';
import { Link } from "react-scroll";
import {useTheme} from "@mui/styles";
import { makeStyles } from '@mui/styles';
import { Drawer, Divider, ListItem, ListItemIcon } from "@mui/material";

export default function BottomBar({ open, setOpen}) {

    const classes = useStyles();
    const theme = useTheme();

    return (
        <Drawer 
        anchor="bottom" 
        open={open}
        onClose={() => setOpen(false)}
        className={classes.drawerLinks}
      >
        {
        Links.map(({ id, text, icon }, index) => (
            <Link 
                key={index} to={id}
                smooth={true} duration={1000} offset={-70}
                onClick={()=>{setOpen(false);}}
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
        <Divider />
        <div className={classes.footer}>
            Derechos reservados  Diego Dev &copy; 2023 
        </div>
    </Drawer>
    )
}

const useStyles = makeStyles((theme) => ({
    drawerLinks: {
        '& a': {
            padding: 5,
            fontSize: theme.typography.fontSize,
            fontFamily: theme.typography.fontFamily,
            color: theme.palette.primary.contrastText,
            '&:hover': {
                cursor: 'pointer',
                fontWeight: 'bold',
            }
        }
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
    }
}));