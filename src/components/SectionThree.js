import React from 'react';
import { Element } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import '../styles/General.css';
import '../styles/SectionThree.css';
import seo from '../assets/images/seo.png';
import accessibility from '../assets/images/accessibility.png';
import eCommerce from '../assets/images/eCommerce.png';
import reactApp from '../assets/images/react-2.svg';
import maskedCoder from '../assets/images/mypfp.webp';

const SectionThree = () => {

    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (

            <Element name="services">
                <section className="section__three">
            <div className="section__three__main">
                <div className="section__three__intro">
                    <p className="section__three__intro__textYellow">
                    {t('section3-1')}
                    </p>
                    <h1 className="h--white">{t('section3-2')}</h1>

                </div>
                <div className="section__three__container__nb">
                    <div className="section__three__container__nb--one">
                        <div className="container__white">
                            <img className="nb__icon" src={seo} alt="SEO"/>
                            <p className="nb__rank">{t('SEO-1')}<span className="yellow">.</span></p>
                            <p className="nb__rank__title">{t('SEO-2')}</p>

                        </div>
                        <div className="container__yellow">
                            <img className="nb__icon" src={accessibility} alt="Accessibility"/>
                            <p className="nb__rank">{t('accessibility-1')}<span className="white">.</span></p>
                            <p className="nb__rank__title">{t('accessibility-2')}</p>

                        </div>
                    </div>

                    <div className="section__three__container__nb--two">
                        <div className="container__white">
                            <img className="nb__icon" src={eCommerce} alt="eCommerce"/>
                            <p className="nb__rank">eCommerce<span className="yellow">.</span></p>
                            <p className="nb__rank__title">{t('ecommerce')}</p>

                        </div>
                        <div className="container__yellow">
                            <img className="nb__icon" src={reactApp} alt="React developement"/>
                            <p className="nb__rank">Applications React.js<span className="white">.</span></p>
                            <p className="nb__rank__title">{t('react')}</p>

                        </div>
                    </div>
                </div>
            </div>

                <div className="container__5">

                    <img src={maskedCoder} alt="profile pic"/>
                    <div className="container__five__text">
                        <h1>{t('strategie')}</h1>
                        <p className="texteAccroche">{t('strategie-2')}</p>
                        <p>Maxime S.</p>
                    </div>
                </div>
        </section>
            </Element>

    )
}
export default SectionThree;