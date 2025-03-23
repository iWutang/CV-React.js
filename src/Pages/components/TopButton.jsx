import { useState, useEffect } from 'react';
import './styles/TopButton.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

const ScrollToTopBtn = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const ScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <>
            {isVisible && (
                <button onClick={ScrollToTop} style={buttonStyle}><FontAwesomeIcon icon={faChevronUp} className='chevronUp'/></button>
            )}
        </>
    );
};

const buttonStyle = {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    padding: '10px 15px',
    backgroundColor: '#EEE',
    color: '#000000',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    zIndex: 1000,
};

export default ScrollToTopBtn;



