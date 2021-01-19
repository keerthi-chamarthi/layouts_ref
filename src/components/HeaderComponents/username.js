import React from "react";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Menu from '@material-ui/core/Menu';
import Preference from "./preference";

const Username = (props) => {
    const preferences = props.preferences;
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return(<div> 
        <p style={{color: "black"}} >{props.name}<span><ExpandMoreIcon color="action" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} /></span></p>
        <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {preferences.map((option)=> <Preference item={option}/>)}
      </Menu>
        </div>);
};

export default Username;