import React from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import NeedToAct from '../components/needToAct';
import '../Styles/landing.css';

function Landing(){
    return(
        <div>

            <div className="header">
                <Header/>
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