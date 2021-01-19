import React from "react";

const Logo = (props) => {
    const logoheight = props.height !== undefined ? props.height : 40;
    return <img src={props.details.imagelink} width = "200" height = {logoheight} />;
};

export default Logo;