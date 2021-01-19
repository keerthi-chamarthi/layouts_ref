import React from "react";
import Icons from "./icons";
import Grid from '@material-ui/core/Grid';
import Profile from "./Profile";
import Logo from "./logo";

import { v4 as uuidv4 } from 'uuid';

const Section3 = (props) => {
    const components = props.components;
    return(
        <Grid container >
            <Grid item xs = {2}>
                {components["icons"]!== undefined ? <Icons key = {uuidv4()} iconcomps = {components["icons"]} /> : null}
            </Grid>
            <Grid item xs = {5}>
                {components["profile"]!==undefined ? <Profile key = {new uuidv4()} details = {components["profile"]} />:null}
              </Grid>
              <Grid item xs = {5}>
                {components["company_logo"]!==undefined? <Logo key = {new uuidv4()} details = {components["company_logo"]} height = {50}/> : null}
              </Grid>
        </Grid>
    )
};

export default Section3;