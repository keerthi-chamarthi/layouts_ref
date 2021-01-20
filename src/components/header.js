import React from 'react';
import '../Styles/header.css';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';

import Section1 from "./HeaderComponents/section1";
import Section3 from "./HeaderComponents/section3";

import data from "../JSON/data";
import trailcontent from "../JSON/trail.json";
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

function Header(props){
    const classes = useStyles();
    const content = props.data["content"];
    const children = content["children"];

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className = {classes.masthead}>
        <Grid container>
          <Grid item xs={4} md={3} className = "section1">
            {children["section1"]!==undefined? <Section1 key = {uuidv4()} components = {children["section1"]}/> : null}
          </Grid>
          <Grid item xs={1} md={3} lg={4} className = "section2">
          </Grid>
          <Grid item xs={7} md ={6} lg = {5} className = "section3">
            {children["section3"] !== undefined ? <Section3 key = {uuidv4()} components = {children["section3"]} /> : null}
          </Grid> 
        </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;