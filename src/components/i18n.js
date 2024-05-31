import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: {
                    "introduction": "Let's design together the digital solution that will embody your vision and identity!",
                    "hello": "Hello, I'm Maxime, developer:",
                    "section2-1": "My work is a fusion of artistry and precision, with a primary focus on two critical aspects of web development: SEO and accessibility.",
                    "section2-2": "I believe in building not just visually stunning websites, but also ones that are discoverable and inclusive. By optimizing for search engines, I ensure that your content reaches its intended audience, maximizing its impact.",
                    "section2-3": "Simultaneously, my dedication to accessibility means that every user, regardless of ability, can navigate and engage with your site seamlessly.",
                    "a-propos": "about",
                    "section3-1": "Because you aim for the highest standards in digital communication.",
                    "section3-2": "I provide expertise in the most modern approaches to web development.",
                    "SEO-1": "SEO optimization",
                    "SEO-2": "Unlock online visibility and boost rankings with my expert SEO strategies.",
                    "accessibility-1": "Web accessibility",
                    "accessibility-2": "Creating web solutions that adhere to the highest accessibility standards.",
                    "ecommerce": "Transform your eCommerce ambitions into reality with my expertise in crafting and optimizing innovative strategies and applications.",
                    "react": "Elevate user experiences with my skillful React development solutions",
                    "strategie": "Let's build together!",
                    "strategie-2": "Trained in UI-UX design, eCommerce, and frontend development with React.js, my work focuses on three main areas: performance, accessibility, and user experience. Immersive and responsive interfaces, an adapted SEO strategy, to boost your online visibility!",
                    "html": "Best HTML practices to improve your SEO",
                    "css": "CSS3 techniques for responsive and visually appealing web designs",
                    "sass": "Mastery of Sass for efficient, scalable, and easy-to-maintain CSS code.",
                    "javascript": "JavaScript expertise for interactive and dynamic user experiences",
                    "react": "React development solutions to create performant and reusable interface components.",
                    "nom": "name",
                    "envoyer": "send",
                    "home" : "Home",
                    "about": "About",
                }
            },
            fr: {
                translation: {
                    "introduction": "Elaborons ensemble la solution numérique qui incarnera votre vision, et votre identité !",
                    "hello": "Hello ! Je suis Maxime, developpeur:",
                    "section2-1": "Mon approche allie originalité et expertise technique, en mettant l'accent sur deux aspects essentiels du développement web: le référencement naturel et l'accessibilité.",
                    "section2-2": "Je m'efforce de créer des sites web à la fois esthétiques, accessibles et optimisés pour le référencement. En améliorant sa visibilité sur les moteurs de recherche, je m'assure que votre contenu touche son public cible, maximisant ainsi son efficacité.",
                    "section2-3": "En parallèle, ma spécialisation dans l'accessibilité garantit une navigation fluide pour tous les utilisateurs, quels que soient leurs besoins.",
                    "a-propos": "à propos",
                    "section3-1": "Parce que votre communication digitale est au coeur de votre réussite,",
                    "section3-2": "Je propose une expertise dans les techniques de développement web les plus performantes.",
                    "SEO-1": "Optimisation SEO",
                    "SEO-2": "Boostez votre visibilité et grimpez dans les résultats de recherche grâce à une stratégie SEO sur mesure.",
                    "accessibility-1": "Accessibilité",
                    "accessibility-2": "J'élabore des solutions web qui répondent aux normes d'accessibilité les plus élevées, pour rendre votre contenu accessible à tous.",
                    "ecommerce": "Ayant suivi une formation eCommerce, je vous accompagne dans la conception d'une boutique en ligne qui converti !",
                    "react": "Spécialisé dans React.js, je propose des applications performantes et maintenables pour une UX optimale.",
                    "strategie": "Développons ensemble une stratégie web gagnante !!",
                    "strategie-2": "Formé au design UI-UX, au eCommerce et au développement frontend sous React.js, mon travail se focalise sur trois axes: performance, accessibilité et expérience utilisateur. Des interfaces immersives et réactives, une stratégie SEO adaptée, pour booster votre visibilité en ligne !",
                    "html": "Meilleures pratiques HTML pour améliorer votre référencement SEO.",
                    "css": "Techniques CSS3 pour des conceptions web réactives et visuellement attrayantes.",
                    "sass": "Maitrise SaSS pour un code CSS efficace, évolutif et facile à maintenir.",
                    "javascript": "Expertise JavaScript pour des expériences utilisateurs interactives et dynamiques.",
                    "react": "Des applications développées sous React pour créer des composants d'interface performants et réutilisables.",
                    "nom": "Nom",
                    "envoyer": "Envoyer",
                    "home" : "Accueil",
                    "about": "A propos",
                }
            }
        },
        lng: "fr",
        fallbackLng: "en",
        interpolation: {
            escapeValue: false
        }
    });

    export default i18n;