import React from 'react';


export default class Comments extends React.Component{
    render(){
        return(
            <div>
                <h5 className="text">{this.props.text}</h5>
            </div>
        );
    }
}