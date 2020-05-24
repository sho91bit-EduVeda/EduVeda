import React,{Component} from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Spin} from 'antd';
//import proptypes from 'prop-types'; 
import Header from '../../Components/Header/header.jsx';
import Body from '../../Components/Body/Body.jsx';


class Main extends Component{

    render(){
        return(
        <BrowserRouter>
            <Spin>
                <Header/>
                <Body/>
            </Spin>
        </BrowserRouter>
        );
    }
}

export default Main;
