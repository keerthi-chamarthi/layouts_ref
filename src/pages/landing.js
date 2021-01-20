import React, { useEffect,useState } from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import NeedToAct from '../components/needToAct';
import '../Styles/landing.css';
import AxiosService from "../services/axioservice";
import data from '../JSON/data';


function Landing(){
    
    const [headerdata,setHeaderdata] = useState(null);

    useEffect(()=>{
        if(headerdata === null){
        AxiosService().then(res => res).then(data => setHeaderdata(data));
        }
    });

    return(
        <div>
            <div className="header">
                {headerdata && <Header data = {headerdata} style = {{backgroundColor:"black"}}/>}
            </div>

            <div className="body">
                <div className="needToAct">
                    <NeedToAct/>
                </div>
                <div>Col2</div>
                <div>Col3</div>
            </div>

            <div className="footer">
                <Footer/>
            </div>

        </div>
    );
}

export default Landing;