import React from 'react';
import web from '../src/Images/wao.gif';
import {NavLink} from "react-router-dom";
import Common from './Common';

const Home = () => {
    return(
    <Common  name="Grow your business now with " imgsrc={web} visit="/services" btname="Get Started"/>
    );
};

export default Home;