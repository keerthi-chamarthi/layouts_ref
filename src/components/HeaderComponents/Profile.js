import React from "react";
import Grid from '@material-ui/core/Grid';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Profilepic from "./profilepic";
import Username from "./username";
import MenuBar from "./profilemenu";

import { v4 as uuidv4 } from 'uuid';

const Profile = (props) => {
    return (
    <Grid container spacing = {4}>
    <Grid item xs = {2}>
      <Profilepic key = {new uuidv4()} source = {props.details.imagelink} />
    </Grid>
    <Grid item xs = {10}>
      <Username key = {new uuidv4()} name = {props.details.name} preferences = {props.details.preferences}/>
    </Grid>
  </Grid>);
};

export default Profile;