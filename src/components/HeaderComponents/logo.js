import React from "react";

const Logo = (props) => {
    const logoheight = props.height !== undefined ? props.height : 40;
    return <img src={props.details.imagelink} height = {logoheight} />;
};

export default Logo;