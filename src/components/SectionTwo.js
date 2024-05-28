import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Element } from 'react-scroll';
import ReactPlayer from 'react-player';
import '../styles/General.css';
import '../styles/SectionTwo.css';
import devPic from '../assets/images/devAtWork.webp';
import whiteArrow from '../assets/images/regular--arrow--right--white.svg';
import presentationFr from '../assets/videos/secondeVideo1080.mp4';
import TypeWriter from '../components/TypeWriter';



const SectionTwo = () => {

    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    const [aboutIsOpen, setAboutIsOpen] = useState(false);

    const handleClick = () => {
        setAboutIsOpen(!aboutIsOpen);
    };

    return (
        <Element name="about">

        <div>
       <section className="section__two">
            <div className="section__two__main">
                <div className="section__two__image">
                    <img src= {devPic} alt="Web dev set up"/>
                </div>
                <div className="section__two__text">
                <h1>{t('hello')} <TypeWriter className="typeWriterContainer" /></h1>

                    <p>{t('section2-1')}</p>
                    <p>{t('section2-2')} </p>
                    <p>{t('section2-3')}</p>
                </div>
            </div>
            <div className="about">
                    <div className="lorem__button--black" id="select" onClick={handleClick}>
                        <p><strong>{t('a-propos')}</strong></p>
                        <img src={whiteArrow} alt="targetting arrow" />
                    </div>
                    <div className={`about__me ${aboutIsOpen ? 'open' : ''}`}>
                    {aboutIsOpen && (

                        <ReactPlayer
                            url={presentationFr}
                            playing={true}
                            volume={0.5}
                            width='80%'
                            height='80%'
                        />

                     )}
                    </div>
                </div>

        </section>
    </div>
    </Element>
    )
};
export default SectionTwo;