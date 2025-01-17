import { Link } from 'react-router-dom';

export const Gnb = () =>{

    return(
        <nav>
            <div className="wrap">
                <Link className="nav-btn" to="/">Home</Link>
                <Link className="nav-btn" to="/page-styled">Style components</Link>
                <Link className="nav-btn" to="/page-state">useState</Link>
                <Link className="nav-btn" to="/page-effect">useEffect</Link>
                <Link className="nav-btn" to="/page-ref">useRef</Link>
                <Link className="nav-btn" to="/page-practice">practice</Link>
            </div>
        </nav>
    )
}
