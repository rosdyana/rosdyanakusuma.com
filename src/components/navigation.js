import React from "react";
import { makeStyles } from "@mui/styles";
import Avatar from '@mui/material/Avatar'
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { blue } from '@mui/material/colors';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {},
    title: {
        flexGrow: 1,
    },
}));

function Navigation(props) {
    const classes = useStyles();

    return (
        <AppBar position="static" className={classes.root}>
            <Toolbar>
            <Avatar sx={{ bgcolor: blue[200] }}>RK</Avatar>
            </Toolbar>
        </AppBar>
    );
}

export default Navigation;
