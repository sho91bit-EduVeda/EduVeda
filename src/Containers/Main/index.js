import React,{Component} from 'react';
import {BrowserRouter} from 'react-router-dom';
import Header from '../../Components/Header/header.jsx';
import Body from '../../Components/Body/Body.jsx';


class Main extends Component{

    render(){
        return(
        <BrowserRouter>
            <Header/>
            <Body/>
        </BrowserRouter>
        );
    }
}

export default Main;
