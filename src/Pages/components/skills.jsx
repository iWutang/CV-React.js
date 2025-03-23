import './styles/CompSkills.css';

export function Skills () {
    return <>
    <h3 className="skill-title">Mes Compétences</h3>
    <section className="skill-main">
        <div className="skillbar">
            <div className="info">
                <p>HTML5</p>
                <p className="percent">90%</p>
            </div>
            <div className="bar">
                <span className="html"></span>
            </div>
        </div>
        <div className="skillbar">
            <div className="info">
                <p>CSS3</p>
                <p className="percent">80%</p>
            </div>
            <div className="bar">
                <span className="css"></span>
            </div>
        </div>
        <div className="skillbar">
            <div className="info">
                <p>JAVASCRIPT</p>
                <p className="percent">70%</p>
            </div>
            <div className="bar">
                <span className="js"></span>
            </div>
        </div>
        <div className="skillbar">
            <div className="info">
                <p>PHP</p>
                <p className="percent">60%</p>
            </div>
            <div className="bar">
                <span className="php"></span>
            </div>
        </div>
        <div className="skillbar">
            <div className="info">
                <p>REACT</p>
                <p className="percent">50%</p>
            </div>
            <div className="bar">
                <span className="react"></span>
            </div>
        </div>
    </section>
    </>
}