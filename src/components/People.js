import React from 'react';
import teste from './news_01.jpg';

    export default  class People extends React.Component{
        render(){
            return(
                <div className="autor">
                    <div className="circle">
                        <img  src={teste} alt="autor" />
                    </div>
                    <h6>by Creed Brotton</h6>
                </div>
            );
        }
    }