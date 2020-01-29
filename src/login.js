import React from 'react';
import Nav2 from './components/Nav2';
import Title from './components/title';


export default class Login extends React.Component{
    render(){
        return(
        <div>
            <Nav2/>
            <div>
                <Title h1 ="USER AREA" />
            </div>
        </div>
        );
    }

}