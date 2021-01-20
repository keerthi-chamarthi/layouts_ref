import React from "react";
import Hamburger from "./hamburger";
import Logo from "./logo";

import Grid from '@material-ui/core/Grid';

const Section1 = (props) => {
    const components = props.components;
    return(
        <Grid container>
            <Grid xs = {2} className = "hamburger">
                {components["hamburger"] !== undefined ? <Hamburger />:null}
            </Grid>
            <Grid xs = {4} className = "employwiselogo">
                {components["employwise_logo"] !== undefined ? <Logo details = {components["employwise_logo"]} />: null}
            </Grid>
        </Grid>
    )
};

export default Section1;