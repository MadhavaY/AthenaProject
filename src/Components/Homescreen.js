import React from 'react';
import Navbar from './Navbar';
import Video from './Video';
import './Homescreen.css';
import Textfield from './Textfield';


function Homescreen() {

    

    return (
        <div className='HomeScreen'>
            <Navbar></Navbar>
            <Video></Video>
            <Textfield></Textfield>
        </div>
    )
}

export default Homescreen