import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import './styles/Footer.css';
import ScrollToTopBtn from './TopButton';

const Footerbar = () => {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h4>John Doe</h4>
                    <ul>
                        <li>40 Rue Laure Diebold</li>
                        <li>69009 Lyon, France</li>
                        <li>Téléphone: 06 20 30 40 50</li>
                    </ul>
                    <div className="box-icons">
                        <a href="https://github.com/github-john-doe"target="_blank" className="icons"><i class='bx bxl-github'></i></a>
                        <a href="https://x.com" target="_blank" className="icons"><i class='bx bxl-twitter' ></i></a>
                        <a href="https://fr.linkedin.com" target="_blank" className="icons"><i class='bx bxl-linkedin-square' ></i></a>
                    </div>
                </div>
                <div className="footer-section">
                    <h4>Liens Utiles</h4>
                    <ul>
                        <li><NavLink to="/"><FontAwesomeIcon icon={faChevronRight} className='chevronR'/>Accueil</NavLink></li>
                        <li><NavLink to="/"><FontAwesomeIcon icon={faChevronRight} className='chevronR'/>À propos</NavLink></li>
                        <li><NavLink to="/services"><FontAwesomeIcon icon={faChevronRight} className='chevronR'/>Services</NavLink></li>
                        <li><NavLink to="/contact"><FontAwesomeIcon icon={faChevronRight} className='chevronR'/>Me contacter</NavLink></li>
                        <li><NavLink to="/mentions"><FontAwesomeIcon icon={faChevronRight} className='chevronR'/>Mentions Légales</NavLink></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Mes dernières réalisations</h4>
                    <ul>
                        <li><NavLink to="/realisations"><FontAwesomeIcon icon={faChevronRight} className='chevronR'/>Fresh food</NavLink></li>
                        <li><NavLink to="/realisations"><FontAwesomeIcon icon={faChevronRight} className='chevronR'/>Restaurant Akira</NavLink></li>
                        <li><NavLink to="/realisations"><FontAwesomeIcon icon={faChevronRight} className='chevronR'/>Espace bien-être</NavLink></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Mes derniers articles</h4>
                    <ul>
                        <li><NavLink to="/blog"><FontAwesomeIcon icon={faChevronRight} className='chevronR'/>Coder son site en HTML/CSS</NavLink></li>
                        <li><NavLink to="/blog"><FontAwesomeIcon icon={faChevronRight} className='chevronR'/>Vendre ses produits sur le web</NavLink></li>
                        <li><NavLink to="/blog"><FontAwesomeIcon icon={faChevronRight} className='chevronR'/>Se positionner sur Google</NavLink></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} John Doe. Tous droits résevés.
                    <ScrollToTopBtn />
                </p>
            </div>
        </div>
    );
};

export default Footerbar;