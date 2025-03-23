import { useState } from 'react';
import "./styles/Accordeon.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const AccordeonItem = ({ title, content, isOpen, onToggle }) => {
    return (
        <div className="accordeon-item">
            <div className={`accordeon-header ${isOpen ? 'open' : ''}`} onClick={onToggle}>
                <h3>{title}</h3>
                <FontAwesomeIcon icon={faChevronDown} className='chevronsDown'/>
            </div>
            {isOpen && <div className="accordeon-content">{content}</div>}
        </div>
    );
};

const Accordeon = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordeon = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const items = [
        {   
            title: "Éditeur du site",
            content: (
                <>
                <p className="accordeon-p">John Doe <br />
                    40 Rue Laure Diebold 69009 Lyon, France <br />
                    06 00 00 00 00 <br />
                    email
                </p>
                </>
            )
        },{
            title: "Hébergeur",
            content: (
                <>
                <p className="accordeon-p">Contenu</p>
                </>
            )
        },{
            title: "Crédits",
            content: (
                <>
                <p className="accordeon-p">
                    Site développé par John Doe, étudiant du CEF. <br />
                    Les images libres de droit sont issues du site <a href="https://pixabay.com/fr/" className='pixabay'>Pixabay</a>.
                </p>
                </>
            )
        }  
    ];

    return (
        <div className="accordeon">
            {items.map((item, index) => (
                <AccordeonItem 
                    key={index}
                    title={item.title}
                    content={item.content}
                    isOpen={openIndex === index}
                    onToggle={() => toggleAccordeon(index)}
                />
            ))}
        </div>
    );
};

export default Accordeon;