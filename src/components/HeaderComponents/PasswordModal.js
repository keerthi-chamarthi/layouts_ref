import React from "react";
import TextField from '@material-ui/core/TextField';
import { Button } from "@material-ui/core";

const PasswordModal = (props) => {
    const components = props.content.components;
    const endfunction = props.endfunction;
    return <form>{components.map((component)=>{
        if(component.type === "Textfield"){
            return(<div>
                <TextField label = {component.name} variant = "outlined"/>
            </div>)
        }
        else if(component.type === "Button"){
            return(
                <div>
                    <Button variant = "contained" color = "primary" onClick = {endfunction}>{component.name}</Button>
                </div>
            )
        }
    })}</form>;
};

export default PasswordModal;