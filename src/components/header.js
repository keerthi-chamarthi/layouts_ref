import React from 'react';
import '../Styles/header.css';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import HomeIcon from '@material-ui/icons/Home';
import Grid from '@material-ui/core/Grid';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SettingsIcon from '@material-ui/icons/Settings';
import HelpIcon from '@material-ui/icons/Help';

import Hamburger from "./hamburger";
import Search from "./search";
import Profilepic from "./profilepic";
import Username from "./username";

import data from "../JSON/data";
import photo from "../images/logo.jpg";
import { v4 as uuidv4 } from 'uuid';


const useStyles = makeStyles((theme) => ({
    masthead : {
        backgroundColor : "white",
    },
    label : {
      color : "black",
    },
    blankspace : {
      backgroundColor : "black",
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
      color : "black"
    }
  }));

function Header(){
    const classes = useStyles();
    const children = data.content.children;
    console.log(children);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className = {classes.masthead}>
        <Grid container>
          <Grid item xs={1}>
            {children["hamburger"]!=undefined? <Hamburger key = {uuidv4()} /> : null}
          </Grid>
          <Grid item xs={5}>
          </Grid>
          <Grid item xs = {6}>
            <Grid container>
              <Grid item xs = {4}>
                <Grid container>
                  <Grid item xs = {3}>
                    {children["homeicon"]!=undefined?<HomeIcon fontSize="large" color = "action"/> : null}
                  </Grid>
                  <Grid item xs = {3}>
                    {children["notifications"]!=undefined ? <NotificationsIcon fontSize = "large" color = "action" /> : null}
                  </Grid>
                  <Grid item xs = {3}>
                    {children["settings"]!=undefined ? <SettingsIcon fontSize = "large" color = "action" /> : null}
                  </Grid>
                  <Grid item xs = {3}>
                    {children["help"]!=undefined? <HelpIcon fontSize = "large" color = "action" /> : null}
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs = {4}>
                <Grid container >
                  <Grid item xs = {2}>
                    <Profilepic key = {uuidv4()}/>
                  </Grid>
                  <Grid item xs = {10}>
                    <Username key = {new uuidv4()}/>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs = {4}>
              <img src={photo} width = "200" height = "40"/>
              </Grid>
            </Grid>
          </Grid> 
        </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;