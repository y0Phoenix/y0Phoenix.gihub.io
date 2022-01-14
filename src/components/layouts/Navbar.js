import React, { Component, createRef, Fragment, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
const Navbar = () => {
    const homeLink = useRef();
    const portfolioLink = useRef();
    const aboutMeLink = useRef();
    const contactLink = useRef();

    const location = useLocation();

    useEffect(() => {
        const navArr = [
            homeLink,
            portfolioLink,
            aboutMeLink,
            contactLink
        ];
        navArr.forEach(element => {
            if (element.current.className === 'nav-link active') {
                element.current.className = 'nav-link';
            }
            if(element.current.id === location.pathname) {
                element.current.className = 'nav-link active';
            }
        });
    }, [location])
    
    return (
        <Fragment>
            <h1 className='header'><Link to='/' className='header-link'>Aaron Graybill</Link></h1>
            <div className='container'>
                <header className='d-flex justify-content-center py-3'>
                    <ul className='nav nav-pills'>
                        <li className='nav-item'>
                            <Link to='/' className='nav-link active' aria-current="page" ref={homeLink} id='/'>Home</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/portfolio' className='nav-link' aria-current="page" ref={portfolioLink} id='/portfolio'>Portfolio</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/aboutme' className='nav-link' aria-current="page" ref={aboutMeLink} id='/aboutme'>About Me</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/contact' className='nav-link' aria-current="page" ref={contactLink} id='/contact'>Contact</Link>
                        </li>
                    </ul>
                </header>
            </div>
        </Fragment>
    )
}

export default Navbar
