import React from 'react';
import { Element } from 'react-scroll';

import '../styles/General.css';
import '../styles/SectionThree.css';
import seo from '../assets/images/seo.png';
import accessibility from '../assets/images/accessibility.png';
import eCommerce from '../assets/images/eCommerce.png';
import reactApp from '../assets/images/react-2.svg';
import maskedCoder from '../assets/images/mypfp.webp';

const SectionThree = () => {
    return (

            <Element name="services">
                <section className="section__three">
            <div className="section__three__main">
                <div className="section__three__intro">
                    <p className="section__three__intro__textYellow">
                    Parce que votre communication digitale est au coeur de votre réussite, 
                    </p>
                    <h1 className="h--white">Je propose une expertise dans les techniques de développement web les plus performantes.
                    </h1>

                </div>
                <div className="section__three__container__nb">
                    <div className="section__three__container__nb--one">
                        <div className="conseq__container__white">
                            <img className="nb__icon" src={seo} alt="SEO"/>
                            <p className="nb__rank">Optimisation SEO<span className="yellow">.</span></p>
                            <p className="nb__rank__title">Boostez votre visibilité et grimpez dans les résultats de recherche grâce à une stratégie SEO sur mesure.</p>

                        </div>
                        <div className="conseq__container__yellow">
                            <img className="nb__icon" src={accessibility} alt="Accessibility"/>
                            <p className="nb__rank">Accessibilité<span className="white">.</span></p>
                            <p className="nb__rank__title">J'élabore des solutions web qui répondent aux normes d'accessibilité les plus élevées, pour rendre votre contenu accessible à tous.</p>

                        </div>
                    </div>

                    <div className="section__three__container__nb--two">
                        <div className="conseq__container__white">
                            <img className="nb__icon" src={eCommerce} alt="eCommerce"/>
                            <p className="nb__rank">eCommerce<span className="yellow">.</span></p>
                            <p className="nb__rank__title">Ayant suivi une formation eCommerce, je vous accompagne dans la conception d'une boutique en ligne qui converti !</p>

                        </div>
                        <div className="conseq__container__yellow">
                            <img className="nb__icon" src={reactApp} alt="React developement"/>
                            <p className="nb__rank">Applications React.js<span className="white">.</span></p>
                            <p className="nb__rank__title">Spécialisé dans React.js, je propose des applications performantes et maintenables pour une UX optimale.</p>

                        </div>
                    </div>
                </div>
            </div>

                <div className="conseq__container__5">

                    <img src={maskedCoder} alt="profile pic"/>
                    <div className="conseq__text">
                        <h1>Développons ensemble une stratégie web gagnante !!</h1>
                        <p className="texteAccroche">Formé au design UI-UX, au eCommerce et au développement frontend sous React.js, mon travail se focalise sur trois axes: performance, accessibilité et expérience utilisateur. Des interfaces immersives et réactives, une stratégie SEO adaptée, pour booster votre visibilité en ligne !</p>
                        <p>Maxime S.</p>
                    </div>
                </div>
        </section>
            </Element>

    )
}
export default SectionThree;