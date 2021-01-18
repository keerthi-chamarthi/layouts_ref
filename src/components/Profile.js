import React from "react";
import Grid from '@material-ui/core/Grid';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

import Profilepic from "./profilepic";
import Username from "./username";
import MenuBar from "./profilemenu";

import { v4 as uuidv4 } from 'uuid';
import { Details } from "@material-ui/icons";

const Profile = (props) => {
    return (
    <Grid container >
    <Grid item xs = {2}>
      <Profilepic key = {new uuidv4()} source = {props.details.imagelink} />
    </Grid>
    <Grid item xs = {9}>
      <Username key = {new uuidv4()} name = {props.details.name}/>
    </Grid>
    <Grid item xs = {1}>
      <MenuBar key = {new uuidv4()} options = {props.details.options}/>
    </Grid>
  </Grid>);
};

export default Profile;