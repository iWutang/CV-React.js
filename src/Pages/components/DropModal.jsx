import { useState } from 'react';
import './styles/DropModal.css';

const DropModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <div>
            <button className="modal-btn" onClick={toggleModal}>Lire la suite</button>
            {isOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}>&times;</span>
                        <h2>Contenu de la Modal</h2>
                        <p>Ceci est un exemple de modal.</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DropModal;
