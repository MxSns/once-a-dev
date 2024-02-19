import React, { useEffect } from 'react';
import '../styles/WelcomeScreen.css';

const WelcomeScreen = ({ onClick }) => {
    useEffect(() => {
        const timer1 = setTimeout(logoAppear, 1000);
        const timer2 = setTimeout(sloganAppear, 1500); // Ajusté pour s'exécuter après sloganAppear
        const timer3 = setTimeout(buttonAppear, 2000); // Ajusté pour s'exécuter après buttonAppear

        // Nettoyage pour éviter des effets indésirables lors du démontage du composant
        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
        };
    }, []); // Tableau de dépendances vide pour exécuter une seule fois

    function logoAppear() {
        document.querySelector('#logoOnce').style.fontSize = '2em';
    }
    function sloganAppear() {
        document.querySelector('.slogan').style.opacity = '1';
    }
    function buttonAppear() {
        document.querySelector('.enter').style.opacity = '1';
    }

    return (
        <div className="logo">
            <h1 id="logoOnce">Once Upon A Dev</h1>
            <p className="slogan">Web Design</p>
            <button className="enter" onClick={onClick}>Enter</button>
        </div>
    );
};

export default WelcomeScreen;