
const Progressbar = () => {
    return (
        <>
        <h4 className="skill-title">Mes compétences</h4>
        <h5 className="skill-title2 mt-3">HTML5 90%</h5>
        <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
           <div className="progress-bar bg-danger" style={{width: '90%' }}></div>
        </div>
        <h5 className="skill-title2 mt-3">CSS3 80%</h5>
        <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
            <div className="progress-bar bg-info" style={{width: '80%' }}></div>
        </div>
        <h5 className="skill-title2 mt-3">JAVASCRIPT 70%</h5>
        <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
            <div className="progress-bar bg-warning" style={{width: '70%' }}></div>
        </div>
        <h5 className="skill-title2 mt-3">PHP 60%</h5>
        <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
            <div className="progress-bar bg-success" style={{width: '60%' }}></div>
        </div>
        <h5 className="skill-title2 mt-3">REACT 50%</h5>
        <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
            <div className="progress-bar bg-primary" style={{width: '50%' }}></div>
        </div>
        </>
    );
}

export default Progressbar;