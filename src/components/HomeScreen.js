import React, { useEffect } from 'react';
import { Element } from 'react-scroll';
import '../styles/HomeScreen.css';
import pic1 from '../assets/images/pic1.png';
import pic2 from '../assets/images/pic2.png';
import pic3 from '../assets/images/pic3.png';
import pic4 from '../assets/images/pic4.png';
import pic5 from '../assets/images/pic5.png';
import MenuNav from './MenuNav';

const HomeScreen = () => {
    useEffect(() => {
        setTimeout(() => {
            imgMove();
        }, 1000);
    }, []); 

    function imgMove() {
        let picContainer = document.querySelector('.section__one__images');
        let evenPics = picContainer.querySelectorAll(':nth-child(even)');
        evenPics.forEach(function(item) {
            item.style.top = "30px";
        });
        let oddPics = picContainer.querySelectorAll(':nth-child(odd)');
        oddPics.forEach(function(item) {
            item.style.top = "-30px";
        });
    }
    return (
            <Element name="home">
                <div>
            <header className="header">
            <div className="header__logo">
                <h1 id="logoOnceADev">Once Upon A Dev</h1>
                <h2>Web Design Paris</h2>
            </div>
        </header>
        
        <MenuNav />

        
        <main>
            <section className="section__one">
                <div className="section__one__images">
                    <img src= {pic1} alt="woman"/>
                    <img src= {pic2} alt="woman"/>
                    <img src= {pic3} alt="woman"/>
                    <img src= {pic4} alt="woman"/>
                    <img src= {pic5} alt="woman"/>

                </div>
                <div className="section__one__introduction">
                    <p>Crafting Exquisite Digital Experiences for Your Unique Vision</p>
                </div>
            </section>
        </main>
        </div>
            </Element>
            
        
        
        
        
    );
};
export default HomeScreen;