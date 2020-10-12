import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { MdFingerprint} from 'react-icons/md'
import { FaBars, FaTimes} from 'react-icons/fa'
import { Button } from './Button'
import './Navbar.css';
import { IconContext } from 'react-icons/lib'


function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] =useState(true);

    // if its false its givingout bars but if its true it gives out the times for the menubutton
    //!click = false - meaning that when its false the close handleClick is a burger but once clicked it becomes true which opens
    // the nav menu bar on your screen coming from the left. 
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false)
        } else{
            setButton(true)
        }
    };

    useEffect(() => {
        showButton(); 
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <IconContext.Provider value={{ color: '#fff'}}>
                <div className="navbar">
                    <div className="navbar-container container">
                        {/* Link is basically a replacement for the a link */}
                        {/*  to is the same as href*/}
                        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                            <MdFingerprint className='navbar-icon' />
                            Lavish
                        </Link>
                        <div className="menu-icon" onClick={handleClick}>
                            {/* Conditional Operator: condition ? true : false */}
                            {click ? <FaTimes /> : <FaBars/>}
                        </div>
                        {/* if the button is click - the nave menu active becomes true but if when its false its nav menu*/}
                        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                            <li className="nav-item">
                                <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/services' className="nav-links" onClick={closeMobileMenu}>
                                    Services
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/products' className="nav-links" onClick={closeMobileMenu}>
                                    Products
                                </Link>
                            </li>
                            <li className="nav-btn">
                                {button ? (
                                    <Link to='/sign-up' className="btn-link">
                                        <Button buttonStyle='btn--outline'>SIGN UP</Button>
                                    </Link>
                                ) : (
                                    <Link  to='/sign-up'className="btn-link" onClick={closeMobileMenu}>
                                        <Button buttonStlye='btn--outline' 
                                        buttonSize='btn--mobile'>SIGN UP</Button>
                                    </Link>
                                )}
                            </li>
                        </ul>
                    </div>
                </div>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
