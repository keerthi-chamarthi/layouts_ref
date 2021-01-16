import React from "react";
import ReactRoundedImage from "react-rounded-image";
import MyPhoto from "../images/capg.jpg";

const Profilepic = () => {
    return <ReactRoundedImage image={MyPhoto} roundedSize="0" imageWidth="40" imageHeight="40" />
};

export default Profilepic;