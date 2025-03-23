import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlassDollar, faDesktop, faFileCode } from '@fortawesome/free-solid-svg-icons';
import '../assets/Services.css';

const Services = () => {
    return <>
    <div className='main-services'>
        <section className="box-services">
            <h1 className="title">MON OFFRE DE SERVICES</h1>
            <h2 className="title2">Voici les préstations sur lesquelles je peux intervenir.</h2>
            <hr className="separe-bar"/>
        </section>
        <section className="services-cards">
                <div className="services">
                    <FontAwesomeIcon icon={faDesktop} className='services-icon'/>
                    <h3>UX DESIGN</h3>
                    <p>L'UX Design est une méthode de <br /> conception centrée sur l'utilisateur. Son but <br /> est d'offrir une expérience de navigation <br /> optimale à l'internaute.</p>
                </div>
                <div className="services">
                    <FontAwesomeIcon icon={faFileCode} className='services-icon'/>
                    <h3>DÉVELOPPEMENT WEB</h3>
                    <p className='p2'>Le développement de sites web repose sur l'utilisation des langages HTML, CSS, <br /> JavaScript et PHP.</p>
                </div>
                <div className="services">
                    <FontAwesomeIcon icon={faMagnifyingGlassDollar} className='services-icon'/>
                    <h3>RÉFÉRENCEMENT</h3>
                    <p>Le référencement naturel d'un site, aussi <br /> appelé SEO, consiste à mettre des <br /> techniques en oeuvre pour améliorer sa <br /> position dans les résultats des moteurs de <br /> recherche.</p>
                </div>
            </section>
    </div>
    </>
}

export default Services;