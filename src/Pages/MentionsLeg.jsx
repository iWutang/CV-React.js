import Accordeon from "./components/Accordeon";
import '../assets/Mentions.css';

const MentionsLeg = () => {
    return <>
    <div>
        <div className="mentions-box1">
            <h1 className="title">MENTIONS LÉGALES</h1>
            <hr  className="separe-bar"/>
        </div>
        <div>
            <Accordeon />
        </div>
    </div>
    </>
}

export default MentionsLeg;