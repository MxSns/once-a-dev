import React, { useEffect } from 'react';
import '../styles/WelcomeScreen.css';

const WelcomeScreen = ({onClick}) => {
    useEffect(() => {
        window.onload = () => {
            setTimeout(logoAppear, 1000);
            setTimeout(sloganAppear, 500);
            setTimeout(buttonAppear, 500);
    }
    function logoAppear() {
        document.querySelector('#logoOnce').style.fontSize = '40px';
    }
    function sloganAppear() {
        document.querySelector('.slogan').style.opacity = '1';
    }
    function buttonAppear() {
        document.querySelector('.enter').style.opacity = '1';
    }}
    );

    return (
        <div className="logo">
            <h1 id ="logoOnce">Once Upon A Dev</h1>
            <p className ="slogan">Web Design</p>
            <button className="enter" onClick={onClick}>Enter</button>
        </div>
    )
}
export default WelcomeScreen;