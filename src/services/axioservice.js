import axios from 'axios';
import content from "../JSON/trail.json";
import changepasswordjson from "../JSON/passwordchange.json";

async function AxiosService(){
    //console.log(content);
    //const data = await axios.get("https://6a45b054-d9fd-48c1-8752-55f7d9f03230.mock.pstmn.io/masthead");
    return content;
}

async function getChangePasswordJSON(){
    return changepasswordjson;
}

export default AxiosService;
export {getChangePasswordJSON};