import React from "react";

import Grid from '@material-ui/core/Grid';
import NotificationsIcon from '@material-ui/icons/Notifications';
import HomeIcon from '@material-ui/icons/Home';

const Icons = (props) => {
    const components = props.iconcomps;
    return(
    <Grid container>
        <Grid item xs = {6}>
            {components["notifications"] !== undefined ? <NotificationsIcon fontSize = "large" color = "action" /> : null}
        </Grid>
        <Grid item xs = {6}>
            {components["homeicon"] !== undefined ? <HomeIcon fontSize = "large" color= "action"/> : null}
        </Grid>
    </Grid>);

};

export default Icons;