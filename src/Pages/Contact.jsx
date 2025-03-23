import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons/faLocationDot";
import { faMobileScreen } from "@fortawesome/free-solid-svg-icons/faMobileScreen";
import '../assets/Contact.css';

const Contact = () => {
    return <>
    <div className="main-contact">
        <div className="overlay">
            <div className="contact-box1">
                <div className="contact-box2">
                    <h1 className="title">ME CONTACTER</h1>
                    <p className="title2">
                        Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.
                    </p>
                    <hr className="separe-bar" />
                </div>
                <div className="contact-box3">
                    <form action="contact">
                        <h2 className="">Formulaire</h2>
                        <div className="mb-3">
                            <label htmlFor="contact" className="form-label">Nom</label>
                            <input type="name" id="" className="form-control" aria-describedby="nameHelp" placeholder="Votre Nom"/>
                            <div id="nameHelp" className="form-text"></div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="contact" className="form-label">Email</label>
                            <input type="email" id="" className="form-control" aria-describedby="emailHelp" placeholder="Votre email"/>
                            <div id="emailHelp" className="form-text"></div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="contact" className="form-label">Téléphone</label>
                            <input type="tel" id="" className="form-control" aria-describedby="telHelp" placeholder="Votre téléphone"/>
                            <div id="telHelp" className="form-text"></div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="contact" className="form-label">Motif</label>
                            <input type="text" id="" className="form-control" aria-describedby="motifHelp" placeholder="Motif"/>
                            <div id="motifHelp" className="form-text"></div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="contact" className="form-label">Message</label>
                            <textarea className="form-control" id="FormControlTextarea" rows="3" placeholder=" Votre Message..."></textarea>
                        </div>
                    </form>
                    <div className="contact-coords">
                        <h2 className="coords-title">Mes coordonnées</h2>
                        <p>
                            <FontAwesomeIcon icon={faLocationDot} /> 40 Rue Laure Diebold, 69009 Lyon, France <br />
                            <FontAwesomeIcon icon={faMobileScreen} /> 06 20 30 40 50
                        </p>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.6269657541047!2d4.796403976715944!3d45.7786657124015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1742252474062!5m2!1sfr!2sfr" width="500" height="300" style={{border:0 }} allowFullScreen={false} loading="lazy"></iframe>
                    </div>
                </div>
            </div>
        </div>

    </div>
    </>
}

export default Contact;