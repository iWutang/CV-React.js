import '../assets/Real.css';

const Real = () => {
    return <> 
        <section className="box-real">
            <h1 className="title">PORTFOLIO</h1>
            <h2 className="title2">Voici quelques-unes de mes réalisations.</h2>
            <hr className="separe-bar"/>
        </section>
        <section className='card-box'>
            <div className=" presentation-cards row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="card h-100">
                        <img src="https://cdn.pixabay.com/photo/2015/05/30/01/18/vegetables-790022_1280.jpg" alt="Panier de légumes" />
                        <div className="card-body">
                            <h5 className="card-title">Fresh Food</h5>
                            <p className="card-text">Réalisation d'un site avec commande en ligne.</p>
                            <button className='VoirBtn'>Voir</button>
                        </div>
                        <div className="card-footer">
                            <small className="text-body-secondary">Site réalisé avec PHP et MySQL</small>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src="https://cdn.pixabay.com/photo/2014/05/26/14/53/sushi-354628_1280.jpg" alt="Ensemble de sushis" />
                        <div className="card-body">
                            <h5 className="card-title">Restaurant Akira</h5>
                            <p className="card-text">Réalisation d'un site vitrine.</p>
                            <button className='VoirBtn'>Voir</button>
                        </div>
                        <div className="card-footer">
                            <small className="text-body-secondary">Site réalisé avec WordPress</small>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src="https://cdn.pixabay.com/photo/2013/05/12/18/55/balance-110850_1280.jpg" alt="Bien-être" />
                        <div className="card-body">
                            <h5 className="card-title">Espace bien-être</h5>
                            <p className="card-text"> Réalisation d'un site vitrine pour un practicien de bien être.</p>
                            <button className='VoirBtn'>Voir</button>
                        </div>
                        <div className="card-footer">
                            <small className="text-body-secondary">Site réalisé en HTML/CSS</small>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
};

export default Real;