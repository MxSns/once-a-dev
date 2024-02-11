import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';

import '../styles/MenuNav.css';

const MenuNav = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    useEffect(() => {
        const handleClick = () => {
            setMenuIsOpen(!menuIsOpen);
            if (menuIsOpen) {
                document.getElementById('menuBtn').style.transform = 'rotate(0deg)';
                document.querySelector('.menu').style.width = '35px';
                document.querySelector('.menu').style.height = '35px';
            } else {
                document.getElementById('menuBtn').style.transform = 'rotate(405deg)';
                if (window.matchMedia("(min-width: 1200px)").matches) {
                    document.querySelector('.menu').style.width = '90%';
                    document.querySelector('.menu').style.height = '90px';
                    document.querySelector('.menu__nav').style.flexDirection = 'row';
                } else {
                    document.querySelector('.menu').style.width = '30%';
                    document.querySelector('.menu').style.height = '280px';
                }
                
            }
        };

        document.getElementById('selector').addEventListener('click', handleClick);

        return () => {
            document.getElementById('selector').removeEventListener('click', handleClick);
        };
    }, [menuIsOpen]);

    return (
        <div className="menu">
            <div className="menu__selector" id="selector">
                <button className="menu__selector__btn" id="menuBtn"></button>
            </div>
            <div className="menu__nav" >
                <Link to="home" smooth={true} duration={1000} className="nav-item">Home</Link>
                <Link to="about" smooth={true} duration={700} className="nav-item">About</Link>
                <Link to="services" smooth={true} duration={800} className="nav-item">Services</Link>
                <Link to="tech-stack" smooth={true} duration={900} className="nav-item">Tech Stack</Link>
                <Link to="contact" smooth={true} duration={1000} className="nav-item">Contact</Link>
            </div>
           
                

            
        </div>
    );
};

export default MenuNav;