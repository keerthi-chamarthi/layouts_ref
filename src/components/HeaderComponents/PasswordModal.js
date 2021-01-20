import React from "react";
import TextField from '@material-ui/core/TextField';
import { Button } from "@material-ui/core";

const PasswordModal = (props) => {
    const components = props.content.components;
    // return components.map((component)=>{
    //     if(component.type==="Textfield"){
    //         return <TextField label={component.name} variant="outlined"/>
    //     }
    //     else if(component.type === "Button"){
    //         return <Button>{component.name}</Button>
    //     }
    // });
    return <form>
        <TextField label = "Current Password" variant = "outlined"/><br/><br/>
        <TextField label = "New Password" variant = "outlined"/><br/><br />
        <TextField label = "Confirm Password" variant = "outlined"/><br/><br />
    </form>
};

export default PasswordModal;