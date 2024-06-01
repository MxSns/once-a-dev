import React, { useEffect } from 'react';
import { Element } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import '../styles/HomeScreen.css';
import pic1 from '../assets/images/picture1.webp';
import pic2 from '../assets/images/picture2.webp';
import pic3 from '../assets/images/picture3.webp';
import pic4 from '../assets/images/picture4.webp';
import pic5 from '../assets/images/picture5.webp';
import fr from '../assets/images/fr.svg';
import gb from '../assets/images/gb.svg';
import MenuNav from './MenuNav';

const HomeScreen = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

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
            <div className="flags">
                <img src={gb} alt="english language" onClick={() => changeLanguage('en')} />
                <img src={fr} alt="french language" onClick={() => changeLanguage('fr')} />
            </div>
        </header>
        <MenuNav />

        <main>
            <section className="section__one">
                <div className="section__one__images">
                    <img src= {pic1} alt="woman"/>
                    <img src= {pic2} alt="woman by a car"/>
                    <img src= {pic3} alt="guitarist"/>
                    <img src= {pic4} alt="half self portrait of a woman"/>
                    <img src= {pic5} alt="dancer"/>

                </div>
                <div className="section__one__introduction">
                    <p>{t('introduction')}</p>
                </div>
            </section>
        </main>
        </div>
            </Element>

    );
};
export default HomeScreen;