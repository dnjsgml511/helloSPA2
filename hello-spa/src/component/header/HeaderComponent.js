import {useState, useEffect} from 'react'
import '../../scss/header/header.scss'

const HeaderComponent = () => {

    const [scrollPosition, setScrollPosition] = useState(0);
    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    }
    useEffect(() => {
        window.addEventListener('scroll', updateScroll);
    });

    return (
        <div id="header" className={scrollPosition < 100 ? "original_header" : "change_header"} >
            <div id="text" className="show-anime">Portfolio</div>
            <div id="menu" className="show-anime">
                <div id="menu-text">MENU</div>
                <div>
                    <div className="bar" id="bar1"></div>
                    <div className="bar" id="bar2"></div>
                </div>
            </div>
        </div >
    )
}

export default HeaderComponent;