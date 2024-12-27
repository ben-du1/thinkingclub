import { Link } from "react-router-dom"
import { SiGoogleclassroom, SiInstagram } from "react-icons/si";

const Nav = () => {
    return (
        <div className="Nav">
            <h1><Link to="/"><img src="logo.png"/> CCA THINKING CLUB</Link></h1>
            {/* <h2><Link to="/merch">Merch</Link></h2> */}
            {/* <h2><Link to="/archive">Archive</Link></h2> */}
            {/* <h2>Join</h2> */}
            <div className="icons">
            <a href="https://classroom.google.com/c/NjYyMzE2MjMzNzQx?cjc=3nlmsv3" target="_blank"><SiGoogleclassroom size={35}/></a>
            <a href="https://www.instagram.com/ccathinkingclub" target="_blank"><SiInstagram size={35} /></a>
            </div>
        </div>
    )
}

export default Nav