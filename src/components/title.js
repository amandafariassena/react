import React from 'react';


export default class title extends React.Component{
    render(){
        return(
                <div>
                    <h4 className="h4"> {this.props.h4} </h4>
                    <h2 className="h2"> {this.props.h2} </h2>
                    <h1 className="h1"> {this.props.h1} </h1>
                </div>
        );
    }
}