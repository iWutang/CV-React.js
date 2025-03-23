import { Skills } from "../Pages/components/skills";
import { Link, NavLink } from "react-router-dom";
import "../assets/Accueil.css";
import { useRef } from "react";
import Progressbar from "./components/Progressbar";


const Accueil = () => {

    const About = useRef(null);

    const scrollToSection = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
    <>
        <div className="containerOG">
            <div className="box1">
                <div className="box1-group">
                    <h1>Bonjour, je suis John Doe</h1>
                    <h2>Développeur web full stack</h2>
                    <button onClick={() => scrollToSection(About)} className="home-button">En savoir plus</button>
                </div>
            </div>
            <div className="box2">
                <div className="apropos" ref={About}>
                    <h3>À propos</h3>
                    <div className="Pres">
                        Passionné par l'informatique et les nouvelles <br /> technologies, j'ai suivi une formation d'<strong>intégrateur-</strong><strong>développeur web</strong> au CEF.
                        Au cours de cette formation, <br /> j'ai pu acquérir des bases solides pour travailler dans le <br /> <strong>domaine du developpement web.</strong> <br /><br />
                        Basé à Lyon, je suis en recherche d'une alternance au <br />sein d'une agence digitale pour consolider ma formation <br /> de <strong>développeur web full stack.</strong><br /><br />
                        J'accorde une attention particulière à la qualité du code <br /> que j'écris et je respecte les bonnes pratiques du web.
                    </div>
                </div>
                <div className="box2child2">
                    <img src="https://cdn.pixabay.com/photo/2015/01/12/10/45/man-597178_1280.jpg" alt="" className="image-skill"/>
                    <Progressbar />
                </div>
            </div>
        </div>
    </>
    );
}

export default Accueil;

