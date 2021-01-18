import React from "react";
import ReactRoundedImage from "react-rounded-image";

const Profilepic = (props) => {
    return <ReactRoundedImage image={props.source} roundedSize="0" imageWidth="40" imageHeight="40" />
};

export default Profilepic;