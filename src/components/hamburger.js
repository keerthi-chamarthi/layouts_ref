import React from "react";
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const Hamburger = () => {
    return <IconButton edge="start" aria-label="menu">
                <MenuIcon />
            </IconButton>
}

export default Hamburger;