import React, { useState,useEffect } from "react";
import {getChangePasswordJSON} from "../../services/axioservice";
import PasswordModal from "./PasswordModal";

const ChangePassword = () => {
  const [details,setDetails] = useState(null);
  useEffect(()=>{
    if(details===null){
      getChangePasswordJSON().then(res => res).then(data => setDetails(data))
    }
  });
  return(
    <div>
      {details && <PasswordModal content = {details.content}/>}
    </div>
  )
};

export default ChangePassword;