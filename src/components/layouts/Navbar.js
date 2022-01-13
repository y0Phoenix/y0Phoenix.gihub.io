import React, { Fragment, useRef } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const homeLink = useRef(null);
    const portfolioLink = useRef(null);
    const aboutMeLink = useRef(null);
    const contactLink = useRef(null);
    const headerLink = {
        "textDecoration": "none"
    }
    return (
        <Fragment>
            <h1 className='header'><Link to='/' style={headerLink}>Aaron Graybill</Link></h1>
            <div className='container'>
                <header className='d-flex justify-content-center py-3'>
                    <ul className='nav nav-pills'>
                        <li className='nav-item'>
                            <Link to='/' className='nav-link active' aria-current="page" ref={homeLink}>Home</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/portfolio' className='nav-link' aria-current="page" ref={portfolioLink}>Portfolio</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/aboutme' className='nav-link' aria-current="page" ref={aboutMeLink}>About Me</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/contact' className='nav-link' aria-current="page" ref={contactLink}>Contact</Link>
                        </li>
                    </ul>
                </header>
            </div>
        </Fragment>
    )
}

export default Navbar
