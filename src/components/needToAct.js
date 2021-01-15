import React from 'react';
import Card from './cards';

function NeedToAct(){
    return(
        <div>
            <div>
                Need To Act
            </div>

            <div style={{marginRight:'100px'}}>
                {
                    ([...Array(10)]).map(index=>{
                        return <Card/>
                    })
                }
            </div>
        </div>
    );
}

export default NeedToAct;