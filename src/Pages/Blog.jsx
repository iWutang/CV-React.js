import DropModal from "./components/DropModal";
import '../assets/Blog.css';

const Blog = () => {
    return (
    <>
    <section className="blog-box-1">
        <h1 className="title">BLOG</h1>
        <h2 className="title2">Retrouvez ici quelques articles sur le développement web</h2>
        <hr className="separe-bar" />
    </section>
    <div className="row row-cols-1 row-cols-md-3 g-4" id="blog-group">
        <div className="col">
            <div className="card h-100">
                <img src="https://cdn.pixabay.com/photo/2016/03/27/18/54/technology-1283624_1280.jpg" alt="programmation" />
                <div className="card-body">
                    <h5 className="card-title">Coder son site en HTML/CSS</h5>
                    <p className="card-text">Some quick example text to build on the <br /> card title and make up the bulk of the card's <br /> content.</p>
                    <DropModal />
                </div>
                <div className="card-footer">
                    <small className="text-body-secondary">Publié le 22 août 2022</small>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card h-100">
                <img src="https://cdn.pixabay.com/photo/2017/09/07/08/54/money-2724241_1280.jpg" alt="Argent" />
                <div className="card-body">
                    <h5 className="card-title">Vendre ses produits sur le web</h5>
                    <p className="card-text">Some quick example text to build on the <br /> card title and make up the bulk of the card's <br /> content.</p>
                    <DropModal />
                </div>
                <div className="card-footer">
                    <small className="text-body-secondary">Publié le 20 août 2022</small>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card h-100">
                <img src="https://cdn.pixabay.com/photo/2014/09/24/14/29/macbook-459196_640.jpg" alt="Indexage web" />
                <div className="card-body">
                    <h5 className="card-title">Se positionner sur Google</h5>
                    <p className="card-text">Some quick example text to build on the <br /> card title and make up the bulk of the card's <br /> content.</p>
                    <DropModal />
                </div>
                <div className="card-footer">
                    <small className="text-body-secondary">Publié le 1 août 2022</small>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card h-100">
                <img src="https://cdn.pixabay.com/photo/2018/02/24/21/40/smartphone-3179295_1280.jpg" alt="Responsive design" />
                <div className="card-body">
                    <h5 className="card-title">Coder en responsive design</h5>
                    <p className="card-text">Some quick example text to build on the <br /> card title and make up the bulk of the card's <br /> content.</p>
                    <DropModal />
                </div>
                <div className="card-footer">
                    <small className="text-body-secondary">Publié le 31 juillet 2022</small>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card h-100">
            <img src="https://cdn.pixabay.com/photo/2016/02/19/12/37/seo-1210158_1280.jpg" alt="Technique de référencement" />
                <div className="card-body">
                    <h5 className="card-title">Techniques de référencement</h5>
                    <p className="card-text">Some quick example text to build on the <br /> card title and make up the bulk of the card's <br /> content.</p>
                    <DropModal />
                </div>
                <div className="card-footer">
                    <small className="text-body-secondary">Publié le 30 juillet 2022</small>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card h-100">
                <img src="https://cdn.pixabay.com/photo/2023/10/10/05/52/website-8305451_640.jpg" alt="Apprendre à coder" />
                <div className="card-body">
                    <h5 className="card-title">Apprendre à coder</h5>
                    <p className="card-text">Some quick example text to build on the <br /> card title and make up the bulk of the card's <br /> content.</p>
                    <DropModal />
                </div>
                <div className="card-footer">
                    <small className="text-body-secondary">Publié le 12 juillet 2022</small>
                </div>
            </div>
        </div>
    </div>
    </>
        
    );
};

export default Blog;