import React, { useState } from 'react';
import { Element } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import ReactPlayer from 'react-player';
import '../styles/General.css';
import '../styles/SectionFour.css';
import webDevWork from '../assets/images/developer.webp';
import htmlLogo from '../assets/images/html.svg';
import cssLogo from '../assets/images/css3.svg';
import jsLogo from '../assets/images/js.svg';
import sassLogo from '../assets/images/sass.svg';
import reactLogo from '../assets/images/react.svg';
import introduction from '../assets/videos/onUponADevEng.mp4';
import whiteArrow from '../assets/images/regular--arrow--right--white.svg';


const SectionFour = () => {

    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    const [aboutIsOpen, setAboutIsOpen] = useState(false);

    const handleClick = () => {
        setAboutIsOpen(!aboutIsOpen);
    };

    const techstack = [
        {id: 1, img: htmlLogo, text: t('html')},
        {id: 2, img: cssLogo, text: t('css')},
        {id: 3, img: sassLogo, text:t('sass')},
        {id: 4, img: jsLogo, text:t('javascript')},
        {id: 5, img: reactLogo, text:t('react')},
    ];

    return (
      <Element name="tech-stack">

        <section className="section__four">
            <div className="section__four__main">
                <div className="section__four__image">
                    <img src={webDevWork} alt="Web developer at work"/>
                </div>
                <div className="section__four__text">
                    <h1>Technology Stack</h1>
                </div>
            </div>
            <div className="section__four__logos">
                <ul>
                    {techstack.map(stack => (
                        <li className="section__four__item" key={stack.id}>
                            <img src={stack.img} alt={stack.text} className="section__four__img" />
                            <span>{stack.text}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="about__introduction">
                    <div className="button--black" id="select" onClick={handleClick}>
                        <p><strong>About my work</strong></p>
                        <img src={whiteArrow} alt="targetting arrow" />
                    </div>
                    <div className={`about__me ${aboutIsOpen ? 'open' : ''}`}>
                    {aboutIsOpen && (

                        <ReactPlayer
                            url={introduction}
                            playing={true}
                            volume={0.5}
                            width='80%'
                            height='80%'
                        />

                     )}
                    </div>
                </div>
        </section>
      </Element>
    );
};

export default SectionFour;