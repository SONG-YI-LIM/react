import { Link } from 'react-router-dom';
import {useEffect, useState} from 'react';

export const Gnb = () =>{
    const [modeTxt, setModeTxt] = useState('다크 모드');
    const [windowMode, setWindowMode] = useState(false);

    useEffect(()=>{
        const _body = document.querySelector('body');
        if(windowMode){
            _body?.classList.add('dark-mode');
            _body?.classList.remove('light-mode');
            setModeTxt('라이트 모드')
        }else{
            _body?.classList.add('light-mode');            
            _body?.classList.remove('dark-mode');
            setModeTxt('다크 모드')
        }
    }, [windowMode])

    return(
        <nav>
            <div className="wrap">
                <Link className="nav-btn" to="/">Home</Link>
                <Link className="nav-btn" to="/page-styled">Style components</Link>
                <Link className="nav-btn" to="/page-barrel">Barrel</Link>
                <Link className="nav-btn" to="/page-state">useState</Link>
                <Link className="nav-btn" to="/page-effect">useEffect</Link>
                <Link className="nav-btn" to="/page-ref">useRef</Link>
                <Link className="nav-btn" to="/page-practice">practice</Link>
                <button type="button" className="nav-btn mode-btn" onClick={()=>{setWindowMode(!windowMode)}}>{modeTxt}</button>
            </div>
        </nav>
    )
}
