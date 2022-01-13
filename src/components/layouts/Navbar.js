import React, { Component, createRef, Fragment, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
const Navbar = () => {
    const homeLink = useRef();
    const portfolioLink = useRef();
    const aboutMeLink = useRef();
    const contactLink = useRef();

    
    const location = useLocation();
    function updateNavLinks () {
        const navArr = [
            homeLink,
            portfolioLink,
            aboutMeLink,
            contactLink
        ];
        navArr.forEach(element => {
            if (element.current.className === 'nav link active') {
                console.log(`${element.current.className} for ${element.current.id}`);
                element.current.className = 'nav link';
                console.log(`${element.current.className} for ${element.current.id}`);

            }
            if(element.current.id === location.pathname) {
                element.current.className = 'nav link active';
            }
        });
    }
    
    return (
        <Fragment>
            <h1 className='header'><Link to='/'>Aaron Graybill</Link></h1>
            <div className='container'>
                <header className='d-flex justify-content-center py-3'>
                    <ul className='nav nav-pills'>
                        <li className='nav-item'>
                            <Link to='/' className='nav-link active' aria-current="page" ref={homeLink} id='/' onClick={updateNavLinks}>Home</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/portfolio' className='nav-link' aria-current="page" ref={portfolioLink} id='/portfolio' onClick={updateNavLinks}>Portfolio</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/aboutme' className='nav-link' aria-current="page" ref={aboutMeLink} id='/aboutme' onClick={updateNavLinks}>About Me</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/contact' className='nav-link' aria-current="page" ref={contactLink} id='/contact' onClick={updateNavLinks}>Contact</Link>
                        </li>
                    </ul>
                </header>
            </div>
        </Fragment>
    )
}

export default Navbar
